package apps.granite.sightly.templates;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.script.Bindings;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.scripting.SlingBindings;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.scripting.sightly.pojo.Use;
import org.apache.sling.xss.XSSAPI;
import org.slf4j.Logger;

import com.adobe.granite.ui.clientlibs.ClientLibrary;
import com.adobe.granite.ui.clientlibs.HtmlLibraryManager;
import com.adobe.granite.ui.clientlibs.LibraryType;

/*******************************************************************************
 * Sightly Clientlibs that can accept expression options for 'defer', 'async'
 *
 * See: https://github.com/nateyolles/aem-clientlib-async
 * 
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 ******************************************************************************/
public class ClientLibUseObject implements Use {

    private static final String BINDINGS_CATEGORIES = "categories";
    private static final String BINDINGS_MODE = "mode";
    private static final String BINDINGS_REL = "rel";

    /**
     * HTML markup for javascript. Add 'type="text/javascript"' if you are not
     * using HTML 5.
     */
    private static final String TAG_JAVASCRIPT = "<script type=\"text/javascript\" src=\"%s\" %s></script>\n";
    
    /**
     * HTML markup for stylesheets.
     */
    private static final String TAG_STYLESHEET = "<link rel=\"stylesheet\" href=\"%s\" %s type=\"text/css\">\n";

    /**
     * HTML markup for preload stylesheets.
     */
    private static final String TAG_PRELOAD_STYLESHEET = "<link rel=\"preload\" href=\"%s\" %s as=\"style\" onload=\"this.onload=null;this.rel='stylesheet'\">\n";

    /**
     * Valid void attributes for HTML markup of script element.
     */
    private static final List<String> VALID_JS_ATTRIBUTES = new ArrayList<String>(){{
        add("async");
        add("defer");
    }};
    
    /**
     * Sightly parameter that becomes the script element void attribute such as
     * 'defer' and 'async'. Valid values are listed in {@link #VALID_JS_ATTRIBUTES}.
     */
    private static final String BINDINGS_LOADING = "loading";
   

    private HtmlLibraryManager htmlLibraryManager = null;
    private String[] categories;
    private String loadingAttribute;
    private String loadingRel;
    private String mode;  
    private SlingHttpServletRequest request;
    private PrintWriter out;
    private Logger log;

    private XSSAPI xssAPI;

    /**
     * Same as AEM provided method with the addition of getting the XSSAPI
     * service and the two additional bindings for loading and onload.
     * 
     * @see libs.granite.sightly.templates.ClientLibUseObject#init(Bindings)
     */
    public void init(Bindings bindings) {               
        loadingAttribute = (String) bindings.get(BINDINGS_LOADING);
        loadingRel = (String) bindings.get(BINDINGS_REL);
        Object categoriesObject = bindings.get(BINDINGS_CATEGORIES);
        log = (Logger) bindings.get(SlingBindings.LOG);
        if (categoriesObject != null) {
            if (categoriesObject instanceof Object[]) {
                Object[] categoriesArray = (Object[]) categoriesObject;
                categories = new String[categoriesArray.length];
                int i = 0;
                for (Object o : categoriesArray) {
                    if (o instanceof String) {
                        categories[i++] = ((String) o).trim();
                    }
                }
            } else if (categoriesObject instanceof String) {
                categories = ((String) categoriesObject).split(",");
                int i = 0;
                for (String c : categories) {
                    categories[i++] = c.trim();
                }
            }
            if (categories != null && categories.length > 0) {
                mode = (String) bindings.get(BINDINGS_MODE);
                request = (SlingHttpServletRequest) bindings.get(SlingBindings.REQUEST);
                SlingScriptHelper sling = (SlingScriptHelper) bindings.get(SlingBindings.SLING);
                htmlLibraryManager = sling.getService(HtmlLibraryManager.class);
                xssAPI = sling.getService(XSSAPI.class);
            }
        }
    }

    /**
     * Essentially the same as the AEM provided method with the exception that
     * the HtmlLibraryManger's writeIncludes methods have been replaced with
     * calls to #includeLibraries.
     * 
     * @see libs.granite.sightly.templates.ClientLibUseObject#include()
     */
    public String include() {
        StringWriter sw = new StringWriter();

        if (categories == null || categories.length == 0)  {
            log.error("'categories' option might be missing from the invocation of the /apps/beagle/sightly/templates/clientlib.html" +
                    "client libraries template library. Please provide a CSV list or an array of categories to include.");
        } else {
            PrintWriter out = new PrintWriter(sw);
            if ("js".equalsIgnoreCase(mode)) {
                includeLibraries(out, LibraryType.JS);
            } else if ("css".equalsIgnoreCase(mode)) {
                includeLibraries(out, LibraryType.CSS);
            } else {
                includeLibraries(out, LibraryType.CSS);
                includeLibraries(out, LibraryType.JS);
            }
        }

        return sw.toString();
    }

    /**
     * Construct the HTML markup for the script and link elements.
     *
     * @param out The PrintWriter object responsible for writing the HTML.
     * @param LibraryType The library type either CSS or JS.
     */
    private void includeLibraries(PrintWriter out, LibraryType libraryType) {
        if (htmlLibraryManager != null && libraryType != null && xssAPI != null) { 
            Collection<ClientLibrary> libs = htmlLibraryManager.getLibraries(categories, libraryType, false, true);
            
            String attribute = StringUtils.EMPTY;
            String relAttribute = StringUtils.EMPTY;
            
            if (libraryType.equals(LibraryType.JS)) {
              if (StringUtils.isNotBlank(loadingAttribute) && VALID_JS_ATTRIBUTES.contains(loadingAttribute.toLowerCase())) {
                  attribute = " ".concat(loadingAttribute.toLowerCase());
              }
            } else {
              relAttribute = loadingAttribute.toLowerCase();
            }
                                   
            String styleTag = StringUtils.isNotBlank(relAttribute) ? TAG_PRELOAD_STYLESHEET : TAG_STYLESHEET;
                
            for (ClientLibrary lib : libs) {
                String path = getIncludePath(request, lib, libraryType, htmlLibraryManager.isMinifyEnabled());
                if (path != null) {
                    out.format(libraryType.equals(LibraryType.JS) ? TAG_JAVASCRIPT : styleTag, path, attribute);
                }
            }
        }
    }

    /**
     * Returns the include path for the given library and type, respecting the proxy settings.
     * @param lib library
     * @param type type
     * @param minify {@code true} for minify
     * @return the path
     *
     * @see com.adobe.granite.ui.clientlibs.impl.HtmlLibraryWriter#getIncludePath(SlingHttpServletRequest, ClientLibrary, LibraryType, boolean)
     */
    private String getIncludePath(SlingHttpServletRequest request, ClientLibrary lib, LibraryType type, boolean minify) {
        String path = lib.getIncludePath(type, minify);
        if (lib.allowProxy() && (path.startsWith("/libs/") || path.startsWith("/apps/"))) {
            path = "/etc.clientlibs" + path.substring(5);
        } else {
            // check if request session has access (GRANITE-4429)
            if (request.getResourceResolver().getResource(lib.getPath()) == null) {
                path = null;
            }
        }
        return path;
    }
}

