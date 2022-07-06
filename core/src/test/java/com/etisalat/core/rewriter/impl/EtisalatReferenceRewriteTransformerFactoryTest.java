package com.etisalat.core.rewriter.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.only;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.rewriter.ProcessingComponentConfiguration;
import org.apache.sling.rewriter.ProcessingContext;
import org.apache.sling.rewriter.Transformer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.xml.sax.Attributes;
import org.xml.sax.ContentHandler;
import org.xml.sax.helpers.AttributesImpl;

import com.etisalat.core.rewriter.EtisalatStaticRewriterConfiguration;

/**
* JUnit test verifying the RewriteTransformerFactory
*/
public class EtisalatReferenceRewriteTransformerFactoryTest {

  @InjectMocks
  private EtisalatReferenceRewriteTransformerFactory rewriteTransformerFactory;

  @Mock
  private ContentHandler handler;

  @Mock
  private EtisalatStaticRewriterConfiguration config;

  @Mock
  private ProcessingComponentConfiguration processingConfig;

  @Mock
  private ProcessingContext processingContext;

  @Mock
  private SlingHttpServletRequest request;

  @Captor
  private ArgumentCaptor<Attributes> attributesCaptor;

  @BeforeEach
  void setUp() throws NoSuchFieldException {
    MockitoAnnotations.initMocks(this);
    when(processingContext.getRequest()).thenReturn(request);
    when(request.getScheme()).thenReturn("http");
  }

  @Test
  void test_with_prefix_clientlibs() throws Exception {
    when(config.prefixes()).thenReturn(new String[] { "/etc/clientlib" });
    when(config.attributes()).thenReturn(new String[] { "link:href" });

    when(request.getRequestURL()).thenReturn(new StringBuffer("https://localhost:4502/content/etisalat/sample.html"));
    Transformer transformer = createStaticTransformer();

    transformer.init(processingContext, processingConfig);
    AttributesImpl in = new AttributesImpl();
    in.addAttribute(null, "href", null, "CDATA", "/etc/clientlib/test.css");
    transformer.startElement(null, "link", null, in);

    verify(handler, only()).startElement(any(), eq("link"), any(), attributesCaptor.capture());
    Attributes out = attributesCaptor.getValue();
    assertEquals("http://localhost:4502/etc/clientlib/test.css", out.getValue(0));
  }

  @Test
  void test_with_prefix_dam() throws Exception {
    when(config.prefixes()).thenReturn(new String[] { "/content/dam/sample.jpg" });
    when(config.attributes()).thenReturn(new String[] { "img:src" });
    when(request.getRequestURL()).thenReturn(new StringBuffer("https://localhost:4502/content/etisalat/sample.html"));

    Transformer transformer = createStaticTransformer();

    transformer.init(processingContext, processingConfig);
    AttributesImpl in = new AttributesImpl();
    in.addAttribute(null, "src", null, "CDATA", "/content/dam/sample.jpg");
    transformer.startElement(null, "img", null, in);

    verify(handler, only()).startElement(any(), eq("img"), any(), attributesCaptor.capture());
    Attributes out = attributesCaptor.getValue();
    assertEquals("http://localhost:4502/content/dam/sample.jpg", out.getValue(0));
  }

  @Test
  void test_with_prefix_nostatic_class() throws Exception {
    when(config.prefixes()).thenReturn(new String[] { "/etc/clientlib" });
    when(config.attributes()).thenReturn(new String[] { "link:href" });
    when(request.getRequestURL()).thenReturn(new StringBuffer("https://localhost:4502/content/etisalat/sample.html"));

    Transformer transformer = createStaticTransformer();
    transformer.init(processingContext, processingConfig);

    AttributesImpl in = new AttributesImpl();
    in.addAttribute(null, "href", null, "CDATA", "/etc/clientlib/test.css");
    in.addAttribute(null, "class", null, "CDATA", "something nostatic");
    transformer.startElement(null, "link", null, in);

    verify(handler, only()).startElement(any(), eq("link"), any(), attributesCaptor.capture());
    Attributes out = attributesCaptor.getValue();
    assertEquals("/etc/clientlib/test.css", out.getValue(0));
  }

  @Test
  void test_with_prefix_emptyhostname() throws Exception {

    when(config.prefixes()).thenReturn(new String[] { "/etc/clientlib" });
    when(config.attributes()).thenReturn(new String[] { "link:href" });

    when(request.getRequestURL()).thenReturn(new StringBuffer().append(" "));

    Transformer transformer = createStaticTransformer();

    transformer.init(processingContext, processingConfig);
    AttributesImpl in = new AttributesImpl();
    in.addAttribute(null, "href", null, "CDATA", "/etc/clientlib/test.css");
    transformer.startElement(null, "link", null, in);

    verify(handler, only()).startElement(any(), eq("link"), any(), attributesCaptor.capture());
    Attributes out = attributesCaptor.getValue();
    assertEquals("/etc/clientlib/test.css", out.getValue(0));
  }

  @Test
  void testinvalidurl() throws Exception {
    when(config.prefixes()).thenReturn(new String[] { "/etc/clientlib" });
    when(config.attributes()).thenReturn(new String[] { "link:href" });

    when(request.getRequestURL())
        .thenReturn(new StringBuffer().append("htt://localhost:4502/content/etisalat/sample.html"));

    Transformer transformer = createStaticTransformer();

    transformer.init(processingContext, processingConfig);
    AttributesImpl in = new AttributesImpl();
    in.addAttribute(null, "href", null, "CDATA", "/etc/clientlib/test.css");
    transformer.startElement(null, "link", null, in);

    verify(handler, only()).startElement(any(), eq("link"), any(), attributesCaptor.capture());
    Attributes out = attributesCaptor.getValue();
    assertEquals("/etc/clientlib/test.css", out.getValue(0));

  }

  private Transformer createStaticTransformer() {
    rewriteTransformerFactory = new EtisalatReferenceRewriteTransformerFactory();
    rewriteTransformerFactory.activate(config);
    Transformer transformer = rewriteTransformerFactory.createTransformer();
    transformer.setContentHandler(handler);

    return transformer;
  }
}
