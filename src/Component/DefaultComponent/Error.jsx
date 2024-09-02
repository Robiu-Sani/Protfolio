import { FaRegFrown, FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Button from "../ShaireComponent/Button";

export default function Error() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-800 px-4">
      <div className="flex flex-col items-center text-center max-w-xl">
        <FaRegFrown className="text-8xl text-gray-600 mb-6 animate-bounce" />
        <h1 className="JosefinSans text-5xl font-extrabold mb-3">
          Oops! Page Not Found
        </h1>
        <p className="JosefinSans text-lg mb-6">
          We're sorry, but the page you were looking for doesn't exist. It might
          have been removed, renamed, or did not exist in the first place.
        </p>
        <Button
          icon={<FaHome className="text-gray-600" />}
          path="/"
          text="Go Back Home"
          className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300 mb-4"
        />
        <p className="JosefinSans text-md mb-6">
          If you think this is a mistake, please contact us or try one of the
          following options:
        </p>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-600" />
            <a
              href="mailto:hafazrobiussani.com"
              className="JosefinSans text-gray-800 hover:underline"
            >
              Contact Support
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-gray-600" />
            <a
              href="tel:+1234567890"
              className="JosefinSans text-gray-800 hover:underline"
            >
              Call Us: +88 01617 688805
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
