package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {Resource.class,
        SlingHttpServletRequest.class})

public class Table {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String sortingType;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnToSort;

    public String getSorting() {
        if (sortingType.equals("_all")) {
            return "_all";
        } else if (sortingType.equals("custom")) {
            return "[" + columnToSort + "]";
        }
        return "[]";
    }


}
