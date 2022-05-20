package com.etisalat.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Binary;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import java.io.*;
import java.util.*;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(resourceTypes = "etisalat/components/page",
        methods = HttpConstants.METHOD_GET,
        selectors = "updateassetreferences", extensions = "html")
@ServiceDescription("Etisalat Update Asset References Servlet")
public class UpdateAssetsReferenceServlet extends SlingSafeMethodsServlet {

    private static final Logger LOG = LoggerFactory.getLogger(UpdateAssetsNameServlet.class);
    static StringBuffer logs = new StringBuffer();

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        logs.delete(0,logs.length());
        ResourceResolver resourceResolver = request.getResourceResolver();
        Session session = resourceResolver.adaptTo(Session.class);
        Node rootNode = null;
        String logFileLocation = "";
        String parentPagePath = "";
        String urlMappingFilePath = "";
        try {
            rootNode = session.getRootNode();
            logFileLocation = request.getRequestParameter("logFileLocation").getString();
            parentPagePath = request.getRequestParameter("parentPagePath").getString();
            urlMappingFilePath = request.getRequestParameter("urlMappingFilePath").getString();
            if(logFileLocation.equalsIgnoreCase("")) {
                response.getWriter().write("logFileLocation is not correct !!!");
            }
            if(parentPagePath.equalsIgnoreCase("")) {
                response.getWriter().write("parentPagePath is not correct !!!");
            }
            if(urlMappingFilePath.equalsIgnoreCase("")) {
                response.getWriter().write("urlMappingFilePath is not correct !!!");
            }
            Node parentPageNode = rootNode.getNode(parentPagePath.substring(1));
            Node urlMappingFileNode = rootNode.getNode(urlMappingFilePath.substring(1)+"/jcr:content");
            Map<String,String> map = new HashMap<String,String>();
            InputStream is = urlMappingFileNode.getProperty("jcr:data").getBinary().getStream();
            BufferedInputStream bis = new BufferedInputStream(is);
            ByteArrayOutputStream buf = new ByteArrayOutputStream();
            int resultNumber = bis.read();
            while (resultNumber != -1) {
                byte b = (byte) resultNumber;
                buf.write(b);
                resultNumber = bis.read();
            }
            String[] LinkArr = buf.toString().split("\n");
            for(int i=0; i<LinkArr.length; i++){
                String line = LinkArr[i];
                String[] linkArray = line.split("~");
                map.put(linkArray[0],linkArray[1]);
            }
            String propListFilePath = "/var/asset-reference-update/propertyList";
            Node propListFileNode = rootNode.getNode(propListFilePath.substring(1)+"/jcr:content");
            InputStream isPropList = propListFileNode.getProperty("jcr:data").getBinary().getStream();
            BufferedInputStream bisPropList = new BufferedInputStream(isPropList);
            ByteArrayOutputStream bufPropList = new ByteArrayOutputStream();
            int propListNumber = bisPropList.read();
            while (propListNumber != -1) {
                byte b = (byte) propListNumber;
                bufPropList.write(b);
                propListNumber = bisPropList.read();
            }
            String[] propList = bufPropList.toString().split(",");
            getAndUpdateFileReferences(session, parentPageNode, map, rootNode, response, propList);
            session.save();
            writeLogs(logFileLocation, logs.toString(), session);
            response.getWriter().write("</br>********************************Update Completed******************************");
        } catch (RepositoryException e) {
            try {
                writeLogs(logFileLocation, logs.toString(), session);
            } catch (RepositoryException repositoryException) {
                LOG.error("SEVERE "+e.getMessage());
            }
            LOG.error("SEVERE "+e.getMessage());
        }

    }

    private static void getAndUpdateFileReferences(Session session, Node parentNode, Map<String, String> map, Node rootNode, SlingHttpServletResponse response, String[] propList) throws RepositoryException, IOException {
        if (parentNode.hasNodes()) {
            Iterator<Node> ite = parentNode.getNodes();
            while (ite.hasNext()) {
                Node childNode = ite.next();
                String childNodePath = childNode.getPath();
                if (childNode.hasProperty("fileReference")) {
                    String fileReferenceVal = childNode.getProperty("fileReference").getString();
                    if (fileReferenceVal.contains(" ") || fileReferenceVal.contains("(") || fileReferenceVal.contains(")") || fileReferenceVal.contains(",") || fileReferenceVal.contains("&") || fileReferenceVal.contains("%20") || fileReferenceVal.contains("%26")) {
                        String updatedReferenceVal = fileReferenceVal.replaceAll(" ", "-").replaceAll("\\(", "-").replaceAll("\\)", "-").replaceAll("&", "-").replaceAll("%20","-").replaceAll("%26","-");
                        childNode.setProperty("fileReference", updatedReferenceVal);
                        session.save();
                        LOG.info(childNode.getPath() + "     " + fileReferenceVal + "     " + updatedReferenceVal + "     " + "fileReference");
                        logs.append(childNode.getPath() + "     " + fileReferenceVal + "     " + updatedReferenceVal + "     " + "fileReference\n");
                        response.getWriter().write(childNode.getPath() + "     " + fileReferenceVal + "     " + updatedReferenceVal + "     " + "fileReference" + "</br>");
                    }
                }
                for(int i=0;i< propList.length;i++) {
                    if (childNode.hasProperty(propList[i])) {
                        String markup = childNode.getProperty(propList[i]).getString();
                        Iterator mapKeySet = map.keySet().iterator();
                        while (mapKeySet.hasNext()) {
                            String oldLink = mapKeySet.next().toString();
                            String oldLinkWithP20 = oldLink.replaceAll(" ", "%20");
                            String oldLinkWithP26 = oldLink.replaceAll("&", "%26");
                            String updatedLink = map.get(oldLink);
                            if (markup.contains(oldLink)) {
                                markup = markup.replace(oldLink, updatedLink);
                                LOG.info(childNode.getPath() + "     " + oldLink + "     " + updatedLink + "     " + propList[i]);
                                logs.append(childNode.getPath() + "     " + oldLink + "     " + updatedLink + "     " + propList[i] + "\n");
                                response.getWriter().write(childNode.getPath() + "     " + oldLink + "     " + updatedLink + "     " + propList[i] + "</br>");
                            }
                            if (markup.contains(oldLinkWithP20)) {
                                markup = markup.replace(oldLinkWithP20, updatedLink);
                                LOG.info(childNode.getPath() + "     " + oldLinkWithP20 + "     " + updatedLink + "     " + propList[i]);
                                logs.append(childNode.getPath() + "     " + oldLinkWithP20 + "     " + updatedLink + "     " + propList[i] + "\n");
                                response.getWriter().write(childNode.getPath() + "     " + oldLinkWithP20 + "     " + updatedLink + "     " + propList[i] + "</br>");
                            }
                            if (markup.contains(oldLinkWithP26)) {
                                markup = markup.replace(oldLinkWithP26, updatedLink);
                                LOG.info(childNode.getPath() + "     " + oldLinkWithP26 + "     " + updatedLink + "     " + propList[i]);
                                logs.append(childNode.getPath() + "     " + oldLinkWithP26 + "     " + updatedLink + "     " + propList[i] + "\n");
                                response.getWriter().write(childNode.getPath() + "     " + oldLinkWithP26 + "     " + updatedLink + "     " + propList[i] + "</br>");
                            }
                        }
                        childNode.setProperty(propList[i], markup);
                        session.save();
                    }
                }

                if (rootNode.hasNode(childNodePath.substring(1)) && childNode.hasNodes()) {
                    getAndUpdateFileReferences(session, childNode, map, rootNode, response, propList);
                }
            }
        }
    }
    public static void writeLogs(String logFileLocation, String logs, Session session) throws IOException, RepositoryException {
        InputStream inputStream = new ByteArrayInputStream(logs.getBytes());
        Binary binary = session.getValueFactory().createBinary(inputStream);
        session.getNode(logFileLocation).setProperty("jcr:data", binary);
        session.save();
        inputStream.close();
    }
}
