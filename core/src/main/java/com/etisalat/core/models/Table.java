package com.etisalat.core.models;

import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import java.io.InputStream;

@Model(adaptables = {Resource.class,
        SlingHttpServletRequest.class})
public class Table {

    String csvPath = "/content/dam/etisalat/csv/sample.xlsx";

    @SlingObject
    ResourceResolver resourceResolver;

    public String getList() {
        String hello = "hello";
        Resource resource = resourceResolver.getResource(csvPath);
        Asset asset = resource.adaptTo(Asset.class);
        Rendition rendition = asset.getOriginal();
        InputStream stream = rendition.getStream();
        try {
            XSSFWorkbook wb = new XSSFWorkbook(stream);
            XSSFSheet sheet = wb.getSheetAt(0);
            for (Row row : sheet) {
                for (Cell cell : row) {
                  hello = hello +   cell.getRichStringCellValue().getString();
                }
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return hello;
    }
}
