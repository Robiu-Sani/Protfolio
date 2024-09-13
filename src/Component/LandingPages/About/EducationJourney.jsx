import { FaSchool, FaGraduationCap, FaCode } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const EducationJourney = () => {
  const timelineData = [
    {
      title: "Fazil (Ongoing)",
      institution: "Islamia Kamil Maderasah",
      year: "Present",
      icon: <GiOpenBook className="text-orange-500" size={25} />,
    },
    {
      title: "Bachelor in Islamic Studies (Ongoing)",
      institution: "Comilla Victoria College",
      year: "Present",
      icon: <GiOpenBook className="text-purple-500" size={25} />,
    },
    {
      title: "Complete Web Development Course",
      institution: "Programming Hero",
      year: "2024",
      icon: <FaCode className="text-red-500" size={25} />,
    },
    {
      title: "Alim (HSC)",
      institution:
        "Tamirul Ummah Maderasah, Insaf Garden City, Dowlotpur, Comilla",
      year: "2023",
      icon: <FaGraduationCap className="text-green-500" size={25} />,
    },
    {
      title: "Dhakil (SSC)",
      institution:
        "Tamirul Ummah Maderasah, Insaf Garden City, Dowlotpur, Comilla",
      year: "2021",
      icon: <FaSchool className="text-blue-500" size={25} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-10">
          My Educational Journey
        </h1>
        <div className="relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between mb-10 ${
                index % 2 === 0
                  ? "lg:flex-row-reverse flex-col"
                  : "lg:flex-row flex-col"
              }`}
            >
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <div className="bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold">
                    {item.title} - {item.year}
                  </h2>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/12 flex justify-center mb-4 lg:mb-0">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div className="w-1 bg-primary h-20 mx-auto hidden lg:block"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationJourney;
