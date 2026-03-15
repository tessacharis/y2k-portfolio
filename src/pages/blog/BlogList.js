import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import "../../styles/blog-list.scss";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const query = `*[_type == "post"]{
          _id,
          headline,
          slug,
          publishDate,
          image,
          summary
        }`;

        const posts = await client.fetch(query);
        console.log("Sanity Posts:", posts);
        setBlogPosts(posts);
      } catch (error) {
        console.error(`Error fetching posts:`, error);
      }
    };

    getAllEntries();
  }, []);

  return (
    <section aria-labelledby="blog-heading" className="blog-list-section">
      <h1 id="blog-heading" className="blog-list-title">
        Blog & Resources
      </h1>
      <div className="grid-container">
        {blogPosts?.map((post) => (
          <div
            className="window-content window-content__static blog-list-item"
            key={post._id}>
            <div className="window-content-container">
              <div className="window-description-container">
                <Link to={`/blog/${post.slug.current}`}>
                  {post.image && (
                    <img
                      className="blog-item-image"
                      src={urlFor(post.image).url()}
                      alt={post.headline}
                    />
                  )}<h2>{post.headline}</h2></Link>
                <h3>Posted on&nbsp;
                  {post.publishDate && new Intl.DateTimeFormat("en-GB", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  }).format(new Date(post.publishDate))}
                </h3>
                {post.summary && <PortableText value={post.summary} />}

                <Link to={`/blog/${post.slug.current}`} className="button-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
