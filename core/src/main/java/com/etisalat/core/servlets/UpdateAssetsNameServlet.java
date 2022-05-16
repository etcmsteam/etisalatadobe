package com.etisalat.core.servlets;

import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.Replicator;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.*;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.version.VersionException;
import javax.servlet.Servlet;
import java.io.*;
import java.util.Iterator;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(resourceTypes = "etisalat/components/page",
        methods = HttpConstants.METHOD_GET,
        selectors = "updateassetname", extensions = "html")
@ServiceDescription("Etisalat Update Assets Name Servlet")
public class UpdateAssetsNameServlet extends SlingSafeMethodsServlet {

    private static final Logger LOG = LoggerFactory.getLogger(UpdateAssetsNameServlet.class);
    static StringBuffer logs = new StringBuffer();

    @Reference
    Replicator replicator;

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
                LOG.debug("damFolderPath :: "+parentFolderPath);
                Node parentNodeAsset = rootNode.getNode(parentFolderPath.substring(1));
                UpdateFolderAssets(session, parentNodeAsset, wsp, rootNode, response);
            }
            if(request.getRequestParameter("assetsPath") != null) {
                String assetsPath = request.getRequestParameter("assetsPath").getString();
                LOG.debug("assetsPath :: "+assetsPath);
                String[] path = assetsPath.split("~");
                for(String assetPath : path){
                    Node assetNode = rootNode.getNode(assetPath.substring(1));
                    UpdateAssets(session, assetNode, wsp, rootNode, response);
                }

            }
            writeLogs(logFileLocation, logs.toString(), session);
            response.getWriter().write("</br>********************************Update Completed******************************");
        } catch (RepositoryException | ReplicationException e) {
            try {
                writeLogs(logFileLocation, logs.toString(), session);
            } catch (RepositoryException repositoryException) {
                LOG.error("SEVERE "+repositoryException.getMessage());
            }
            LOG.error("SEVERE "+e.getMessage());
        }
    }

    private void UpdateFolderAssets(Session session, Node parentNode, Workspace wsp, Node rootNode, SlingHttpServletResponse response) throws RepositoryException, IOException, ReplicationException {
        if (parentNode.hasNodes()) {
            Iterator<Node> ite = parentNode.getNodes();
            while (ite.hasNext()) {
                Node childNode = ite.next();
                String assetOldName = childNode.getName();
                String assetOldPath = childNode.getPath();
                if (childNode.getPrimaryNodeType().getName().equalsIgnoreCase("dam:Asset") && (assetOldName.contains(" ") || assetOldName.contains("(") || assetOldName.contains(")") || assetOldName.contains(",") || assetOldName.contains("&"))) {
                    if(rootNode.hasNode(assetOldPath.substring(1))){
                        replicator.replicate(session, ReplicationActionType.DEACTIVATE,assetOldPath);
                    }
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
    private void UpdateAssets(Session session, Node assetNode, Workspace wsp, Node rootNode, SlingHttpServletResponse response) throws RepositoryException, IOException, ReplicationException {
        String assetOldName = assetNode.getName();
        String assetOldPath = assetNode.getPath();
        if (assetNode.getPrimaryNodeType().getName().equalsIgnoreCase("dam:Asset") && (assetOldName.contains(" ") || assetOldName.contains("(") || assetOldName.contains(")") || assetOldName.contains(",") || assetOldName.contains("&"))) {
            if(rootNode.hasNode(assetOldPath.substring(1))){
                replicator.replicate(session, ReplicationActionType.DEACTIVATE,assetOldPath);
            }
            String assetPath = assetNode.getParent().getPath()+"/";
            String updatedAssetName = assetOldName.replaceAll(" ","-").replaceAll("\\(","-").replaceAll("\\)","-").replaceAll(",","-").replaceAll("&","-");;
            moveAndUpdateAssetsName(assetOldPath, assetPath+updatedAssetName, wsp);
            session.save();
            LOG.info(assetOldPath +"     "+assetPath+updatedAssetName+"\n");
            response.getWriter().write(assetOldPath +"     "+assetPath+updatedAssetName+"</br>");
            logs.append(assetOldPath +"     "+assetPath+updatedAssetName+"\n");
        }

    }
    public void moveAndUpdateAssetsName(String sourcePath, String destinationPath, Workspace wsp) {

        try {
            wsp.move(sourcePath, destinationPath);
        } catch (AccessDeniedException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (ConstraintViolationException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (VersionException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (PathNotFoundException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (ItemExistsException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (LockException e) {
            LOG.error("SEVERE "+e.getMessage());
        } catch (RepositoryException e) {
            LOG.error("SEVERE "+e.getMessage());
        }
    }

    public void writeLogs(String logFileLocation, String logs, Session session) throws IOException, RepositoryException {
        InputStream inputStream = new ByteArrayInputStream(logs.getBytes());
        Binary binary = session.getValueFactory().createBinary(inputStream);
        session.getNode(logFileLocation).setProperty("jcr:data", binary);
        session.save();
        inputStream.close();
    }

}
