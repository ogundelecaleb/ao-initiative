import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form
      className=""
      // onSubmit={(e) => handleSubmit(e)}
    >
      <p className="text-center text-white">
        {" "}
        {status === "success"
          ? "Thank you for subscribing!"
          : "Join our email list for future updates."}
      </p>

      <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        <div class="relative w-full">
          <label
            for="email"
            class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:outline-none focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter your email"
            type="email"
            id="email"
            required=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-red-700 border-red-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Subscribe
          </button>
        </div>
      </div>
      {/* <div className="py-3 px-3 bg-white rounded-lg flex items-center mx-auto  gap-2 "> */}
        {/* <input
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full text-black focus:border-1 py-1 focus:outline-none focus:ring-[#124072] focus:border-[#124072]"
          value={email}
          placeholder="email"
          isRequired
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#990019] text-[12px] md:text-[14px] px-2 py-1 rounded-lg text-white"
        >
          Subscribe
        </button> */}
      {/* </div> */}
    </form>
  );
};

const Mailchip = () => {
  const postUrl = `https://oainitiative.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Mailchip;
