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
    <div className="min-h-screen animationTimeline p-5">
      <div className="max-w-4xl mx-auto  animationTimeline rounded-lg p-8">
        <h1 className="text-3xl animationTimeline font-bold text-center mb-10">
          My Educational Journey
        </h1>
        <div className="relative animationTimeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center animationTimeline justify-between mb-10 ${
                index % 2 === 0
                  ? "lg:flex-row-reverse flex-col"
                  : "lg:flex-row flex-col"
              }`}
            >
              <div className="w-full animationTimeline lg:w-1/2 mb-4 lg:mb-0">
                <div className="bg-gray-200 p-4 animationTimeline rounded-lg shadow-lg hover:bg-indigo-300 hover:text-gray-700 transition-all duration-300 ease-in-out">
                  <h2 className="text-xl animationTimeline font-semibold">
                    {item.title} - {item.year}
                  </h2>
                  <p className="text-gray-600 animationTimeline">
                    {item.institution}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/12 animationTimeline flex justify-center mb-4 lg:mb-0">
                <div className="relative">
                  <div className="w-10 h-10 animationTimeline rounded-full bg-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div className="w-1 bg-primary animationTimeline h-20 mx-auto hidden lg:block"></div>
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
