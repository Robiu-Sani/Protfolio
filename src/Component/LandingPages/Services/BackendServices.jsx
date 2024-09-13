import { FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import backendImage from "../../../images/fresh.webp";

export default function BackendServices() {
  return (
    <section className=" py-12">
      <div className="Container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Backend Services
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={backendImage}
              alt="Frontend Services"
              className="max-w-full  h-48  mb-6 lg:mb-0"
            />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Powering Your Applications with Robust Backend Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Our backend services ensure that your applications are supported
              by secure and scalable server-side technology.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                <FaServer className="inline-block text-red-500" /> Server
                Management
              </li>
              <li>
                <FaDatabase className="inline-block text-red-500" /> Database
                Design
              </li>
              <li>
                <FaCloud className="inline-block text-red-500" /> Cloud
                Integration
              </li>
            </ul>
            <div className="text-gray-800">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-gray-600">APIs Developed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}