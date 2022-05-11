package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import java.util.List;

@Model(adaptables = { Resource.class,
        SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class StepModel {

    @ChildResource(name = "verticalItems")
    private List<StepItem> verticalDataList;

    @ChildResource(name = "horizontalItems")
    private List<StepItem> horizontalDataList;

    public List<StepItem> getVerticalDataList() {
        return verticalDataList;
    }

    public List<StepItem> getHorizontalDataList() {
        return horizontalDataList;
    }
}
