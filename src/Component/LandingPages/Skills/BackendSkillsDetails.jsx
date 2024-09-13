import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiDjango, SiFirebase } from "react-icons/si";

const BackendSkillsDetails = () => {
  const skills = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      details: [
        "Server-side Scripting",
        "API Development",
        "Async Programming",
        "Package Management",
      ],
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 text-3xl" />,
      details: ["Routing", "Middleware", "RESTful APIs", "Error Handling"],
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-3xl" />,
      details: [
        "NoSQL Database",
        "Schema Design",
        "Data Aggregation",
        "Indexing",
      ],
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500 text-3xl" />,
      details: [
        "General-purpose Programming",
        "Data Analysis",
        "Scripting",
        "Web Development with Django",
      ],
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-700 text-3xl" />,
      details: [
        "Web Framework",
        "Model-View-Template Architecture",
        "Authentication",
        "Admin Interface",
      ],
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-3xl" />,
      details: [
        "Realtime Database",
        "Authentication",
        "Hosting",
        "Cloud Functions",
      ],
    },
  ];

  return (
    <section className="min-h-screen  py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Backend Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {skill.name}
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {skill.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendSkillsDetails;
