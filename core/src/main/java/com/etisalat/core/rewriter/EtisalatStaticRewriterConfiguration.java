package com.etisalat.core.rewriter;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * The Interface EtisalatStaticRewriterConfiguration.
 */
@ObjectClassDefinition(name = "Etisalat - Static Reference Rewriter", description = "Static Rewriter configuration details")
public @interface EtisalatStaticRewriterConfiguration {
  @AttributeDefinition(name = "Rewrite Attributes", description = "List of element/attribute pairs to rewrite")
  String[] attributes() default { "img:src", "link:href", "script:src" };

  @AttributeDefinition(name = "Path Prefixes", description = "Path prefixes to rewrite.")
  String[] prefixes();
}
