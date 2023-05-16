import React from "react";
import Header from "./component/header";
import { Link } from "react-router-dom";
import Footer from "./component/footer";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`}

  const onSubmit = (formData) => {
    window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div>
      <Header />

      <div className="px-[30px] md:px-[80px] lg:px-[130px] py-[75px] bg-[#990019]  ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <m.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="lg:max-w-[500px] lg:w-[500px] w-full"
          >
            <h2 className="text-white font-bold mb-5 text-[30px] md:text-[38px]">
              As a Sickle Cell Warrior, you can be whatever and whomever you
              want to be. <span className="bg-red-500 px-2">Don't</span> limit
              yourself!
            </h2>

            <p className="text-white font-normal mb-5">
              Our Mission Is To Promote Awareness, Education and Advocacy For
              Sickle Cell Disease And its Impact On Those Who live With It In
              Ekiti.
            </p>

            <button className="py-[14px] px-[40px] bg-white font-bold text-[#990019]">
              Find Out More
            </button>
          </m.div>

          <div className="relative object-cover">
            <span className="h-full w-full absolute bg-[#771023] top-0 left-4 rounded-bl-[40px] object-contain"></span>
            <div className=" ">
              <img
                src="/heroImage.png"
                alt=""
                className="h-full  relative object-contain "
              />
            </div>
          </div>
        </div>
      </div>
      {/* ways to support */}
      <div className=" relative bg-white h-[120px] ">
        <div className="mx-[10%]  rounded-tl-[40px]  rounded-br-[40px] absolute px-8 py-6 -top-[50%] bg-gray-200  w-[80%] left-0 right-0 item-center  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <h3 className="text-gray-500 text-[26px]">
              <span className=" text-[#990019] font-bold">
                3 easy ways you can donate
              </span>{" "}
              to support a worthy cause
            </h3>
            <div className="flex flex-col rounded-lg items-center text-center bg-gray-100 border shadow  p-2 md:p-5">
              {" "}
              <img
                src="/cashinhand.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[55px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Donate Cash
              </h2>
            </div>
            <div className="flex flex-col  rounded-lg items-center bg-gray-100 text-center border shadow p-2 md:p-5">
              {" "}
              <img
                src="/bloodbag.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[55px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Donate Blood
              </h2>
            </div>
            <div className="flex flex-col rounded-lg items-center text-center  bg-gray-100 border shadow p-2 md:p-5">
              {" "}
              <img
                src="/support.png"
                alt=""
                className="md:h-[100px] lg:h-[120px] h-[55px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[24px] text-[18px] font-bold text-gray-700 ">
                Volunteer
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] md:px-[80px] lg:px-[130px] pt-[170px] lg:pt-[60px] pb-[75px] bg-[#990019]  ">
        <div className="mt-[260px] md:mt-[30px]">
          <h3 className="text-[24px] text-gray-100 font-bold ">
            What Is Sickle Cell Disease (SDC)
          </h3>

          <div className="">
            <p className="text-gray-100 my-4 text-justify ">
              Sickle cell disease (SCD) is the commonest inherited disorder of
              hemoglobin in children resulting from the inheritance of abnormal
              hemoglobin genes from both parents. It is estimated that between
              150,000 and 300,000 children are born every year with the
              condition in Africa. Nigeria, by her sheer huge size, is the
              country with the highest burden of the disease where ~2% of all
              newborns are born with the disorder. The course of the disease
              varies widely with some children exhibiting severe manifestations
              requiring frequent hospital visits and admissions. The condition
              poses enormous stress and financial burden on the parents of
              children with the disease who are usually the primary caregivers
              in most instances.
            </p>

            <button className="bg-yellow-400 px-2 py-2 rounded-lg text-[#990019]">
              Know More
            </button>
          </div>
        </div>
        <div className="w-full absolute top-[10%] bg-black left-0 h-[400px] -skew-y-12 -z-20"></div>
      </div>
      {/* Service Section */}
      <div className="px-[30px] md:px-[80px] lg:px-[130px] py-[75px] bg-white  ">
        <div className="flex flex-row justify-between items-center gap-9 bg-white">
          <div>
            <div className="flex flex-col items-center  md:mt-0 gap-6 md:flex-row ">
              <div className="md:w-[50%] w-full text-gray-500 text-[20px] text-justify ">
                <h3 className="text-[24px] text-gray-600 font-bold ">
                  About AO.INITIATIVE
                </h3>
                <p>
                  {" "}
                  O.A INITIATIVE foundation is a non-profit organization
                  pioneered by Dr Olanipekun Ayomide, that was established in
                  2019 in Ekiti. The charity was founded out of a desire to help
                  people with sickle cell disease live full, purposeful lives
                  without regret or setbacks as a result of health issues in
                  Ekiti and elsewhere.
                </p>
                <button className="bg-yellow-400 px-2 py-2 rounded-lg text-[#990019]">
                  <Link to="/aboutUs"> Join Now</Link>
                </button>
              </div>
              <div className="md:w-[50%] w-full  ">
                <img
                  src="/oaImage1.webp"
                  alt="ao-initiative members"
                  className="object-contain"
                />
              </div>
            </div>
          <div className=" w-full mt-[28px] md:mt-[48px] flex flex-col md:flex-row-reverse items-center ">
            <div className="md:w-[50%] w-full  ">
              <h4 className="font-bold text-gray-500 lg:text-[28px] text-[19px]  mb-9 ">
                JOIN THE EKITI STATE SICKLE CELL WARRIORS COMMUNITY NOW!!
                <span className="text-gray-600">AND ENJOY IT'S BENEFITS</span>
              </h4>
              <button className="animate-bounce px-3 py-2 bg-yellow-400 rounded-lg text-[#990019] ">
                <Link to="/signUp"> Join Now</Link>
              </button>
            </div>
            <div className="md:w-[50%] w-full  ">
              <img
                src="/oaImage3.webp"
                alt="ao-initiative members"
                className="object-contain"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
       <section
            id="contact"
            className="bg-[#c91735] py-9 px-[30px] md:px-[80px] lg:px-[130px] "
          >
            <div>
              <h2 className="text-[28px] text-gray-100 font-bold mb-4 text-center">
               Send A Mail
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="flex flex-col space-y-2  "
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
                  className="bg-yellow-400 lg:w-[90px] self-center py-5 px-10 md:px-4 rounded-md text-[#990019] font-bold text-lg"
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

export default Home;
