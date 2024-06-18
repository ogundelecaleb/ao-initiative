import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="relative h-[50vh] ">
        <img
          src="/oaImage1.webp"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[22px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              About Us
            </h3>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[40px] lg:px-[80px] py-[36px] md:py-[48px] lg:py-[80px] ">
        <p className="text-gray-600 tracking-wide md:w-[70%] lg:w-[50%] ">
          O.A INITIATIVE foundation is a non-profit organization pioneered by Dr
          Olanipekun Ayomide, that was established in 2019 in Ekiti. The charity
          was founded out of a desire to help people with sickle cell disease
          live full, purposeful lives without regret or setbacks as a result of
          health issues in Ekiti and elsewhere.
        </p>
      </section>
      <section className="bg-gray-100 px-[16px] md:px-[40px] lg:px-[80px] py-[36px] md:py-[48px] lg:py-[80px] ">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="p-3 text-center bg-white  rounded-lg">
            <img
              src="/support.png"
              alt=""
              className="mb-3 mx-auto  h-[60px] w-[60px]  "
            />
            <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
              Core Value
            </h2>
            <p className="text-gray-500 "> Love and Humanity</p>
          </div>

          <div className="p-3 text-center bg-white  rounded-lg">
            <img
              src="/dart.png"
              alt=""
              className="mb-3 mx-auto  h-[60px] w-[60px] "
            />
            <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
              Mission
            </h2>{" "}
            <p className="text-gray-500 ">
              To assist people with sickle cell disease in Ekiti State live the
              kind of life they long for without being constrained by their
              health. <br />
              <br />
              To work hard in Ekiti State to eradicate sickle cell illness from
              society and to drastically reduce the number of persons who have
              the disorder.
            </p>
          </div>

          <div className="p-3 text-center bg-white  rounded-lg">
            <img
              src="/telescope.png"
              alt=""
              className="mb-3 mx-auto  h-[60px] w-[60px]"
            />
            <h2 className="text-[24px] text-gray-700 font-bold mb-4 ">
              Vision
            </h2>{" "}
            <p className="text-gray-500 ">
              To live in a society where the morbidity and death rates
              associated with sickle cell disease are decreased and where
              sufficient f ree health care are provided to those who are living
              with the condition.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-[80px] lg:px-[130px] py-3 lg:py-6">
        <h2 className="mt-3 pb-1 text-[24px] font-bold text-[#990019]">
          Board Of Trustees
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
            <p className="text-gray-50  mb-3 text-sm md:text-[18px] text-center">
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
            <p className="text-gray-50  mb-3 text-sm md:text-[18px] text-center">
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
            <p className="text-gray-50  mb-3 text-sm md:text-[18px] text-center">
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
            <p className="text-gray-50  mb-3 md:text-[18px] text-sm text-center">
              Barrister Temidayo Akeredolu
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
            <p className="text-gray-50  mb-1 md:text-[18px] text-sm text-center">
              Bamisaye Mercy
            </p>
            <p className="text-gray-50  mb-3 text-sm text-center">Secetary</p>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-[80px] lg:px-[130px] mt-5 bg-gray-100 py-[36px] md:py-[48px]">
        <h2 className="mt-3 pb-1 text-[20px] font-bold text-[#990019]">
          Problems
        </h2>
        <div className="h-1 w-7 mb-1 bg-slate-500"></div>
        <div className="h-1 w-10 bg-slate-500 mb-5"></div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-[50%]">
            <img src="/poorHealth.png" alt="" />
          </div>
          <div className="w-full md:w-[50%]">
            <ul className="flex flex-col gap-3">
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">Lack of Database</h3>
                <p>There is no proper database of warriors in Ekiti State.</p>
              </li>
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">
                  {" "}
                  Lack of Public Awareness
                </h3>
                <p>
                  There is lack of public awareness understanding of sickle cell
                  disease, leading to stigmatization and discrimination for
                  those affected by the condition.
                </p>
              </li>
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">
                  Lack of access to good Health Services
                </h3>
                <p>
                  Many lack access to specialized medical treatment and are
                  forced to rely on emergency care for pain management.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-[80px] lg:px-[130px] bg-white py-[36px] md:py-[48px]">
        <h2 className=" pb-1 text-[24px] font-bold text-[#990019]">Solution</h2>
        <div className="h-1 w-7 mb-1 bg-slate-500"></div>
        <div className="h-1 w-10 bg-slate-500 mb-5"></div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-[50%]">
            <img src="/patient.jpg" alt="" />
          </div>
          <div className="w-full md:w-[50%]">
            <ul className="flex flex-col gap-3">
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">Database</h3>
                <p>
                  To have comprehensive data and information on people living
                  with the disorder in Ekiti State.
                </p>
              </li>
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">Public Awareness</h3>
                <p>
                  To educate people on genotype compatibility in Ekiti State To
                  raise public knowledge of sickle cell illness and to sensitize
                  and educate the public through standard professional
                  healthcare facilities and public relations in Ekiti State.
                </p>
              </li>
              <li className="bg-white rounded-md p-3 shadow">
                <h3 className="mb-2 font-semibold ">Specialised Centers</h3>
                <p>
                  Many lack access to specialized medical treatment and are
                  forced to rely on emergency care for pain management.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-[80px] lg:px-[130px] py-3 lg:py-6 bg-gray-50">
        <h2 className="mt-3 pb-1 text-[24px] font-bold text-[#990019]">
          Analysis
        </h2>
        <div className="h-1 w-7 mb-1 bg-slate-500"></div>
        <div className="h-1 w-10 bg-slate-500 mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-centers gap-3 justify-center">
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
                is what Nigeria bears of the global sickle cell burden Analysis
                10%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-3  md:px-[80px] lg:px-[130px] py-3 lg:py-6 bg-gray-100 ">
        <h2 className="mt-3 pb-1 text-[24px] font-bold text-[#990019]">
          Target Audience
        </h2>
        <div className="h-1 w-7 mb-1 bg-slate-500"></div>
        <div className="h-1 w-10 bg-slate-500 mb-5"></div>

        <div className=" py-7">
          <table>
            <tr className="">
              <th className="text-gray-800 font-bold md:mr-2 md:text-[18px] ">
                <p>Individuals and families</p>
              </th>
              <tr className="border-t border-gray-500 py-3">
                <th className="text-gray-800 font-bold ">
                  {" "}
                  <p className="md:px-10 md:text-[18px] ">Concerns</p>{" "}
                </th>
                <td className="py-6  pl-3 text-gray-600">
                  <p className="md:px-10 md:text-[18px] ">
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
                  <p className="md:px-10 md:text-[18px]">Community</p>
                </th>
                <td className=" md:pl-3 text-gray-600 py-6">
                  <p className="md:px-10 md:text-[18px]">
                    Religious Centers, Hospital, Schools, Offices, Hangouts,
                    Support groups.
                  </p>
                </td>
              </tr>
            </tr>
            <tr className="">
              <th className="text-gray-800 font-bold  ">
                <p className="md:px-10 md:text-[18px]">
                  {" "}
                  Medical professionals
                </p>
              </th>
              <tr>
                <th className="text-gray-800 font-bold mr-2 md:text-[18px]">
                  Concerns
                </th>
                <td className="md:pl-3 text-gray-600 py-6">
                  <p className="md:px-10 md:text-[18px]">
                    {" "}
                    Lack of knowledge or training, Managing acute complications,
                    Pain management, Limited resources, Coordinating care
                  </p>
                </td>
              </tr>
              <tr className="border-b border-gray-500">
                <th className="text-gray-800 font-bold mr-2 ">
                  {" "}
                  <p className="md:px-10 md:text-[18px]">Community</p>
                </th>
                <td className=" md:pl-3 text-gray-600 py-6">
                  <p className="md:px-10 md:text-[18px]">
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

      <Footer />
    </div>
  );
};

export default AboutUs;
