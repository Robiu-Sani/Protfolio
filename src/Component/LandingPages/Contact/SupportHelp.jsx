import { FaClock, FaHeadset, FaQuestionCircle } from "react-icons/fa";

const SupportHelp = () => {
  return (
    <section className="min-h-screen animationTimeline  py-12">
      <div className="container animationTimeline mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-12">
          Support & Help
        </h1>

        {/* Support Sections */}
        <div className="grid grid-cols-1 animationTimeline md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Live Support */}
          <div className="bg-gray-100 animationTimeline p-6 shadow-md rounded-lg text-center">
            <FaHeadset className="text-blue-600 animationTimeline text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold animationTimeline text-gray-800 mb-2">
              Live Support
            </h3>
            <p className="text-gray-600 animationTimeline">
              Get instant help from our team through live chat. Available 24/7.
            </p>
          </div>

          {/* Operating Hours */}
          <div className="bg-gray-100 animationTimeline p-6 shadow-md rounded-lg text-center">
            <FaClock className="text-blue-600 animationTimeline text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold animationTimeline text-gray-800 mb-2">
              Operating Hours
            </h3>
            <p className="text-gray-600 animationTimeline">
              Monday to Friday: 9 AM - 6 PM <br /> Saturday: 10 AM - 4 PM
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-gray-100 animationTimeline p-6 shadow-md rounded-lg text-center">
            <FaQuestionCircle className="text-blue-600 animationTimeline text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold animationTimeline text-gray-800 mb-2">
              FAQs
            </h3>
            <p className="text-gray-600 animationTimeline">
              Find answers to common questions in our FAQ section.
            </p>
          </div>
        </div>

        {/* Contact Info for Support */}
        <div className="bg-gray-100 animationTimeline p-8 shadow-md rounded-lg">
          <h2 className="text-3xl animationTimeline font-bold text-gray-800 mb-6">
            Need More Help?
          </h2>
          <p className="text-gray-600 animationTimeline mb-6">
            If you have any additional questions or need personalized
            assistance, feel free to contact us using the information below:
          </p>
          <ul className="list-disc animationTimeline list-inside text-gray-600">
            <li className="animationTimeline">Phone: 01617688805</li>
            <li className="animationTimeline">
              Email: support@professional.com
            </li>
            <li className="animationTimeline">Address: Professional System</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportHelp;
