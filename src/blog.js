import React, { useEffect, useState } from "react";
import sanityClient from "./sanity";
import imageUrlFor from "./component/imageUrlFor";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import { PortableText } from "@portabletext/react";

const Blog = () => {
  const BlockContent = require('@sanity/block-content-to-react')

  const { slug } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current=="${slug}"]{
          title,
          slug,
    mainImage{
            asset{
              _ref
            }
          },
     publishedAt,
          body,
          image{
            asset->{
              _ref,
              url
            },
          },
         
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);

      console.log(blogs)
  },);

  return (
    <div>
        <Header/>
    <div className=" pb-20 lg:mx-[140px] md:mx-16 sm:mx-8">
      <div>
        {blogs &&
          blogs.map((blog, index) => (
            <div key={index} className=" p-3 flex justify-center flex-col items-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 title mt-5 text-left">{blog.title}</h2>
              <img
                src={imageUrlFor(blog.mainImage.asset._ref).url()}
                alt=""
                className="h-[200px] md:h-[350px] mb-[24px] md:mb-[48px]  "
              />
              <div className = "prose text-gray-600 mb-[24px] md:mb-[48px]  ">
                        {/* <BlockContent blocks = {blog.body} projectId = "pzl9rov9" dataset = "production" /> */}
                        <PortableText
                    value={blog.body}
                    //components={myPortableTextComponents}
                  />
                    </div> <h3 className="text-gray-600">Published: {blog.publishedAt}</h3>
            </div>
          ))}
      </div>
    </div>
    <Footer /></div>
  );
};

export default Blog;