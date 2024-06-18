/*eslint-disable*/
import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import imageUrlFor from "./imageUrlFor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const BlockContent = require('@sanity/block-content-to-react')
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
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

    // Simulate a 5-second delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-[18px] md:px-[40px] lg:px-[80px] py-[24px] md:py-[42px] lg:py-[72px]  bg-gray-50 my-9">
      <div className="w-full  flex ">
        <button className="px-3 py-3 text-[#747474] border border-[#DADADA] text-[8px] md:text-[10px] lg:text-[12px]  rounded-2xl  mx-auto">
          Our recent blog post
        </button>
      </div>
      <h2 className="text-center text-[22px] md:text-[28px] font-bold mt-[12px] md:mt-[36px]">
        Blog Post
      </h2>

      <h3 className="text-[#2E2E2E] text-[20px] md:text-[36px]   md:w-[70%] mb-[42px]">
        Latest insights, stories, and news from OA Initiative.
      </h3>

      <div>
        {" "}
        {isLoading ? (
          "loading..."
        ) : (
          <Carousel responsive={responsive}>
            {blogs ? (
              blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white p-3 md:p-4 mr-5 rounded-lg "
                >
                  <div classname="prose">
                    <img
                      src={imageUrlFor(blog.mainImage.asset._ref).url()}
                      alt=""
                      className="rounded-lg mb-[24px] md:mb-[38px] h-[128px] md:h-[160px] w-full object-cover "
                    />
                    <h2 className="text-[18px] md:text-[20px] line-clamp-2 lg:text-[24px] mb-2 font-semibold">
                      {blog.title}
                    </h2>
                    <div className = "prose line-clamp-2">
                        <BlockContent blocks = {blog.body} projectId = "pzl9rov9" dataset = "production" />
                    </div>
                    {/* <p className="text-md prose ">{blog.body.children.text} </p>{" "} */}
                    {/* <h3>{blog.publishedAt}</h3> */}
                  </div>
                  <Link to={"/blog/" + blog.slug.current}>
                    <button className="border border-[#B9B9B9]   rounded-lg px-3 py-2 mt-[26px] md:mt-[32px]">
                      read more
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div>
                <p>Blog Loading</p>
              </div>
            )}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Blog;
