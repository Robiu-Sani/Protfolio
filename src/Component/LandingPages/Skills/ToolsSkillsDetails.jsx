import { FaGit, FaCode, FaServer } from "react-icons/fa";
// import { SiNetlify, SiVercel } from "react-icons/si";

const ToolsSkillsDetails = () => {
  const tools = [
    {
      name: "Version Control & GitHub",
      icon: <FaGit className="text-orange-500 text-3xl" />, // Using Git icon for the combined card
      details: [
        "Git Workflow",
        "Branching & Merging",
        "Commit History",
        "Repository Management",
        "Pull Requests",
      ],
    },
    {
      name: "Deployment & Hosting",
      icon: <FaServer className="text-blue-500 text-3xl" />,
      details: [
        "Netlify",
        "Vercel",
        "Continuous Deployment",
        "Environment Variables",
      ],
    },
    {
      name: "Code Editor",
      icon: <FaCode className="text-blue-600 text-3xl" />,
      details: [
        "VSCode Extensions",
        "Debugging Tools",
        "Integrated Terminal",
        "Custom Themes & Settings",
      ],
    },
  ];

  return (
    <section className="min-h-screen animationTimeline py-12">
      <div className="max-w-5xl animationTimeline mx-auto px-6 lg:px-8">
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          Tools & Technologies
        </h1>
        <div className="grid animationTimeline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-100  animationTimeline shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="mb-4">{tool.icon}</div>
              <h2 className="text-2xl font-semibold animationTimeline text-gray-800 mb-4">
                {tool.name}
              </h2>
              <ul className="list-disc list-inside animationTimeline text-gray-600">
                {tool.details.map((detail, i) => (
                  <li className="animationTimeline" key={i}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSkillsDetails;
