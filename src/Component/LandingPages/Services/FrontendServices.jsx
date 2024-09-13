import { FaCode, FaReact, FaCss3Alt } from "react-icons/fa";
import frontendImage from "../../../images/f.png"; // Update the path to your image

const FrontendServices = () => {
  return (
    <section className=" py-12">
      <div className="Container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          Frontend Services
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={frontendImage}
              alt="Frontend Services"
              className="max-w-full animationTimeline h-48  mb-6 lg:mb-0"
            />
          </div>
          <div className="w-full animationTimeline">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Transforming Designs into Beautiful Websites
            </h2>
            <p className="text-gray-600 mb-4">
              We offer comprehensive frontend development services to create
              stunning and responsive websites.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                <FaCode className="inline-block text-blue-500" /> HTML, CSS,
                JavaScript
              </li>
              <li>
                <FaReact className="inline-block text-blue-500" /> React &
                Next.js
              </li>
              <li>
                <FaCss3Alt className="inline-block text-blue-500" /> Tailwind
                CSS & Styled Components
              </li>
            </ul>
            <div className="text-gray-800">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendServices;
