import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { client, urlFor } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import "../../styles/blog.scss";

const HtmlEmbed = ({ html }) => {
  const containerRef = useRef(null);
  const prevHtml = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !html || prevHtml.current === html) return;

    prevHtml.current = html;
    containerRef.current.innerHTML = html;

    const scripts = containerRef.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      newScript.text = oldScript.innerHTML;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, [html]);

  return <div ref={containerRef} />;
};

const BlogDetails = () => {
  let { slug } = useParams();
  const [singleBlogPost, setSingleBlogPost] = useState(null);

  useEffect(() => {
    const getEntryBySlug = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]`;

        const match = await client.fetch(query, { slug });
        console.log("Single Sanity Post:", match);
        setSingleBlogPost(match);
      } catch (error) {
        console.error(`Error fetching post:`, error);
      }
    };

    getEntryBySlug();
  }, [slug]);

  if (!singleBlogPost) return <div>Loading...</div>;

  return (
    <section className="blog-item" aria-labelledby="blog-heading">
      <div className="window-content">
        <div className="window-content-container">
          <Link to="/blog" className="back-button">
            <span className="visually-hidden">Back to Blog</span>X
          </Link>
          <div className="blog-heading-container">
            <h1 id="blog-heading">{singleBlogPost.headline}</h1>
            <p>Written by Tessa Newbacher | Published on&nbsp;
              {singleBlogPost.publishDate === undefined
                ? "loading"
                : new Intl.DateTimeFormat("en-GB", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                }).format(new Date(singleBlogPost.publishDate))}
            </p>
          </div>
          {singleBlogPost.image && (
            <img
              style={{ maxWidth: "600px", margin: "20px 0px" }}
              src={urlFor(singleBlogPost.image).url()}
              alt={singleBlogPost.headline}
            />
          )}
          {singleBlogPost.content && <PortableText value={singleBlogPost.content} />}
        </div>
      </div>
      <div className="sidebar-content" id="sidebar-content">
        {(singleBlogPost.sidebarContent || singleBlogPost.embeddedHtml) &&
          <div className="window-content includes-embedded-content">
            {singleBlogPost.sidebarContent && <PortableText value={singleBlogPost.sidebarContent} />}
            {singleBlogPost.embeddedHtml && (
              <HtmlEmbed html={singleBlogPost.embeddedHtml} />
            )}
          </div>}
      </div>
    </section>
  );
};

export default BlogDetails;
