package com.etisalat.core.models;


import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import com.drew.lang.StringUtil;
import org.apache.commons.lang3.StringUtils;
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;

@Model(adaptables = {Resource.class,
        SlingHttpServletRequest.class})

public class Table {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String tableSource;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String doSorting;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnToSort;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String csvPath;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String filterCsvPath;

    String COMMA_DELIMITER = ",";

    @SlingObject
    ResourceResolver resourceResolver;

    public String getSorting() {
        if (tableSource.equals("rte") && doSorting.equals("true")) {
            return "_all";
        } else if (tableSource.equals("csv")) {
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

    public LinkedHashMap<String, String> getCategories() {
        return getFilters(0);
    }
    public LinkedHashMap<String, String> getLanguages() {
        return getFilters(1);
    }
    public LinkedHashMap<String, String> getPackages() {
        return getFilters(2);
    }

    private LinkedHashMap<String, String> getFilters(int index){
        LinkedHashMap<String, String> row = new LinkedHashMap<>();
        try {
            Resource resource = resourceResolver.getResource(filterCsvPath);
            Asset asset = resource.adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            int j = 1;
            while ((line = br.readLine()) != null) {
                String[] cols = line.split(COMMA_DELIMITER);
                String item = cols[index];
                if (item.contains("=")) {
                    String[] string = item.split("=");
                    row.put(string[0], string[1]);
                }
                else {
                    row.put(item, StringUtils.EMPTY);
                }
            }
        } catch (Exception e) {

        }
        return row;
    }

}
