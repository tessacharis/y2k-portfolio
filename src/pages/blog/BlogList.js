import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../../styles/blog-list.scss";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "ok7vpw9p3tc4",
    accessToken: "XAZhF64q9Zev3eaVk7Id2sTNufW5yMhaaAgwWG2R09s",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log(`Error fetching ${error}`);
      }
    };
    getAllEntries();
  });

  return (
    <section aria-labelledby="blog-heading">
      <h2 id="blog-heading" className="visually-hidden">
        Blog & Resources
      </h2>
      <div className="grid-container">
        {blogPosts?.items?.map((post) => (
          <div
            className="window-content window-content__static blog-list-item"
            key={post.sys.id}>
            <div className="window-content-container">
              <img
                className="blog-item-image"
                src={post.fields.image.fields.file.url}
                alt=""
              />
              <div className="window-description-container">
                <h2>{post.fields.headline}</h2>
                <h3>Posted on&nbsp;
                  {new Intl.DateTimeFormat("en-GB", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  }).format(new Date(post.fields.publishDate))}
                </h3>
                {documentToReactComponents(post?.fields?.summary)}
              </div>
              <Link to={`/blog/${post.fields.slug}`} className="details">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
