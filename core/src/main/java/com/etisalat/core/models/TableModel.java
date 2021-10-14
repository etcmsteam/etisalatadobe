package com.etisalat.core.models;


import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

@Model(adaptables = {Resource.class,
        SlingHttpServletRequest.class})

public class TableModel {

    public static final String RTE = "rte";
    public static final String CSV = "csv";
    public static final String ALL = "_all";
    public static final String TRUE = "true";
    public static final String EQUAL_DELIMITER = "=";
    public static final String COMMA_DELIMITER = ",";

    private static final Logger LOGGER = LoggerFactory.getLogger(TableModel.class);

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


    @SlingObject
    ResourceResolver resourceResolver;

    public String getSorting() {
        if (tableSource.equals(RTE) && doSorting.equals(TRUE)) {
            return ALL;
        } else if (tableSource.equals(CSV)) {
            return "[" + columnToSort + "]";
        }
        return "[]";
    }

    public List<String> getHeaderList() {
        List<String> headerList = new ArrayList<>();
        try {
            final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(csvPath));
            if (!resource.isPresent()) { // if the resource doesn't exists
                LOGGER.error("While reading the header the resource doesn't exists at the path {}",
                        csvPath);
                return headerList;
            }

            Asset asset = resource.get().adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = br.readLine()) != null) {
                if (line.contains(COMMA_DELIMITER)) {
                    String[] values = line.split(COMMA_DELIMITER);
                    headerList = Arrays.asList(values);
                }

                break;
            }

        } catch (IOException e) {
            LOGGER.error("The exception occurred in getting header while reading table csv {}",
                    csvPath);
        }

        return headerList;
    }

    public List<LinkedHashMap<String, String>> getAllRows() {

        List<LinkedHashMap<String, String>> rows = new ArrayList<>();
        try {

            final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(csvPath));

            if (!resource.isPresent()) { // if the resource doesn't exists
                LOGGER.error("The resource doesn't exists at the path {}",
                        csvPath);
                return rows;
            }

            Asset asset = resource.get().adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            int j = 1;
            while ((line = br.readLine()) != null) {
                if (line.contains(COMMA_DELIMITER)) {
                    String[] values = line.split(COMMA_DELIMITER);
                    if (j > 1) {
                        LinkedHashMap<String, String> row = new LinkedHashMap<>();
                        for (int i = 0; i < values.length; i = i + 2) {
                            String key = values[i];
                            String value = StringUtils.EMPTY;
                            if (values.length > i + 1) {
                                value = values[i + 1];
                            }

                            row.put(key, value);
                        }
                        rows.add(row);
                    }

                }
                j++;
            }
        } catch (IOException e) {
            LOGGER.error("The exception occurred while reading table csv {}",
                    csvPath);
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

    private LinkedHashMap<String, String> getFilters(int index) {
        LinkedHashMap<String, String> row = new LinkedHashMap<>();
        try {
            final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(filterCsvPath));
            if (!resource.isPresent()) { // if the resource doesn't exists

                LOGGER.error("The resource doesn't exists at the path {}",
                        filterCsvPath);
                return row;
            }

            Asset asset = resource.get().adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;

            while ((line = br.readLine()) != null) {
                String[] cols = line.split(COMMA_DELIMITER);
                String item = cols[index];
                if (item.contains(EQUAL_DELIMITER)) {
                    String[] string = item.split(EQUAL_DELIMITER);
                    row.put(string[0], string[1]);
                } else {
                    row.put(item, StringUtils.EMPTY);
                }
            }
        } catch (IOException e) {
            LOGGER.error("The exception occurred while reading filter csv {}",
                    filterCsvPath);
        }
        return row;
    }

}
