import React, { useEffect, useState } from "react";
import sanityClient from "./sanity";
import imageUrlFor from "./component/imageUrlFor";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet-async";




const Blog = () => {
  const BlockContent = require("@sanity/block-content-to-react");

  const { slug } = useParams();
  const [blogs, setBlogs] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current=="${slug}"]{
          title,
          slug,
          excerpt,
          mainImage{
            asset{
              _ref
            },
            alt
          },
          publishedAt,
          body,
          author->{
            name
          }
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, [slug]);

  const currentPost = blogs?.[0];
  const imageUrl = currentPost?.mainImage?.asset?._ref 
    ? imageUrlFor(currentPost.mainImage.asset._ref).width(1200).height(630).url()
    : '/placeholder.svg';

  return (
    <div>
      {currentPost && (
        <Helmet>
          <title>{currentPost.title} - OA Initiative</title>
          <meta name="description" content={currentPost.excerpt || 'Read more about our sickle cell advocacy work.'} />
          <link rel="icon" href="/assets/oa-logo.png" />
          
          <meta property="og:title" content={currentPost.title} />
          <meta property="og:description" content={currentPost.excerpt || 'Read more about our sickle cell advocacy work.'} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={currentPost.publishedAt} />
          <meta property="article:author" content={currentPost.author?.name || 'OA Initiative'} />
          <meta property="og:site_name" content="OA Initiative" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentPost.title} />
          <meta name="twitter:description" content={currentPost.excerpt || 'Read more about our sickle cell advocacy work.'} />
          <meta name="twitter:image" content={imageUrl} />
        </Helmet>
      )}
      <Header />
      <div className=" pb-20 lg:mx-[140px] md:mx-16 sm:mx-8">
        <div>
          {blogs &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className=" p-3 flex justify-center flex-col items-center"
              >
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 title mt-5 text-center">
                  {blog.title}
                </h2>
                <img
                  src={imageUrlFor(blog.mainImage.asset._ref).url()}
                  alt=""
                  className="h-[200px] md:h-[350px] mb-[24px] md:mb-[48px]  "
                />
                <div className="prose text-gray-800 text-justify font-light  mb-[24px] md:mb-[48px]  ">
                  <PortableText value={blog.body} />
                </div>{" "}
                <h3 className="text-gray-600">
                  Published: {new Date(blog.publishedAt).toLocaleString()}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
