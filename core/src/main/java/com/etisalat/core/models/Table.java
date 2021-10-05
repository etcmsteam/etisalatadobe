package com.etisalat.core.models;


import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

@Model(adaptables = {Resource.class,
        SlingHttpServletRequest.class})

public class Table {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String sortingType;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnToSort;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String csvPath;

    String COMMA_DELIMITER = ",";

    @SlingObject
    ResourceResolver resourceResolver;

    public String getSorting() {
        if (sortingType.equals("_all")) {
            return "_all";
        } else if (sortingType.equals("custom")) {
            return "[" + columnToSort + "]";
        }
        return "[]";
    }

    public List<String> getHeaderList() {
        List<String> headerList = new ArrayList<>();
        try {
            Resource resource = resourceResolver.getResource(csvPath);
            Asset asset = resource.adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(COMMA_DELIMITER);
                headerList = Arrays.asList(values);
                break;
            }

        } catch (Exception e) {

        }

        return headerList;
    }

    public List<LinkedHashMap<String, String>> getAllRows() {

        List<LinkedHashMap<String, String>> rows = new ArrayList<>();
        try {
            Resource resource = resourceResolver.getResource(csvPath);
            Asset asset = resource.adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            int j = 1;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(COMMA_DELIMITER);
                if (j > 1) {
                    LinkedHashMap<String, String> row = new LinkedHashMap<>();
                    for (int i = 0; i < values.length; i = i + 2) {
                        row.put(values[i], values[i + 1]);
                    }
                    rows.add(row);
                }
                j++;
            }
        } catch (Exception e) {

        }
        return rows;
    }

}
