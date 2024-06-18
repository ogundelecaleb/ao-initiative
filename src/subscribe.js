import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import Mailchip from "./component/mailchip";

const Subscibe = () => {
  return (
    <div>
      <Header />
      <section className="relative h-[50vh] ">
        <img
          src="/happyChild.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#990019] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[24px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              Subscribe to our email list
            </h3>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive monthly newsletters, feel free to sign up with your email.
            </p>
            <form action="#">
           
                  <Mailchip />{" "}
              
              {/* <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div> */}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Subscibe;
