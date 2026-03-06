import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../../styles/blog.scss";

// Custom component to render HTML strings and execute nested <script> tags
const HtmlEmbed = ({ html }) => {
  const containerRef = useRef(null);
  const prevHtml = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !html || prevHtml.current === html) return;

    prevHtml.current = html;

    // Use innerHTML to set the non-script DOM elements
    containerRef.current.innerHTML = html;

    // React (and normal innerHTML) will not execute script tags.
    // We manually find them, recreate them, and replace the old ones so they execute.
    const scripts = containerRef.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // Copy all attributes (like src, type, etc.)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Copy the inline script content if any
      newScript.text = oldScript.innerHTML;

      // Replace the old script tag with the new executable one
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, [html]);

  return <div ref={containerRef} />;
};

const BlogDetails = () => {
  let { slug } = useParams();

  const [singleBlogPost, setSingleBlogPost] = useState([]);


  const client = createClient({
    space: "ok7vpw9p3tc4",
    accessToken: "XAZhF64q9Zev3eaVk7Id2sTNufW5yMhaaAgwWG2R09s",
  });

  useEffect(() => {

    const getEntryBySlug = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          const match = entries.items.find((item) => item.fields.slug === slug);

          setSingleBlogPost(match);
        });
      } catch (error) {
        console.log(`Error fetching ${error}`);
      }
    };
    getEntryBySlug();
  }, [slug]);

  return (
    <section className="blog-item" aria-labelledby="blog-heading">
      <div className="window-content">
        <div className="window-content-container">
          <Link to="/blog" className="back-button">
            <span class="visually-hidden">Back to Blog</span>X
          </Link>
          <div className="blog-heading-container">
            <h1 id="blog-heading">{singleBlogPost?.fields?.headline}</h1>
            <p>Written by Tessa Newbacher | Published on&nbsp;
              {singleBlogPost?.fields?.publishDate === undefined
                ? "loading"
                : new Intl.DateTimeFormat("en-GB", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                }).format(new Date(singleBlogPost?.fields?.publishDate))}
            </p>
          </div>
          <img
            style={{ maxWidth: "600px", margin: "20px 0px" }}
            src={singleBlogPost?.fields?.image.fields.file.url}
            alt={singleBlogPost?.fields?.image.fields.title}
          />
          {documentToReactComponents(singleBlogPost?.fields?.content)}
        </div>
      </div>
      <div class="sidebar-content" id="sidebar-content">
        <div class="window-content">
          {documentToReactComponents(singleBlogPost?.fields?.sidebarContent)}
          {singleBlogPost?.fields?.embeddedHtml && (
            <HtmlEmbed html={singleBlogPost?.fields?.embeddedHtml} />
          )}
        </div>
        <div class="window-content">
          <h3>Hire a pro to help you check these off your to-do list</h3>
          <div class="row">
            <a href="/help" className="details">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
