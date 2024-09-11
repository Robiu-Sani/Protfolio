import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
  // FaGithub,
  FaAngular,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { GiTargetArrows } from "react-icons/gi";

export default function SkillesSection() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-2">
        <h2 className="text-4xl JosefinSans font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
          {/* HTML */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaHtml5 className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              HTML
            </h3>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaCss3Alt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              CSS
            </h3>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaJs className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              JavaScript (ES6)
            </h3>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaPython className="text-5xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Python
            </h3>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiTailwindcss className="text-5xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Tailwind CSS
            </h3>
          </div>

          {/* React JS */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaReact className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              React JS
            </h3>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiNextdotjs className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Next.js
            </h3>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiExpress className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Express.js
            </h3>
          </div>

          {/* Django */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiDjango className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Django
            </h3>
          </div>

          {/* Firebase */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiFirebase className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Firebase
            </h3>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiMongodb className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              MongoDB
            </h3>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaGit className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Git(GitHub)
            </h3>
          </div>

          {/* GitHub */}
          {/* <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaGithub className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">GitHub</h3>
          </div> */}
        </div>

        <h2 className="text-4xl JosefinSans font-bold text-center text-gray-800 mt-16 mb-8">
          Next Target to Learn
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* TypeScript */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiTypescript className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              TypeScript
            </h3>
          </div>

          {/* Redux */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <SiRedux className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Redux
            </h3>
          </div>

          {/* Angular */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaAngular className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              Angular
            </h3>
          </div>

          {/* PHP */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaPhp className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              PHP
            </h3>
          </div>
          <span className="hidden lg:block"></span>

          {/* WordPress */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <FaWordpress className="text-5xl text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              WordPress
            </h3>
          </div>

          {/* Goal Icon */}
          <div className="flex flex-col items-center p-6 border shadow-lg rounded-lg hover:bg-blue-50">
            <GiTargetArrows className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold JosefinSans text-gray-700">
              More to Come...
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
