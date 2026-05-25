import { useEffect } from "react";
import defaultImage from "../assets/tessa-newbacher-headshot-2026-y2k.png";

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = defaultImage,
  ogUrl,
  ogType = "website",
}) {
  useEffect(() => {
    // 1. Set document title
    if (title) {
      document.title = title;
    }

    // Helper to set or create a metadata tag
    const setMetaTag = (attrName, attrValue, contentValue) => {
      if (contentValue === undefined || contentValue === null) return;
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", contentValue);
    };

    // 2. Set description meta tag
    if (description) {
      setMetaTag("name", "description", description);
    }

    // 3. Resolve absolute URLs for social sharing
    const currentOrigin = window.location.origin;
    const resolvedUrl = ogUrl 
      ? (ogUrl.startsWith("http") ? ogUrl : `${currentOrigin}${ogUrl.startsWith("/") ? "" : "/"}${ogUrl}`)
      : window.location.href;

    const resolvedImage = ogImage
      ? (ogImage.startsWith("http") ? ogImage : `${currentOrigin}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`)
      : "";

    // 4. Set Open Graph tags
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", resolvedUrl);
    if (resolvedImage) {
      setMetaTag("property", "og:image", resolvedImage);
    }

    // 5. Set Twitter Card tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", ogTitle || title);
    setMetaTag("name", "twitter:description", ogDescription || description);
    if (resolvedImage) {
      setMetaTag("name", "twitter:image", resolvedImage);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, ogType]);

  return null;
}
