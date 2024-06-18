import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Footer from "./component/footer";
import Header from "./component/header";

import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const YearCalendar = (props) => {
  const events = [
    // {
    //   start: moment().add(7, 'days').add(1, 'months'),
    //   end: moment().add(7, 'days').add(1, 'months'),
    //   title: "Drafting out New year Newsletter"
    // },
    {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 5),
      title: "Drafting out New year Newsletter",
    },
    {
      start: new Date(2024, 0, 11),
      end: new Date(2024, 0, 15),
      title: "Report and vision casting video",
    },
    {
      start: new Date(2024, 0, 4),
      end: new Date(2024, 0, 11),
      title: "Writing and distributions of letters to stakeholders",
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 14),
      title: "VALENTINE ONLINEAWARENESS CAMPAIGN: THEME: NO BLIND LOVE",
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 29),
      title: "Monthly awareness, newsletter, blood donation drive (@OYE)",
    },
    {
      start: new Date(2024, 2, 1),
      end: new Date(2024, 2, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 2, 1),
      end: new Date(2024, 2, 14),
      title: "Content on any topic related to SCD; (SCD and support system)",
    },
    {
      start: new Date(2024, 3, 7),
      end: new Date(2024, 3, 7),
      title: "WORLD HEALTH DAY",
    },
    {
      start: new Date(2024, 3, 19),
      end: new Date(2024, 3, 19),
      title: "WORLD MALARIA DAY Poetry",
    },
    {
      start: new Date(2024, 3, 8),
      end: new Date(2024, 3, 22),
      title: "Launch the fundraising campaign for the annual gala.",
    },
    {
      start: new Date(2024, 4, 1),
      end: new Date(2024, 4, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 4, 8),
      end: new Date(2024, 4, 20),
      title: "Organize support group meetings.",
    },
    {
      start: new Date(2024, 5, 1),
      end: new Date(2024, 5, 1),
      title:
        "GLOBAL PARENTS DAY THEME: Love your Warrior, Nurture your  Champion Challenges parents of sickle cell warriors face (Video)",
    },

    {
      start: new Date(2024, 5, 14),
      end: new Date(2024, 5, 14),
      title: "AWARENESS FOR   BLOOD DONATION & CELEBRATION OF OUR BLOOD DONORS",
    },
    {
      start: new Date(2024, 5, 17),
      end: new Date(2024, 5, 22),
      title: "Sickle Cell Awareness week MASS MEDIA CAMPAIGN",
    },
    {
      start: new Date(2024, 5, 20),
      end: new Date(2024, 5, 30),
      title: "Monthly awareness, newsletter,blood donation drive (@ADO)",
    },
    {
      start: new Date(2024, 6, 1),
      end: new Date(2024, 6, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 6, 8),
      end: new Date(2024, 6, 18),
      title: "Sending out result of voluntary blood donors",
    },
    {
      start: new Date(2024, 6, 10),
      end: new Date(2024, 6, 21),
      title: "Begin planning for the Sickle Cell   Research Symposium.",
    },
    {
      start: new Date(2024, 6, 12),
      end: new Date(2024, 6, 25),
      title: "Advocate for Sickle cell awareness and policy changes",
    },
    {
      start: new Date(2024, 7, 1),
      end: new Date(2024, 7, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 7, 8),
      end: new Date(2024, 7, 18),
      title: "Sending out result of voluntary blood donors",
    },
    {
      start: new Date(2024, 7, 10),
      end: new Date(2024, 7, 21),
      title: "Begin planning for the Sickle Cell   Research Symposium.",
    },
    {
      start: new Date(2024, 7, 12),
      end: new Date(2024, 7, 25),
      title: "Advocate for Sickle cell awareness and policy changes",
    },
    {
      start: new Date(2024, 8, 1),
      end: new Date(2024, 8, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 8, 8),
      end: new Date(2024, 8, 10),
      title: "Filming interviews with prominent sickle cell warriors",
    },
    {
      start: new Date(2024, 8, 8),
      end: new Date(2024, 8, 20),
      title: "Sickle cell awareness month",
    },
    {
      start: new Date(2024, 8, 8),
      end: new Date(2024, 8, 20),
      title:
        "Essay Writing Competition on a topic related to Sickle Cell Disease (PROPOSED Sponsor TESLIM)",
    },
    {
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 7),
      title: "Monthly awareness, news letter",
    },
    {
      start: new Date(2024, 9, 10),
      end: new Date(2024, 9, 20),
      title: "Provide holiday support programs for affected families.",
    },
    {
      start: new Date(2024, 9, 20),
      end: new Date(2024, 9, 30),
      title: "Conduct an end-of-year impact assessment",
    },
    {
      start: new Date(2024, 10, 1),
      end: new Date(2024, 10, 7),
      title: "Monthly awareness, newsletter, blood donation drive (@BOUESTI) ",
    },
    {
      start: new Date(2024, 10, 10),
      end: new Date(2024, 10, 20),
      title: "Provide holiday support programs for affected families.",
    },
    {
      start: new Date(2024, 10, 20),
      end: new Date(2024, 10, 30),
      title: "Conduct an end-of-year impact assessment",
    },
    {
      start: new Date(2024, 11, 1),
      end: new Date(2024, 11, 15),
      title:
        "Monthly awareness, newsletter, End of the year meeting, thank You message, Blood donor of the year",
    },
    {
      start: new Date(2024, 11, 10),
      end: new Date(2024, 11, 20),
      title: "Provide holiday support programs for affected families.",
    },
    {
      start: new Date(2024, 11, 20),
      end: new Date(2024, 11, 30),
      title: "Conduct an end-of-year impact assessment",
    },
  ];

  return (
    <div className="">
      <Header />
      <section className="relative h-[50vh] ">
        <img
          src="/calendar.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[22px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              Calendar
            </h3>
          </div>
        </div>
      </section>
      <div className="py-[40px] md:py-[100px] px-[16px] md:px-[80px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default YearCalendar;
