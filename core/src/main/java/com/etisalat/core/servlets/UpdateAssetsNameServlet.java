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

import javax.jcr.*;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.version.VersionException;
import javax.servlet.Servlet;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.util.Iterator;
import java.util.concurrent.Executors;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(resourceTypes = "etisalat/components/page",
        methods = HttpConstants.METHOD_GET,
        selectors = "updateassetname", extensions = "html")
@ServiceDescription("Etisalat Update Assets Name Servlet")
public class UpdateAssetsNameServlet extends SlingSafeMethodsServlet {

    private static final Logger LOG = LoggerFactory.getLogger(UpdateAssetsNameServlet.class);
    static StringBuffer logs = new StringBuffer();

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        logs.delete(0,logs.length());
        ResourceResolver resourceResolver = request.getResourceResolver();
        Session session = resourceResolver.adaptTo(Session.class);
        Workspace wsp = session.getWorkspace();
        String logFileLocation = "";
        try {
            Node rootNode = session.getRootNode();
            logFileLocation = request.getRequestParameter("logFileLocation").getString();
            if(logFileLocation.equalsIgnoreCase("")) {
                response.getWriter().write("logFileLocation is not correct !!!");
            }
            if(request.getRequestParameter("damFolderPath") == null && request.getRequestParameter("assetsPath") == null){
                response.getWriter().write("Either or both damFolderPath and assetsPath is not correct !!!");
            }
            if(request.getRequestParameter("damFolderPath") != null) {
                String parentFolderPath = request.getRequestParameter("damFolderPath").getString();
                LOG.info("damFolderPath :: "+parentFolderPath);
                Node parentNodeAsset = rootNode.getNode(parentFolderPath.substring(1));
                UpdateFolderAssets(session, parentNodeAsset, wsp, rootNode, response);
            }
            if(request.getRequestParameter("assetsPath") != null) {
                String assetsPath = request.getRequestParameter("assetsPath").getString();
                LOG.info("assetsPath :: "+assetsPath);
                String[] path = assetsPath.split("~");
                for(String assetPath : path){
                    Node assetNode = rootNode.getNode(assetPath.substring(1));
                    UpdateAssets(session, assetNode, wsp, rootNode, response);
                }

            }
            writeLogs(logFileLocation, logs.toString(), session);
            response.getWriter().write("</br>********************************Update Completed******************************");
        } catch (RepositoryException e) {
            try {
                writeLogs(logFileLocation, logs.toString(), session);
            } catch (RepositoryException repositoryException) {
                repositoryException.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    private static void UpdateFolderAssets(Session session, Node parentNode, Workspace wsp, Node rootNode, SlingHttpServletResponse response) throws RepositoryException, IOException {
        if (parentNode.hasNodes()) {
            Iterator<Node> ite = parentNode.getNodes();
            while (ite.hasNext()) {
                Node childNode = ite.next();
                String assetOldName = childNode.getName();
                String assetOldPath = childNode.getPath();
                if (childNode.getPrimaryNodeType().getName().equalsIgnoreCase("dam:Asset") && (assetOldName.contains(" ") || assetOldName.contains("(") || assetOldName.contains(")") || assetOldName.contains(",") || assetOldName.contains("&"))) {
                    String assetPath = childNode.getParent().getPath()+"/";
                    String updatedAssetName = assetOldName.replaceAll(" ","-").replaceAll("\\(","-").replaceAll("\\)","-").replaceAll(",","-").replaceAll("&","-");
                    moveAndUpdateAssetsName(assetOldPath, assetPath+updatedAssetName, wsp);
                    session.save();
                    LOG.info(assetOldPath +"     "+assetPath+updatedAssetName);
                    response.getWriter().write(assetOldPath +"     "+assetPath+updatedAssetName+"</br>");
                    logs.append(assetOldPath +"     "+assetPath+updatedAssetName+"\n");
                }

                if (rootNode.hasNode(assetOldPath.substring(1)) && childNode.hasNodes()) {
                    UpdateFolderAssets(session, childNode, wsp, rootNode, response);
                }
            }
        }
    }
    private static void UpdateAssets(Session session, Node assetNode, Workspace wsp, Node rootNode, SlingHttpServletResponse response) throws RepositoryException, IOException {
        String assetOldName = assetNode.getName();
        String assetOldPath = assetNode.getPath();
        if (assetNode.getPrimaryNodeType().getName().equalsIgnoreCase("dam:Asset") && (assetOldName.contains(" ") || assetOldName.contains("(") || assetOldName.contains(")") || assetOldName.contains(",") || assetOldName.contains("&"))) {
            String assetPath = assetNode.getParent().getPath()+"/";
            String updatedAssetName = assetOldName.replaceAll(" ","-").replaceAll("\\(","-").replaceAll("\\)","-").replaceAll(",","-").replaceAll("&","-");;
            moveAndUpdateAssetsName(assetOldPath, assetPath+updatedAssetName, wsp);
            session.save();
            LOG.info(assetOldPath +"     "+assetPath+updatedAssetName+"\n");
            response.getWriter().write(assetOldPath +"     "+assetPath+updatedAssetName+"</br>");
            logs.append(assetOldPath +"     "+assetPath+updatedAssetName+"\n");
        }

    }
    public static void moveAndUpdateAssetsName(String sourcePath, String destinationPath, Workspace wsp) {

        try {
            wsp.move(sourcePath, destinationPath);

        } catch (AccessDeniedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ConstraintViolationException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (VersionException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (PathNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ItemExistsException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (LockException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (RepositoryException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void writeLogs(String logFileLocation, String logs, Session session) throws IOException, RepositoryException {
        final PipedInputStream pis = new PipedInputStream();
        final PipedOutputStream pos = new PipedOutputStream(pis);
        Executors.newSingleThreadExecutor().submit(new Runnable() {
            @Override
            public void run() {
                try {
                    OutputStreamWriter writer = new OutputStreamWriter(pos);
                    writer.append(logs);
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
        Binary binary = session.getValueFactory().createBinary(pis);
        session.getNode(logFileLocation).setProperty("jcr:data", binary);
        session.save();
    }

}
