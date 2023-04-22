import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
          About OA Initiative
        </h2>

        <p>
          O.A INITIATIVE foundation is a non-profit organization pioneered by Dr
          Olanipekun Ayomide, that was established in 2019 in Ekiti. The charity
          was founded out of a desire to help people with sickle cell disease
          live full, purposeful lives without regret or setbacks as a result of
          health issues in Ekiti and elsewhere.
        </p>

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3">
          <div className="">
            <img
              src="/support.png"
              alt=""
              className="mb-3 mx-auto rounded-full h-[40px] p-1 bg-gray-100"
            />
            <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
              <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
                Core Value
              </h2>
              <p className="text-gray-400"> Love and Humanity</p>
            </div>
          </div>

          <div className="">
            <img
              src="/support.png"
              alt=""
              className="mb-3 mx-auto rounded-full h-[40px] p-1 bg-gray-100"
            />
            <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
              <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
                Mission
              </h2>{" "}
              <p className="text-gray-400">
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
           
              <img
                src="/support.png"
                alt=""
                className="mb-3 mx-auto rounded-full h-[40px] p-1 bg-gray-100"
              />
              <div className="p-3 text-center bg-yellow-400 shadow rounded-lg">
              <h2 className="text-[24px] text-gray-500 font-bold mb-4 ">
                Vision
              </h2>{" "}
              <p className="text-gray-400">
                To live in a society where the morbidity and death rates
                associated with sickle cell disease are decreased and where
                sufficient f ree health care are provided to those who are
                living with the condition.
              </p>
              </div>
          </div>
        </div>

        <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
          Team Management
        </h2>
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>

        <section className="px-3 mt-3 bg-gray-200 py-4">
          <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
            Problems
          </h2>
          <table>
            <tr>
              <th>Lack of Database</th>
              <td>There is no proper database of warriors in Ekiti State</td>
            </tr>
            <tr>
              <th>Lack of Public Awareness</th>
              <td>
                There is lack of public awareness understan ding of sickle cell
                disease, leading to stigmatization and discrimination for those
                affected by the condition.
              </td>
            </tr>
            <tr>
              <th>Lack of access to good Health Services</th>
              <td>
                Many lack access to specialized medical treatment and are forced
                to rely on emergency care for pain management.
              </td>
            </tr>
          </table>
        </section>

        <section className="px-3 mt-3 bg-gray-200 py-4">
          <h2 className=" mb-2 text-[20px] font-bold text-[#990019]">
            Solution
          </h2>

          <table className=" ">
            <tr>
              <th>Database</th>
              <td>
                To have comprehensive data and information on people living with
                the disorder in Ekiti State.
              </td>
            </tr>
            <tr>
              <th>Public Awareness</th>
              <td>
                To educate people on genotype compatibility in Ekiti State To
                raise public knowledge of sickle cell illness and to sensitize
                and educate the public through standard professional healthcare
                facilities and public relations in Ekiti State.
              </td>
            </tr>
            <tr>
              <th>Specialised Centers</th>
              <td>
                To offer clinical services to sickle cell patients who are in
                pain
              </td>
            </tr>
          </table>
        </section>

        <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
          Analysis
        </h2>
        <div className="grid grid-cols-2 md:grid-col-3 items-centers justify-center">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-[34px] font-extrabold text-[#990019]">10%</h2>
            <p>is the survival rate of children with sickle cell in Nigeria</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <img
              src="/nigeriaMap.jpg"
              alt="Nigeria map"
              className="h-[70px] object-contain"
            />
            <div className="flex flex-col align-items justify-between">
              <h2 className="text-[34px] font-extrabold text-[#990019]">25%</h2>
              <p>of adult throughout the country have the sickle cell trait</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <img
              src="/piechart.jpg"
              alt="piechart.jpg"
              className="h-[70px] object-contain"
            />
            <div className="flex flex-col align-items justify-between">
              <h2 className="text-[34px] font-extrabold text-[#990019]">30%</h2>

              <p>
                is what Nigeria bears of the global sickle cell burden Analysis
                10%
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
          Target Audience
        </h2>
        <div className="bg-gray-200 py-4">
          <table>
            <tr className="">
              <th>Individuals and families</th>
              <tr className="border-t border-gray-500">
                <th>Concerns</th>
                <td>
                  Pain management, Access to healthcare, Education and
                  resources, Financial burden, Stigma and discrimination,
                  Emotional impact.
                </td>
              </tr>
              <tr className="border-b border-gray-500">
                <th className="text-">Community</th>
                <td>
                  Religious Centers, Hospital, Schools, Offices, Hangouts,
                  Support groups.
                </td>
              </tr>
            </tr>
            <tr className="">
              <th>Medical professionals</th>
              <tr>
                <th>Concerns</th>
                <td>
                  Lack of knowledge or training, Managing acute complications,
                  Pain management, Limited resources, Coordinating care
                </td>
              </tr>
              <tr className="border-b border-gray-500">
                <th className="text-">Community</th>
                <td>
                  Hospitals and Clinics, Community health centers, Private
                  practice, Universities and research institutions
                </td>
              </tr>
            </tr>
          </table>
        </div>

        <h2 className="mt-3 mb-2 text-[20px] font-bold text-[#990019]">
          Key Activities
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="bg-yellow-300 shadow rounded-lg px-2 py-2 w-full ">
            <p className="text-gray-500 text-md ">
              Plan medical outreach programs to assist sickle cell warriors in
              Ekiti State
            </p>
          </div>
          <div className="bg-yellow-300 shadow rounded-lg  px-2 py-2 w-full">
            <p className="text-gray-500 text-md ">
              Create a club where those l iving with the disorder can share
              their success stor y on how they have been able to live beyond the
              disorder;
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
