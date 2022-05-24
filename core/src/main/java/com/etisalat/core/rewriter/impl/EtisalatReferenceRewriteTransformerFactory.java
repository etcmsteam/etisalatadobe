package com.etisalat.core.rewriter.impl;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.rewriter.ProcessingComponentConfiguration;
import org.apache.sling.rewriter.ProcessingContext;
import org.apache.sling.rewriter.Transformer;
import org.apache.sling.rewriter.TransformerFactory;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.AttributesImpl;

import com.adobe.acs.commons.rewriter.ContentHandlerBasedTransformer;
import com.day.cq.commons.Externalizer;
import com.etisalat.core.rewriter.EtisalatStaticRewriterConfiguration;
import org.osgi.service.component.annotations.ConfigurationPolicy;

/**
 * Rewriter pipeline component which rewrites static references.
 */

@Component(immediate = true, service = TransformerFactory.class, 
           property = { "pipeline.type=etisalat-static-refs" },
           configurationPolicy = ConfigurationPolicy.REQUIRE)
@Designate(factory = true,ocd = EtisalatStaticRewriterConfiguration.class)
public final class EtisalatReferenceRewriteTransformerFactory implements TransformerFactory {

  private static final Logger log = LoggerFactory.getLogger(EtisalatReferenceRewriteTransformerFactory.class);
  
  public final class StaticReferenceRewriteTransformer extends ContentHandlerBasedTransformer {
    private SlingHttpServletRequest slingRequest;

    @Override
    public void init(final ProcessingContext context, final ProcessingComponentConfiguration config)
        throws IOException {
      super.init(context, config);
      this.slingRequest = context.getRequest();
    }

    @Override
    public void startElement(String namespaceURI, String localName, String qName, Attributes atts) throws SAXException {
      getContentHandler().startElement(namespaceURI, localName, qName,
          rebuildAttributes(localName, atts, slingRequest));
    }
  }

  @Reference
  private Externalizer externalizer;


  private static final String ATTR_CLASS = "class";

  private static final String CLASS_NOSTATIC = "nostatic";

  private Map<String, String[]> attributes;

  private String[] prefixes;

  public Transformer createTransformer() {
    return new StaticReferenceRewriteTransformer();
  }

  private String prependHostName(String value, SlingHttpServletRequest slingRequest) {
    return externalizer.absoluteLink(slingRequest, slingRequest.getScheme(), value);
  }

  private Attributes rebuildAttributes(final String elementName, final Attributes attrs,
      SlingHttpServletRequest slingRequest) {
    if (attributes.containsKey(elementName)) {
      final String[] modifyableAttributes = attributes.get(elementName);

      // first - check for the nostatic class
      boolean rewriteStatic = true;
      for (int i = 0; i < attrs.getLength(); i++) {
        final String attrName = attrs.getLocalName(i);
        if (ATTR_CLASS.equals(attrName)) {
          String attrValue = attrs.getValue(i);
          if (attrValue.contains(CLASS_NOSTATIC)) {
            rewriteStatic = false;
          }
        }
      }

      if (rewriteStatic) {
        return rebuildAttributes(attrs, modifyableAttributes, slingRequest);
      }
    }

    return attrs;
  }

  private Attributes rebuildAttributes(Attributes attrs, String[] modifyableAttributes,
      SlingHttpServletRequest slingRequest) {
    // clone the attributes
    final AttributesImpl newAttrs = new AttributesImpl(attrs);

    for (int i = 0; i < newAttrs.getLength(); i++) {
      final String attrName = newAttrs.getLocalName(i);
      if (ArrayUtils.contains(modifyableAttributes, attrName)) {
        final String attrValue = newAttrs.getValue(i);
        for (String prefix : prefixes) {
          if (attrValue.startsWith(prefix)) {
            newAttrs.setValue(i, prependHostName(attrValue, slingRequest));
          }
        }
      }
    }

    return newAttrs;
  }

  @Activate
  protected void activate(final EtisalatStaticRewriterConfiguration config) {
    attributes = new HashMap<>();
    for (String attr : config.attributes()) {
      String[] element = attr.split(":");
      attributes.put(element[0], element);
    }

    this.prefixes = config.prefixes();
  }
}