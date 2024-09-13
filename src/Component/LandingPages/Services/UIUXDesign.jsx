import { FaPalette, FaUserFriends } from "react-icons/fa";
import uiuxImage from "../../../images/u.webp"; // Update the path to your image

const UIUXDesign = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          UI/UX Design
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full animationTimeline">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Creating Engaging and Intuitive Experiences
            </h2>
            <p className="text-gray-600 mb-4">
              Our UI/UX design services focus on delivering exceptional user
              experiences through thoughtful design.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                <FaPalette className="inline-block text-green-500 mr-2" />{" "}
                Visual Design
              </li>
              <li>
                <FaUserFriends className="inline-block text-green-500 mr-2" />{" "}
                User Research & Testing
              </li>
              <li>
                <FaPalette className="inline-block text-green-500 mr-2" />{" "}
                Wireframing & Prototyping
              </li>
            </ul>
            <div className="text-gray-800">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-gray-600">Designs Delivered</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={uiuxImage}
              alt="UI/UX Design"
              className="max-w-full animationTimeline h-64 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;
