package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class })
public class TilesModelItem {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String title;

	@SlingObject
	@Optional
	protected Resource currentResource;

	@SlingObject
	private SlingHttpServletRequest request;

	@SlingObject
	private ResourceResolver resourceResolver;


	private static final Logger LOG = LoggerFactory.getLogger(TilesModelItem.class);

	private static final String TILE_ITEMS = "tileitems";
	private List<TileModel> tileList;

	@PostConstruct
	protected void init() {
		LOG.info("In Init method");
		tileList = new ArrayList<>();
		if (currentResource.hasChildren()) {
			Resource res = currentResource.getChild(TILE_ITEMS);
			if (null != res) {
				Iterator<Resource> multiItr = res.listChildren();
				while (multiItr.hasNext()) {
					Resource resource = multiItr.next();
					TileModel model = resource.adaptTo(TileModel.class);
					model.setLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver, model.getLink()));
					tileList.add(model);
				}
			}
		}

	}

	public List<TileModel> getTileList() {
		return Collections.unmodifiableList(tileList);
	}


	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
