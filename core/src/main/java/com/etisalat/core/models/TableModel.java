package com.etisalat.core.models;


import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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

@Model(adaptables = {Resource.class,
    SlingHttpServletRequest.class})

public class TableModel {

  private static final String RTE = "rte";
  private static final String ALL = "_all";
  private static final String TRUE = "true";
  private static final String EQUAL_DELIMITER = "=";
  private static final String COMMA_DELIMITER = ",";

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


  /**
   * Gets sorting.
   *
   * @return the sorting
   */
  public String getSorting() {
    if (tableSource.equals(RTE) && doSorting.equals(TRUE)) {
      return ALL;
    }
    return "[]";
  }

  /**
   * Gets header list from csv where there is filter data attributes. This method is only to create
   * th for table.
   *
   * @return the header list
   */
  public List<String> getHeaderListForChannelsTable() {
    List<String> headerList = new ArrayList<>();
    final Rendition rendition = getAsset(csvPath);
    if (rendition != null) {
      try (BufferedReader br = new BufferedReader(
          new InputStreamReader(rendition.adaptTo(InputStream.class)))) {
        String line;
        while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
          String[] values = line.split(COMMA_DELIMITER);
          headerList = Arrays.asList(values);
          break;
        }

      } catch (IOException e) {
        LOGGER.error("The exception occurred in getting header while reading table csv {} {}",
            csvPath, e.getMessage());
      }
    }
    return headerList;
  }

  /**
   * Gets all rows. This will read all rows except table header. Applicable for channels table.
   *
   * @return the all rows
   */
  public List<LinkedHashMap<String, String>> getAllRowsForChannelsTable() {
    List<LinkedHashMap<String, String>> rows = new ArrayList<>();
    final Rendition rendition = getAsset(csvPath);
    if (rendition != null) {
      try (BufferedReader br = new BufferedReader(
          new InputStreamReader(rendition.adaptTo(InputStream.class)))) {
        String line;
        line = br.readLine(); // this will read the first line (to ignore csv header)
        while ((line = br.readLine()) != null && line
            .contains(COMMA_DELIMITER)) {//loop will run from 2nd line
          String[] values = line.split(COMMA_DELIMITER);
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
      } catch (IOException e) {
        LOGGER.error("The exception occurred while reading table csv {} {}",
            csvPath, e.getMessage());
      }
    }
    return rows;
  }


  /**
   * Read the filters csv for channels table
   *
   * @return all the filters from csv
   */

  public Map<String, Map<String, String>> getAllFiltersForChannelsTable() {
    LinkedHashMap<String, Map<String, String>> map = new LinkedHashMap<>();
    Rendition rendition = getAsset(filterCsvPath);
    if (rendition != null) {
      try (BufferedReader br = new BufferedReader(
          new InputStreamReader(rendition.adaptTo(InputStream.class)))) {
        String line;
        while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
          String[] cols = line.split(COMMA_DELIMITER);
          for (int index = 0; index < cols.length; index++) {
            map.put(getRadioButtonProperty(cols[index]), getFilters(index, rendition));
          }
          break;
        }
      } catch (IOException e) {
        LOGGER.error("The exception occurred while reading filter csv {} {}",
            filterCsvPath, e.getMessage());
      }
    }

    return map;
  }

  /**
   * Gets all rows for simple csv where there is no data attributes for filtering or sorting. Normal
   * tables.
   *
   * @return the all rows simple csv
   */
  public List<List<String>> getAllRowsSimpleCSV() {
    List<List<String>> headerList = new ArrayList<>();
    Rendition rendition = getAsset(simplecsvPath);
    if (rendition != null) {
      try (BufferedReader br = new BufferedReader(
          new InputStreamReader(rendition.adaptTo(InputStream.class)))) {
        String line;
        while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
          String[] values = line.split(COMMA_DELIMITER);
          headerList.add(Arrays.asList(values));
        }

      } catch (IOException e) {
        LOGGER.error("The exception occurred in getting header while reading table csv {} {}",
            csvPath, e.getMessage());
      }
    }

    return headerList;
  }

  private LinkedHashMap<String, String> getFilters(int index, Rendition rendition) {
    LinkedHashMap<String, String> row = new LinkedHashMap<>();
    try (BufferedReader br = new BufferedReader(
        new InputStreamReader(rendition.adaptTo(InputStream.class)))) {
      String line;
      while ((line = br.readLine()) != null && line.contains(COMMA_DELIMITER)) {
        String[] cols = line.split(COMMA_DELIMITER);
        if (cols.length > index && StringUtils.isNotBlank(cols[index]) && cols[index]
            .contains(EQUAL_DELIMITER)) {
          String item = cols[index];
          String[] string = item.split(EQUAL_DELIMITER);
          row.put(string[0], string[1]);

        } else if (cols.length > index && StringUtils.isNotBlank(cols[index]) && !cols[index]
            .contains(EQUAL_DELIMITER)) {
          row.put(cols[index], StringUtils.EMPTY);
        }
      }
    } catch (IOException e) {
      LOGGER.error("The exception occurred while reading filter csv {} {}",
          filterCsvPath, e.getMessage());
    }
    return row;
  }


  private String getRadioButtonProperty(String string) {
    if (string.contains(EQUAL_DELIMITER)) {
      return string.split(EQUAL_DELIMITER)[1];
    }
    return string;
  }

  private Rendition getAsset(String csvPath) {
    Rendition rendition = null;
    final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(csvPath));
    if (resource.isPresent()) { // if the resource exists
      Asset asset = resource.get().adaptTo(Asset.class);
      rendition = asset.getOriginal();
    } else { // if the resource doesn't exist
      LOGGER.error("The resource doesn't exists at the path {}", csvPath);
    }
    return rendition;
  }

}
