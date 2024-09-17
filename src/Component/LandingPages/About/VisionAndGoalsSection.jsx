import { FaLightbulb, FaRocket, FaBullseye } from "react-icons/fa";

const VisionAndGoalsSection = () => {
  return (
    <section className="min-h-screen animationTimeline py-12">
      <div className="max-w-5xl animationTimeline mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          My Vision and Goals
        </h1>

        {/* Vision Section */}
        <div className="flex flex-col animationTimeline lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <FaLightbulb className="text-yellow-500 animationTimeline text-6xl mx-auto lg:mx-0 mb-4" />
            <h2 className="text-2xl animationTimeline font-semibold text-gray-800 text-center lg:text-left mb-4">
              My Vision
            </h2>
            <p className="text-gray-600 animationTimeline text-lg">
              My vision as a developer is to build digital products that are not
              only efficient but also accessible and intuitive. I aim to
              contribute to projects that impact people positively and help
              businesses and individuals achieve their goals by leveraging the
              power of technology.
            </p>
          </div>

          {/* Goals Section */}
          <div className="lg:w-1/2 animationTimeline">
            <FaRocket className="text-red-500 text-6xl animationTimeline mx-auto lg:mx-0 mb-4" />
            <h2 className="text-2xl animationTimeline font-semibold text-gray-800 text-center lg:text-left mb-4">
              My Goals
            </h2>
            <p className="text-gray-600 animationTimeline text-lg">
              My short-term goal is to continue mastering front-end frameworks
              like <strong>React.js</strong> and expand my knowledge of
              full-stack development by diving deeper into{" "}
              <strong>Node.js</strong> and backend technologies. In the long
              term, I aspire to lead development teams and contribute to
              innovative, large-scale projects that push the boundaries of web
              development.
            </p>
          </div>
        </div>

        {/* Future Aspirations */}
        <div className="text-center animationTimeline mt-12">
          <FaBullseye className="text-green-500  animationTimeline text-6xl mx-auto mb-6" />
          <h2 className="text-2xl animationTimeline font-semibold text-gray-800 mb-4">
            Future Aspirations
          </h2>
          <p className="text-lg animationTimeline text-gray-600 max-w-3xl mx-auto">
            I am always eager to embrace new challenges and technologies. My
            ultimate aspiration is to build a tech startup that focuses on
            creating powerful tools and platforms that empower users and change
            the way we interact with technology on a daily basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionAndGoalsSection;
