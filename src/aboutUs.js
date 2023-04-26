import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="px-3">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            About OA Initiative <br />
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <p className="text-gray-600 tracking-wide">
            O.A INITIATIVE foundation is a non-profit organization pioneered by
            Dr Olanipekun Ayomide, that was established in 2019 in Ekiti. The
            charity was founded out of a desire to help people with sickle cell
            disease live full, purposeful lives without regret or setbacks as a
            result of health issues in Ekiti and elsewhere.
          </p>
        </div>
        <div className="mt-3 p-5 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200">
          <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
            <img
              src="/support.png"
              alt=""
              className="mb-3 mx-auto rounded-full h-[60px] w-[60px] p-1 bg-gray-100"
            />
            <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
              Core Value
            </h2>
            <p className="text-gray-100"> Love and Humanity</p>
          </div>

          <div className="">
            <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
              <img
                src="/dart.png"
                alt=""
                className="mb-3 mx-auto rounded-full h-[60px] w-[60px] p-1 bg-gray-100"
              />
              <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
                Mission
              </h2>{" "}
              <p className="text-gray-100">
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
            <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
              <img
                src="/telescope.png"
                alt=""
                className="mb-3 mx-auto rounded-full h-[60px] w-[60px] p-1 bg-gray-100"
              />
              <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
                Vision
              </h2>{" "}
              <p className="text-gray-100">
                To live in a society where the morbidity and death rates
                associated with sickle cell disease are decreased and where
                sufficient f ree health care are provided to those who are
                living with the condition.
              </p>
            </div>
          </div>
        </div>

        <section className="px-3">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Team Management
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-5">
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-8 px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
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
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-8 px-3 relative rounded-t-[16px]">
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
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-8 px-3 relative rounded-t-[16px]">
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
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-8 px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin3.jpg"
                  alt=""
                  className="h-[95px] w-[95px] rounded-full object-cover"
                />
              </div>{" "}
              <p className="text-gray-50  mb-3 text-sm text-center">Dr. Lorem Ipsum</p>
            </div>
            <div className="bg-yellow-400 h-20 shadow pt-[60px] pb-8 px-3 relative rounded-t-[16px]">
              <div className="p-1  border border-yellow-500 rounded-full absolute mx-auto -top-[50%] right-[25%]">
                <img
                  src="/admin5.jpg"
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

        <section className="px-3 mt-5 bg-gray-200 py-4">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Problems
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <table>
            <tr className="my-2">
              <th className="text-gray-800 font-bold ">Lack of Database</th>
              <td className="py-2 pl-3 text-gray-600">
                There is no proper database of warriors in Ekiti State
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">
                Lack of Public Awareness
              </th>
              <td className="py-2 pl-3 text-gray-600">
                There is lack of public awareness understan ding of sickle cell
                disease, leading to stigmatization and discrimination for those
                affected by the condition.
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2">
                Lack of access to good Health Services
              </th>
              <td className="py-2 pl-3 text-gray-600">
                Many lack access to specialized medical treatment and are forced
                to rely on emergency care for pain management.
              </td>
            </tr>
          </table>
        </section>

        <section className="px-3 mt-3 bg-gray-200 py-4">
          <h2 className=" pb-1 text-[20px] font-bold text-[#990019]">
            Solution
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <table className=" ">
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">Database</th>
              <td className="py-2 pl-3 text-gray-600 ">
                To have comprehensive data and information on people living with
                the disorder in Ekiti State.
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">
                Public Awareness
              </th>
              <td className="py-2 pl-3 text-gray-600">
                To educate people on genotype compatibility in Ekiti State To
                raise public knowledge of sickle cell illness and to sensitize
                and educate the public through standard professional healthcare
                facilities and public relations in Ekiti State.
              </td>
            </tr>
            <tr>
              <th className="text-gray-800 font-bold mr-2 ">
                Specialised Centers
              </th>
              <td className="py-2 pl-3 text-gray-600">
                To offer clinical services to sickle cell patients who are in
                pain
              </td>
            </tr>
          </table>
        </section>

        <section className="px-3  py-4 bg-gray-50">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Analysis
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <div className="grid grid-cols-2 md:grid-col-3 items-centers justify-center">
            <div className="flex flex-row items-center ">
              <h2 className="text-[34px] font-extrabold text-[#990019]">10%</h2>
              <p>
                is the survival rate of children with sickle cell in Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="/nigeriaMap.jpg"
                alt="Nigeria map"
                className="h-[70px] object-contain"
              />
              <div className="flex flex-col align-items ">
                <h2 className="text-[34px] font-extrabold text-[#990019]">
                  25%
                </h2>
                <p>
                  of adult throughout the country have the sickle cell trait
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <img
                src="/piechart.jpg"
                alt="piechart.jpg"
                className="h-[70px] object-contain"
              />
              <div className="flex flex-col align-items justify-between">
                <h2 className="text-[34px] font-extrabold text-[#990019]">
                  30%
                </h2>

                <p>
                  is what Nigeria bears of the global sickle cell burden
                  Analysis 10%
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-3 py-4 bg-gray-200 ">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Target Audience
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <div className=" py-4">
            <table>
              <tr className="">
                <th className="text-gray-800 font-bold mr-2 ">
                  Individuals and families
                </th>
                <tr className="border-t border-gray-500">
                  <th className="text-gray-800 font-bold mr-2 ">Concerns</th>
                  <td className="py-2 pl-3 text-gray-600">
                    Pain management, Access to healthcare, Education and
                    resources, Financial burden, Stigma and discrimination,
                    Emotional impact.
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="text-gray-800 font-bold mr-2 ">Community</th>
                  <td className="py-2 pl-3 text-gray-600">
                    Religious Centers, Hospital, Schools, Offices, Hangouts,
                    Support groups.
                  </td>
                </tr>
              </tr>
              <tr className="">
                <th className="text-gray-800 font-bold mr-2 ">
                  Medical professionals
                </th>
                <tr>
                  <th className="text-gray-800 font-bold mr-2 ">Concerns</th>
                  <td className="py-2 pl-3 text-gray-600">
                    Lack of knowledge or training, Managing acute complications,
                    Pain management, Limited resources, Coordinating care
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="text-gray-800 font-bold mr-2 ">Community</th>
                  <td className="py-2 pl-3 text-gray-600">
                    Hospitals and Clinics, Community health centers, Private
                    practice, Universities and research institutions
                  </td>
                </tr>
              </tr>
            </table>
          </div>
        </section>

        <section className="bg-gray-50 py-4 px-3">
          <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
            Key Activities
          </h2>
          <div className="h-1 w-7 mb-1 bg-slate-500"></div>
          <div className="h-1 w-10 bg-slate-500 mb-2"></div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="mt-3 bg-yellow-300 shadow rounded-lg px-2 py-2 w-full ">
              <p className="text-gray-500 text-md text-center ">
                Plan medical outreach programs to assist sickle cell warriors in
                Ekiti State
              </p>
            </div>
            <div className="bg-yellow-300 shadow rounded-lg  px-2 py-2 w-full">
              <p className="text-gray-500 text-md  text-center">
                Create a club where those l iving with the disorder can share
                their success stor y on how they have been able to live beyond
                the disorder;
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
