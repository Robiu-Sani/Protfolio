import { SiMongodb, SiTailwindcss } from "react-icons/si";
import image from "../images/logo.png";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCss3,
} from "react-icons/fa";
export default function Test() {
  return (
    <div className="w-full container grid grid-cols-2 gap-5 mx-auto min-h-screen  justify-center items-center">
      <div className="w-full p-1 border grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md">
        <div className="w-full flex max-h-[300px] justify-center items-center overflow-hidden">
          <div className="min-w-[170%] min-h-[150%] projectRotate bg-red-400 grid grid-cols-3 gap-1">
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-full p-5 text-gray-600 flex flex-col justify-between transition-shadow ">
          <h2 className="text-2xl JosefinSans font-bold text-gray-700 mb-2">
            Awesome Project
          </h2>
          <p className="text-gray-500 JosefinSans text-sm mb-4">
            This is a brief description of the project. It showcases my skills
            in frontend and backend development, focusing on creating seamless
            user experiences. <hr />
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaReact /> <small className="font-sans">React.js</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaCss3 /> <small className="font-sans">CSS</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <SiTailwindcss />{" "}
              <small className="font-sans">Tailwind CSS</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaNodeJs /> <small className="font-sans">Express.js</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <SiMongodb /> <small className="font-sans">MongoDB</small>
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center JosefinSans text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="https://your-live-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 JosefinSans hover:text-gray-800 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Site
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-1 border grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md">
        <div className="w-full flex max-h-[300px] justify-center items-center overflow-hidden">
          <div className="min-w-[170%] min-h-[150%] projectRotate bg-red-400 grid grid-cols-3 gap-1">
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={image} alt="" className="w-full" />
              <img src={image} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-full p-5 text-gray-600 flex flex-col justify-between transition-shadow ">
          <h2 className="text-2xl JosefinSans font-bold text-gray-700 mb-2">
            Awesome Project
          </h2>
          <p className="text-gray-500 JosefinSans text-sm mb-4">
            This is a brief description of the project. It showcases my skills
            in frontend and backend development, focusing on creating seamless
            user experiences. <hr />
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaReact /> <small className="font-sans">React.js</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaCss3 /> <small className="font-sans">CSS</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <SiTailwindcss />{" "}
              <small className="font-sans">Tailwind CSS</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <FaNodeJs /> <small className="font-sans">Express.js</small>
            </span>
            <span className="flex justify-center items-center gap-1 p-1 px-2 rounded bg-gray-200 text-sm">
              <SiMongodb /> <small className="font-sans">MongoDB</small>
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center JosefinSans text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="https://your-live-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 JosefinSans hover:text-gray-800 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
