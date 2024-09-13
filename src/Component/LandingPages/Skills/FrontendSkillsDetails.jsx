import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const FrontendSkillsDetails = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600 text-3xl" />,
      details: [
        "Figma to HTML",
        "Document to HTML",
        "Image to HTML",
        "Responsive Layouts",
      ],
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600 text-3xl" />,
      details: [
        "Flexbox & Grid",
        "Animations & Transitions",
        "Tailwind CSS",
        "Custom Themes",
      ],
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 text-3xl" />,
      details: [
        "ES6+ Features",
        "DOM Manipulation",
        "Fetch API",
        "Event Handling",
      ],
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-500 text-3xl" />,
      details: [
        "Component-based Architecture",
        "State Management",
        "React Router",
        "Hooks",
      ],
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-blue-500 text-3xl" />,
      details: [
        "Design to Code",
        "Prototyping",
        "UI Design",
        "Collaborative Design",
      ],
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 text-3xl" />,
      details: [
        "Server-side Rendering",
        "Static Site Generation",
        "API Routes",
        "TypeScript Integration",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frontend Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
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

export default FrontendSkillsDetails;
