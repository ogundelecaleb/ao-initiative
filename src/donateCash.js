import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { useForm } from "react-hook-form";


const DonateCash = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        window.location.href = `mailto:olanipekunayomideinitiative@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
      };
  return (
    <div>
      {" "}
      <Header />
      <section className="relative h-[60vh] ">
        <img
          src="/donate.webp"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#990019] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[22px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              Together We Can Fight Sickle Cell In Ekiti
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-[16px] md:px-[40px] lg:px-[80px] py-[36px] md:py-[48px] lg:py-[80px] text-center ">
        <h2 className="text-[20px] md:text-[26px] xl:text-[32px] text-gray-700 font-bold mb-4 ">
          Make Your Donation To
        </h2>

        <h2 className="text-[18px] md:text-[24px] text-gray-700 font-bold mb-4 ">
          Olanipekun Ayomide Initiative
        </h2>
        <h2 className="text-[18px] md:text-[24px] text-gray-700 font-bold mb-4 ">
          Fidelity Bank PLC
        </h2>
        <h2 className="text-[18px] md:text-[24px] text-gray-700 font-bold mb-4 ">
          5020138691{" "}
        </h2>
      </section>
         <section
        id="contact"
        className="bg-gray-200 py-[48px] px-[16px] md:px-[60px] lg:px-[110px] "
      >
        <div>
          <h2 className="text-[28px] text-gray-600 font-bold mb-4 text-center">
            Send A Mail
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col space-y-4 md:px-[10%]  "
          >
            <div className="flex gap-2   flex-col md:flex-row md:space-x-2 md:justify-between">
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="contactInput w-full"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className="contactInput w-full"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              type="text"
              className="contactInput"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            ></textarea>
            <button
              type="submit"
              className="bg-[#990019] opacity-90 md:w-[70%] w-full   self-center py-5 px-[16px] md:px-4 rounded-md text-[#fff] font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section> 
      <Footer />
    </div>
  );
};

export default DonateCash;
