import React, { useEffect, useState } from "react";
import Header from "./component/header";
import { Link } from "react-router-dom";
import Footer from "./component/footer";
import Blog from "./component/blogs";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Modal from "./component/Modal";
import Mailchip from "./component/mailchip";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);
  const [faq9, setFaq9] = useState(false);
  const [enrolModal, setEnrolModal] = useState(false);

  useEffect(() => {
    let userData = localStorage.getItem("awareness");

    if (userData == null) {
      setTimeout(() => {
        setEnrolModal(true);
        localStorage.setItem("awareness", true);
      }, 4000);
    }
    console.log(userData);
  }, []);

  const handleEnrollModal = () => {
    setEnrolModal(false);
  };

  // const handleFaq1 = () => {
  //   setFaq1(!faq1);
  // };
  // const handleFaq2 = () => {
  //   setFaq2(!faq2);
  // };
  // const handleFaq3 = () => {
  //   setFaq3(!faq3);
  // };
  // const handleFaq4 = () => {
  //   setFaq4(!faq4);
  // };
  // const handleFaq5 = () => {
  //   setFaq5(!faq5);
  // };
  // const handleFaq6 = () => {
  //   setFaq6(!faq6);
  // };
  // const handleFaq7 = () => {
  //   setFaq7(!faq7);
  // };
  // const handleFaq8 = () => {
  //   setFaq8(!faq8);
  // };
  // const handleFaq9 = () => {
  //   setFaq9(!faq9);
  // };

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`}

  const onSubmit = (formData) => {
    window.location.href = `mailto:olanipekunayomideinitiative@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div>
      <Header />

      <div className="px-[16px] md:px-[60px] lg:px-[110px] py-[75px] bg-[#990019]  ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
            className="md:max-w-[50%] md:w-[50%] w-full"
          >
            <h2 className="text-white font-bold mb-5 text-[28px] md:text-[38px]">
              As a Sickle Cell Warrior, you can be whatever and whomever you
              want to be. <span className="bg-yellow-400 px-2">Don't</span>{" "}
              limit yourself!
            </h2>

            <p className="text-white font-normal mb-5">
              Our Mission Is To Promote Awareness, Education and Advocacy For
              Sickle Cell Disease And its Impact On Those Who live With It In
              Ekiti.
            </p>

            <button className="bg-yellow-400 px-4 py-3 rounded-lg text-[#990019]">
              <Link to="/aboutUs"> Find Out More</Link>
            </button>
          </m.div>

          <div className="h-full md:max-w-[42%] md:w-[42%] w-full flex justify-center">
            <div className="relative object-cover ">
              <span className="h-[300px] md:h-[400px] w-[300px] md:w-full absolute bg-[#771023] top-0 left-4 rounded-bl-[80px] object-contain"></span>
              <div className=" ">
                <img
              src="/oaImage32.jpg"
              alt=""
                  className="h-[300px] md:h-[400px] w-[300px] md:w-full  relative object-contain rounded-bl-[80px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ways to support */}
      <div className=" relative bg-white h-[120px] ">
        <div className="mx-[10%]  rounded-tl-[40px]  rounded-br-[40px] absolute px-8 py-2 md:py-6 -top-[50%] bg-gray-200  w-[80%] left-0 right-0 item-center  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <h3 className="text-gray-500 text-[20px] md:text-[26px]">
              <span className=" text-[#990019] font-bold">
                3 easy ways you can donate
              </span>{" "}
              to support a worthy cause
            </h3>
            <Link to="/donatecash">
            <div className="flex flex-col rounded-lg items-center text-center bg-gray-100 border shadow  p-2 md:p-5">
              {" "}
              <img
                src="/cashinhand.png"
                alt=""
                className="md:h-[80px] lg:h-[100px] h-[40px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[20px] text-[18px] font-bold text-gray-700 ">
                Donate Cash
              </h2>
            </div>
            </Link>
            <Link to="/donate">

            <div className="flex flex-col  rounded-lg items-center bg-gray-100 text-center border shadow p-2 md:p-5">
              {" "}
              <img
                src="/bloodbag.png"
                alt=""
                className="md:h-[80px] lg:h-[100px] h-[40px] mb-2  md:mb-4"
              />
              <h2 className="md:text-[20px] text-[18px] font-bold text-gray-700 ">
                Donate Blood
              </h2>
            </div>
            </Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf0Cp-gNc_hCrCULZS_Du9s59Zt9pH1c9XjDEfC8NAzmYQZrA/viewform">
              <div className="flex flex-col animate-bounce transform ease-in duration-50  hover:scale-125 cursor-pointer rounded-lg items-center text-center  bg-gray-100 border shadow p-2 md:p-5">
                {" "}
                <img
                  src="/support.png"
                  alt=""
                  className="md:h-[80px] lg:h-[100px] h-[40px] mb-2  md:mb-4"
                />
              <h2 className="md:text-[20px] text-[18px] font-bold text-gray-700 ">
                  Volunteer
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[16px] md:px-[60px] lg:px-[110px] pt-[60px] md:pt-[100px] lg:pt-[60px] pb-[75px] bg-[#990019]  ">
        <div className="mt-[260px] md:mt-[46px]">
          <div className="flex flex-col gap-[40px] md:flex-row md:gap-[80px]">
            <div className="md:w-[50%] w-full ">
              <h3 className="text-[24px] text-gray-100 font-bold ">
                What Is Sickle Cell Disease (SCD)
              </h3>

              <p className="text-gray-100 my-4  ">
                Sickle cell disease (SCD) is the commonest inherited disorder of
                hemoglobin in children resulting from the inheritance of
                abnormal hemoglobin genes from both parents. It is estimated
                that between 150,000 and 300,000 children are born every year
                with the condition in Africa. Nigeria, by her sheer huge size,
                is the country with the highest burden of the disease where ~2%
                of all newborns are born with the disorder.
                <br /> The course of the disease varies widely with some
                children exhibiting severe manifestations requiring frequent
                hospital visits and admissions. The condition poses enormous
                stress and financial burden on the parents of children with the
                disease who are usually the primary caregivers in most
                instances.
              </p>
              <Link to="https://en.wikipedia.org/wiki/Sickle_cell_disease">
                <button className="bg-yellow-400 px-2 py-2 rounded-lg text-[#990019]">
                  Know More
                </button>
              </Link>
            </div>
            <div className="md:w-[50%] w-full">
              <h2 className="text-[24px] text-gray-100 font-bold ">
                How to stay healthy with SCD
              </h2>
              <ul className="text-gray-100 my-4 text-justify list-disc pl-4 ">
                <li>Drink plenty of water.</li>
                <li>Avoid drinking or smoking.</li>
                <li> Get enough rest.</li>
                <li> Avoid strenuous exercise.</li>
                <li>
                  Avoid extreme temperatures, like severe cold, which can bring
                  on a pain crisis.
                </li>
                <li>Always visit a doctor for check up.</li>
                <li>Take prescribed medicines given to you from specialist.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-[10%] bg-black left-0 h-[400px] -skew-y-12 -z-20"></div>
      </div>
     
        {/* Fellowship Section */}
      <div id="fellowship" className="px-[16px] md:px-[60px] lg:px-[110px] py-[40px] md:py-[75px] bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] md:gap-[40px] lg:gap-[80px]">
          <div className="lg:w-[50%] w-full">
            <h3 className="text-[20px] md:text-[24px] lg:text-[32px] text-[#990019] font-bold mb-4 text-center lg:text-left">
              Sickle Cell Action Community Health Fellowship
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base text-center lg:text-left">
              Join the next generation of leaders advancing sickle cell awareness, 
              advocacy & community health. Together let's fight sickle cell, empower 
              communities and save lives.
            </p>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4 md:mb-6">
              <h4 className="text-[#990019] font-bold text-base md:text-lg mb-3">Program Benefits:</h4>
              <ul className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>• Training & Certification</li>
                <li>• Mentorship & Networking</li>
                <li>• Recognition as a Community Health Fellow</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4 md:mb-6">
              <h4 className="text-[#990019] font-bold text-base md:text-lg mb-3">Who Can Apply:</h4>
              <ul className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>• Ages 18-30</li>
                <li>• Students | Young Professionals | Community Advocates</li>
                <li>• Passionate about health, leadership & social impact</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
              <button className="bg-[#990019] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#771023] transition-colors w-full sm:w-auto text-sm md:text-base">
                <Link to="https://docs.google.com/forms/u/0/d/1iMVZ_rI4nYt_y6GBvL01dIbt83VWENX5Yn8qLukDtww/viewform?pli=1&pli=1&pli=1&edit_requested=true
SICKLE CELL ACTION COMMUNITY HEALTH FELLOWSHIP" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </Link>
              </button>
              <div className="text-xs md:text-sm text-gray-500 text-center sm:text-left">
                Deadline: September 30th, 2025
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full mt-6 lg:mt-0">
            <div className="relative">
              <div className="bg-[#990019] rounded-lg p-3 md:p-4 text-center mb-4 md:mb-6">
                <div className="bg-white rounded-lg p-4 md:p-6">
                  <h4 className="text-[#990019] font-bold text-lg md:text-xl mb-2">3 MONTHS</h4>
                  <p className="text-gray-600 text-xs md:text-sm">HYBRID</p>
                  <p className="text-gray-600 text-xs md:text-sm">(ONLINE + COMMUNITY ACTION)</p>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="/fellowship.jpg" 
                  alt="Fellowship participants" 
                  className="w-full rounded-lg shadow-lg max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Service Section */}
      <div className="px-[16px] md:px-[60px] lg:px-[110px] py-[75px] bg-white  ">
        <div className="flex flex-row justify-between items-center gap-9 bg-white">
          <div>
            <div className="flex flex-col items-center gap-[40px] md:flex-row md:gap-[80px]">
              <div className="md:w-[50%] w-full text-gray-500 text-[18px]  ">
                <h3 className="text-[24px] text-gray-600 font-bold mb-4 ">
                  About O.A INITIATIVE
                </h3>
                <p>
                  {" "}
                  O.A INITIATIVE is a non-profit organization pioneered by Dr
                  Olanipekun Ayomide, that was established in 2019 in Ekiti. The
                  charity was founded out of a desire to help people with sickle
                  cell disease live full, purposeful lives without regret or
                  setbacks as a result of health issues in Ekiti and elsewhere.
                </p>
                <button className="bg-yellow-400 px-2 py-2 rounded-lg text-[#990019] mt-4">
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf0Cp-gNc_hCrCULZS_Du9s59Zt9pH1c9XjDEfC8NAzmYQZrA/viewform">
                    Join Now
                  </Link>
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
            <div className=" w-full mt-[28px] md:mt-[120px] flex flex-col md:flex-row-reverse gap-[40px] md:gap-[80px] items-center ">
              <div className="md:w-[50%] w-full  ">
                <h3 className="text-[24px] text-gray-600 font-bold mb-4 ">
                  Ekiti State Sickle Cell Warriors Enrollment
                </h3>
                <p className=" text-gray-500 lg:text-[18px] text-[16px]  mb-9 ">
                  Enroll into the Ekiti State Health Insurance Scheme to have
                  you updated on our data base. <br /> <br /> The scheme is
                  aimed at providing better services for those who are suffering
                  from this disease and also to ensure that everyone who belong
                  to the state receives proper treatment. <br /> <br /> The
                  scheme was launched by O.A-Initiative in conjuction with Ekiti
                  State Health Insurance.
                </p>
                <button className="animate-bounce px-3 py-2 bg-yellow-400 rounded-lg text-[#990019] ">
                  <Link to="/signUp"> Enroll Now</Link>
                </button>
              </div>
              <div className="md:w-[50%] w-full  ">
                <img
                  src="/oaImage20.jpg"
                  alt="ao-initiative members"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative h-[50vh] ">
        <img
          src="https://oncomhfoundation.org/wp-content/uploads/2022/07/2A5FB06D-5BD6-4353-8A51-FE75014A23B9.png-1.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />

        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#990019] opacity-90 px-4 md:px-[40px] lg:px-[80px]">
          <h3 className=" text-[24px] text-center mb-5">
            Discover Ekiti State Health Hub
          </h3>
          <p>
            Get information of nearby medical centers, emergency services, and
            specialized care providers. Your health matters, and having easy
            access to this information can make a difference in critical
            situations.
            <br />
            <br />
            Stay prepared, stay informed – click the button and download Ekiti
            state's public and private health center list now! 🌐💙
          </p>

          <a
            href="/HealthCenterList.pdf"
            download="HealthCenterList.pdf"
            className="mx-auto mt-3"
          >
            <button className="text-white px-2 py-2 rounded-md border">
              Downlaod
            </button>
          </a>
        </div>
      </section>
    
      <Blog />
      {/* <section className=" py-[48px] px-[16px]   relative md:px-[60px] lg:px-[110px]">
        <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3">
          Frequently Asked Questions
        </h2>
        <div className="py-7 border-t border-b ">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={handleFaq1}
          >
            <p className="text-gray-500 font-bold text-lg">How do i enroll?</p>{" "}
            {faq1 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq1}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq1 ? (
            <p className="py-4 px-5 bg-slate-100">
              You will first enrol on O.A. Initiative Database which is FREE. A
              Representative will link you to the Approved Primary Health Care
              Faclity around your area of residence.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={handleFaq2}
          >
            <p className="text-gray-500 font-bold text-lg">
              Will I need to pay for enrollment at the approved Primary Health
              Care Facility?
            </p>{" "}
            {faq2 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq2}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq2 ? (
            <p className="py-4 px-5 bg-slate-100">
              No, enrollment at the approved Primary Health Care Facility is
              FREE.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={handleFaq3}
          >
            <p className="text-gray-500 font-bold text-lg">
              Will i need to submit any document before enrolment?
            </p>{" "}
            {faq3 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq3}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq3 ? (
            <p className="py-4 px-5 bg-slate-100">
              NO, you only need your NIN.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={handleFaq4}
          >
            <p className="text-gray-500 font-bold text-lg">
              What if the Primary Health Care Faclity cannot take care of me,
              What do i do?
            </p>{" "}
            {faq4 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq4}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq4 ? (
            <p className="py-4 px-5 bg-slate-100">
              You will be transfered to the approved Secondary Health Care
              Facility for FREE.
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={handleFaq5}
          >
            <p className="text-gray-500 font-bold text-lg">
              After my enrollment, when will have access to medical care?
            </p>{" "}
            {faq5 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq5}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq5 ? (
            <p className="py-4 px-5 bg-slate-100 text-justify">
              The following month after your enrollment. That is, if you enrol
              in May, you will start having access in June.
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center  cursor-pointer mb-2"
            onClick={handleFaq6}
          >
            <p className="text-gray-500 font-bold text-lg">
              Can i enroll on behalf of someone?
            </p>{" "}
            {faq6 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq6}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq6 ? (
            <p className="py-4 px-5 bg-slate-100 text-justify">
              NO. You cant enroll for anyone
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={handleFaq7}
          >
            <p className="text-gray-500 font-bold text-lg">
              Can i enrol someone outside Ekiti State?
            </p>{" "}
            {faq7 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq7}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq7 ? (
            <p className="py-4 px-5 bg-slate-100">
              Enrollment and beneficiaries are meant for Ekiti State residence
              only.
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center mb-2  cursor-pointer"
            onClick={handleFaq8}
          >
            <p className="text-gray-500 font-bold text-lg">
              Will i pay for drugs? Either monthly/weekly/yearly?
            </p>{" "}
            {faq8 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq8}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq8 ? (
            <p className="py-4 px-5 bg-slate-100">NO payment at all.</p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div
            className="flex justify-between items-center mb-2  cursor-pointer"
            onClick={handleFaq9}
          >
            <p className="text-gray-500 font-bold text-lg">
              In case of Emergency/Routine Checkup, do i need to pay for Card
              Registration/for Consultation?
            </p>{" "}
            {faq9 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq9}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq9 ? (
            <p className="py-4 px-5 bg-slate-100">
              From point of Entry to Lab test to Drugs, everything is FREE.
            </p>
          ) : (
            ""
          )}
        </div>

        <div></div>
      </section> */}
      <section class="bg-[#fafafa] ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-[22px] md:text-[28px] font-bold tracking-tight  text-gray-800 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 text-sm sm:text-lg ">
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
      {/* <section
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
              className="bg-yellow-400 md:w-[70%] w-full   self-center py-5 px-[16px] md:px-4 rounded-md text-[#990019] font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section> */}
      <Footer />
      <Modal isOpen={false} onClose={handleEnrollModal}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="mt-4 flex justify-between mx-5 border-b border-b-[#fceb07]">
            <div className="flex items-center gap-3">
              <svg
                onClick={handleEnrollModal}
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9497 7.05032L7.05021 16.9498"
                  stroke="#171717"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.05029 7.05032L16.9498 16.9498"
                  stroke="#171717"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="md:text-[24px] text-[18px] leading-[31px]  text-[#990019] font-bold">
                SCD Awareness Month is Here !!
              </h3>
            </div>
          </div>
          <img src="/awearness.jpg" alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
