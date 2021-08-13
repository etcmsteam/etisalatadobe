package com.etisalat.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = Resource.class)
public interface IconCardListItem {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	String cardTitle();

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	String cardLink();

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	String cardIcon();
	
}