import { FaPalette, FaUserFriends } from "react-icons/fa";
import uiuxImage from "../../../images/u.webp"; // Update the path to your image

const UIUXDesign = () => {
  return (
    <section className="py-12 animationTimeline">
      <div className="container animationTimeline mx-auto px-6 lg:px-8">
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          UI/UX Design
        </h1>
        <div className="flex justify-between animationTimeline  md:flex-row flex-col-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 animationTimeline">
            <h2 className="text-2xl font-semibold animationTimeline text-gray-800 mb-4">
              Creating Engaging and Intuitive Experiences
            </h2>
            <p className="text-gray-600 animationTimeline mb-4">
              Our UI/UX design services focus on delivering exceptional user
              experiences through thoughtful design.
            </p>
            <ul className="list-disc list-inside animationTimeline text-gray-600 mb-4">
              <li>
                <FaPalette className="inline-block animationTimeline text-green-500 mr-2" />{" "}
                Visual Design
              </li>
              <li>
                <FaUserFriends className="inline-block animationTimeline text-green-500 mr-2" />{" "}
                User Research & Testing
              </li>
              <li>
                <FaPalette className="inline-block animationTimeline text-green-500 mr-2" />{" "}
                Wireframing & Prototyping
              </li>
            </ul>
            <div className="text-gray-800 animationTimeline">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-gray-600">Designs Delivered</p>
            </div>
          </div>
          <div className="flex justify-center animationTimeline md:w-1/2 items-center">
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
