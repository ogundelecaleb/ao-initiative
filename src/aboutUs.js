import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { motion as m } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#fafafa]">
        <div className="px-3 md:px-[80px] lg:px-[130px] py-3 lg:py-6 ">
          <h2 className=" pb-1 text-[20px] font-bold text-[#990019]">
            About OA Initiative <br />
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>

          <p className="text-gray-600 tracking-wide text-justify">
            O.A INITIATIVE foundation is a non-profit organization pioneered by
            Dr Olanipekun Ayomide, that was established in 2019 in Ekiti. The
            charity was founded out of a desire to help people with sickle cell
            disease live full, purposeful lives without regret or setbacks as a
            result of health issues in Ekiti and elsewhere.
          </p>
        </div>
        <div className="mt-3 py-8 px-[30px] md:px-[80px] lg:px-[130px] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200">
          <div className="p-3 text-center  rounded-lg">
            <img
              src="/support.png"
              alt=""
              className="mb-3 mx-auto  h-[60px] w-[60px]  "
            />
            <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
              Core Value
            </h2>
            <p className="text-gray-500"> Love and Humanity</p>
          </div>

          <div className="">
            <div className="p-3 text-center  rounded-lg">
              <img
                src="/dart.png"
                alt=""
                className="mb-3 mx-auto  h-[60px] w-[60px] "
              />
              <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
                Mission
              </h2>{" "}
              <p className="text-gray-500">
                To assist people with sickle cell disease in Ekiti State live
                the kind of life they long for without being constrained by
                their health. <br />
                To work hard in Ekiti State to eradicate sickle cell illness f
                rom society an d to drastically reduce the number of persons who
                have the disorder.
              </p>
            </div>
          </div>

          <div className="">
            <div className="p-3 text-center rounded-lg">
              <img
                src="/telescope.png"
                alt=""
                className="mb-3 mx-auto  h-[60px] w-[60px]"
              />
              <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
                Vision
              </h2>{" "}
              <p className="text-gray-500">
                To live in a society where the morbidity and death rates
                associated with sickle cell disease are decreased and where
                sufficient f ree health care are provided to those who are
                living with the condition.
              </p>
            </div>
          </div>
        </div>

        <section className="px-3 md:px-[80px] lg:px-[130px] py-3 lg:py-6">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Team Management
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-5">
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-[50px] px-3 relative rounded-t-[16px]">
              <div className="p-1 border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin1.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-3 text-sm text-center">
                Dr. Olanipekun Ayomide
              </p>
            </div>
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-[50px] px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin5.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-3 text-sm text-center">
                Dr. Ijabadeniyi
              </p>
            </div>
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-[50px] px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin4.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-3 text-sm text-center">
                Dr.Mrs Mary Olanipekun
              </p>
            </div>
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-[50px] px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin3.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-3 text-sm text-center">
                Dr. Lorem Ipsum
              </p>
            </div>
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-[50px] px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin2.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-1 text-sm text-center">
                Bamisaye Mercy
              </p>
              <p className="text-gray-50  mb-3 text-sm text-center">Secetary</p>
            </div>
          </div>
        </section>

        <section className="px-3 md:px-[80px] lg:px-[130px] mt-5 bg-gray-200 py-3 lg:py-6">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Problems
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>

          <table>
            <tr className="my-2">
              <th className="text-gray-800 font-bold ">Lack of Database</th>
              <td className="py-6 md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  {" "}
                  There is no proper database of warriors in Ekiti State.
                </p>
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">
                Lack of Public Awareness
              </th>
              <td className="py-6 md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  There is lack of public awareness understanding of sickle
                  cell disease, leading to stigmatization and discrimination for
                  those affected by the condition.
                </p>
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2">
                Lack of access to good Health Services
              </th>
              <td className="py-6 md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  Many lack access to specialized medical treatment and are
                  forced to rely on emergency care for pain management.
                </p>
              </td>
            </tr>
          </table>
        </section>

        <section className="px-3 md:px-[80px] lg:px-[130px] mt-3 bg-gray-200 py-3 lg:py-6">
          <h2 className=" pb-1 text-[20px] font-bold text-[#990019]">
            Solution
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>

          <table className=" ">
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">Database</th>
              <td className="py-6  md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  To have comprehensive data and information on people living
                  with the disorder in Ekiti State.
                </p>
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">
                Public Awareness
              </th>
              <td className="py-6  md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  To educate people on genotype compatibility in Ekiti State To
                  raise public knowledge of sickle cell illness and to sensitize
                  and educate the public through standard professional
                  healthcare facilities and public relations in Ekiti State.
                </p>
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2">
                Specialised Centers
              </th>
              <td className="py-6  md:pl-3 text-gray-600">
                <p className="md:px-10 ">
                  To offer clinical services to sickle cell patients who are in
                  pain
                </p>
              </td>
            </tr>
          </table>
        </section>

        <section className="px-3 md:px-[80px] lg:px-[130px] py-3 lg:py-6 bg-gray-50">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Analysis
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>

          <div className="grid grid-cols-1 md:grid-col-3 items-centers gap-3 justify-center">
            <div className="flex flex-row items-center gap-3 ">
              <h2 className="text-[34px] lg:text-[42px] font-extrabold text-[#990019]">
                10%
              </h2>
              <p className="px-3 text-[16px] lg:text-[24px] ">
                is the survival rate of children with sickle cell in Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img
                src="/nigeriaMap.jpg"
                alt="Nigeria map"
                className="h-[70px] object-contain"
              />
              <div className="flex flex-col align-items    ">
                <h2 className="text-[34px] lg:text-[42px] font-extrabold text-[#990019]">
                  25%
                </h2>
                <p className=" text-[16px] lg:text-[24px] ">
                  of adult throughout the country have the sickle cell trait
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center  gap-3  justify-between">
              <img
                src="/piechart.jpg"
                alt="piechart.jpg"
                className="h-[70px] object-contain"
              />
              <div className="flex flex-col align-items justify-between">
                <h2 className="text-[34px] lg:text-[42px] font-extrabold text-[#990019]">
                  30%
                </h2>

                <p className="px-3 text-[16px] lg:text-[24px] ">
                  is what Nigeria bears of the global sickle cell burden
                  Analysis 10%
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-3  md:px-[80px] lg:px-[130px] py-3 lg:py-6 bg-gray-200 ">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Target Audience
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-5"></div>

          <div className=" py-7">
            <table>
              <tr className="">
                <th className="text-gray-800 font-bold md:mr-2 ">
                  <p>Individuals and families</p>
                </th>
                <tr className="border-t border-gray-500 py-3">
                  <th className="text-gray-800 font-bold ">
                    {" "}
                    <p className="md:px-10 ">Concerns</p>{" "}
                  </th>
                  <td className="py-6  pl-3 text-gray-600">
                    <p className="md:px-10 ">
                      {" "}
                      Pain management, Access to healthcare, Education and
                      resources, Financial burden, Stigma and discrimination,
                      Emotional impact.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="text-gray-800 font-bold ">
                    {" "}
                    <p className="md:px-10 ">Community</p>
                  </th>
                  <td className=" md:pl-3 text-gray-600 py-6">
                    <p className="md:px-10 ">
                      Religious Centers, Hospital, Schools, Offices, Hangouts,
                      Support groups.
                    </p>
                  </td>
                </tr>
              </tr>
              <tr className="">
                <th className="text-gray-800 font-bold  ">
                  <p className="md:px-10 "> Medical professionals</p>
                </th>
                <tr>
                  <th className="text-gray-800 font-bold mr-2 ">Concerns</th>
                  <td className="md:pl-3 text-gray-600 py-6">
                    <p className="md:px-10 ">
                      {" "}
                      Lack of knowledge or training, Managing acute
                      complications, Pain management, Limited resources,
                      Coordinating care
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="text-gray-800 font-bold mr-2 ">
                    {" "}
                    <p className="md:px-10 ">Community</p>
                  </th>
                  <td className=" md:pl-3 text-gray-600 py-6">
                    <p className="md:px-10 ">
                      {" "}
                      Hospitals and Clinics, Community health centers, Private
                      practice, Universities and research institutions
                    </p>
                  </td>
                </tr>
              </tr>
            </table>
          </div>
        </section>

        {/* <section className="bg-gray-50 py-4 px-3  md:px-[80px] lg:px-[130px]">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Key Activities
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <div className="flex flex-row justify-center gap-10  items-center">
            <div className="mt-3 bg-yellow-300 shadow rounded-lg px-2 py-2 w-full ">
              <p className="text-gray-500 text-md text-center ">
                Plan medical outreach programs to assist sickle cell warriors in
                Ekiti State
              </p>
            </div>
            <div className="bg-yellow-300 shadow rounded-lg  px-2 py-2 w-full">
              <p className="text-gray-500 text-md  text-center">
                Create a club where those l iving with the disorder can share
                their success story on how they have been able to live beyond
                the disorder;
              </p>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
