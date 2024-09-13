import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiPython,
  SiFirebase,
} from "react-icons/si";
import Button from "../../ShaireComponent/Button";
import { GiSkills } from "react-icons/gi";

export default function SkillesSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-blue-500 text-4xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-4xl" />,
    },
    { name: "Django", icon: <SiDjango className="text-green-800 text-4xl" /> },
    { name: "Python", icon: <SiPython className="text-blue-500 text-4xl" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-7">
        <Button
          icon={<GiSkills />}
          path={"/skills"}
          text="See Skills Details"
        />
      </div>
    </section>
  );
}
