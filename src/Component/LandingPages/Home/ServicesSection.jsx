import { FaCode, FaPaintBrush, FaCogs } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import Button from "../../ShaireComponent/Button";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const ServicesSection = () => {
  // const navigate = useNavigate();

  return (
    <section className="py-16 ">
      <div className="container px-2 mx-auto text-center">
        <h2 className="text-4xl animationTimeline font-bold mb-8 JosefinSans text-gray-800">
          My Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white animationTimeline shadow-lg border border-gray-200 rounded-lg p-6 transition-transform hover:scale-105">
            <FaCode className="text-5xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-2xl JosefinSans font-semibold mb-2 text-gray-700">
              Frontend Development
            </h3>
            <p className="text-gray-600 JosefinSans">
              Building responsive and high-performance user interfaces using
              React and Next.js.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white animationTimeline shadow-lg border border-gray-200 rounded-lg p-6 transition-transform hover:scale-105">
            <FaPaintBrush className="text-5xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-2xl JosefinSans font-semibold mb-2 text-gray-700">
              UI/UX Design
            </h3>
            <p className="text-gray-600 JosefinSans">
              Creating modern and user-friendly web designs with Tailwind CSS
              and responsive layouts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg animationTimeline border border-gray-200 rounded-lg p-6 transition-transform hover:scale-105">
            <FaCogs className="text-5xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-2xl animationTimeline JosefinSans font-semibold mb-2 text-gray-700">
              Backend Integration
            </h3>
            <p className="text-gray-600 animationTimeline JosefinSans">
              Integrating robust backend systems with Express.js and MongoDB for
              full-stack solutions.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="w-full animationTimeline flex justify-center items-center pt-7">
          <Button
            icon={<MdOutlineMiscellaneousServices />}
            path={"/project"}
            text="See All Services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
