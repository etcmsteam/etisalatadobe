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
    public static final String SIMPLE_CSV = "simplecsv";
    public static final String ALL = "_all";
    public static final String TRUE = "true";
    public static final String EQUAL_DELIMITER = "=";
    public static final String COMMA_DELIMITER = ",";
    public static final int CATEGORIES_INDEX = 0;
    public static final int LANGUAGE_INDEX = 1;
    public static final int PACKAGES_INDEX = 2;

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
    private String simplecsvPath;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String filterCsvPath;


    @SlingObject
    ResourceResolver resourceResolver;

    public String getSorting() {
        if (tableSource.equals(RTE) && doSorting.equals(TRUE)) {
            return ALL;
        }
        return "[]";
    }

    public List<String> getHeaderList() {
        List<String> headerList = new ArrayList<>();
        try (BufferedReader br = readAsset(csvPath)) {
            if (br != null) {
                String line;
                while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
                    String[] values = line.split(COMMA_DELIMITER);
                    headerList = Arrays.asList(values);
                    break;
                }
            }
        } catch (IOException e) {
            LOGGER.error("The exception occurred in getting header while reading table csv {}",
                    csvPath);
        }

        return headerList;
    }

    public List<LinkedHashMap<String, String>> getAllRows() {

        List<LinkedHashMap<String, String>> rows = new ArrayList<>();
        try (BufferedReader br = readAsset(csvPath)) {
            String line;
            int j = 1;
            while (br != null && (line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
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
                j++;
            }


        } catch (IOException e) {
            LOGGER.error("The exception occurred while reading table csv {}",
                    csvPath);
        }
        return rows;
    }

    public Map<String, String> getCategories() {
        return getFilters(CATEGORIES_INDEX);
    }

    public Map<String, String> getLanguages() {
        return getFilters(LANGUAGE_INDEX);
    }

    public Map<String, String> getPackages() {
        return getFilters(PACKAGES_INDEX);
    }

    private LinkedHashMap<String, String> getFilters(int index) {
        LinkedHashMap<String, String> row = new LinkedHashMap<>();
        try (BufferedReader br = readAsset(filterCsvPath)) {
            String line;
            while (br != null && (line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
                String[] cols = line.split(COMMA_DELIMITER);
                if (cols.length > index) {
                    String item = cols[index];
                    if (item.contains(EQUAL_DELIMITER)) {
                        String[] string = item.split(EQUAL_DELIMITER);
                        row.put(string[0], string[1]);
                    } else if (StringUtils.isNotBlank(item)) {
                        row.put(item, StringUtils.EMPTY);
                    }
                }
            }
        } catch (IOException e) {
            LOGGER.error("The exception occurred while reading filter csv {}",
                    filterCsvPath);
        }
        return row;
    }

    public List<List<String>> getAllRowsSimpleCSV() {
        List<List<String>> headerList = new ArrayList<>();
        try (BufferedReader br = readAsset(simplecsvPath)) {
            String line;
            if (br != null) {
                while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
                    String[] values = line.split(COMMA_DELIMITER);
                    headerList.add(Arrays.asList(values));
                }
            }

        } catch (IOException e) {
            LOGGER.error("The exception occurred in getting header while reading table csv {}",
                    csvPath);
        }
        return headerList;
    }

    private BufferedReader readAsset(String csvPath) {
        BufferedReader bufferedReader = null;
        final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(csvPath));
        if (!resource.isPresent()) { // if the resource doesn't exists
            LOGGER.error("The resource doesn't exists at the path {}", csvPath);
        } else {
            Asset asset = resource.get().adaptTo(Asset.class);
            Rendition rendition = asset.getOriginal();
            InputStream inputStream = rendition.adaptTo(InputStream.class);
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        }
        return bufferedReader;
    }

}
