import { TiDownloadOutline } from "react-icons/ti";
import image from "../../../images/aboutinfo.png";
import Button from "../../ShaireComponent/Button";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Banner() {
  return (
    <div className="container mb-10 relative mx-auto mt-16 bg-gray-200 rounded-md py-20 px-3 grid flex-col-reverse grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="flex w-full flex-col gap-2 justify-center items-center md:items-start">
        <div className="text-center md:text-left px-4 md:px-10 ">
          <h3 className="text-gray-500 font-bold text-lg md:text-xl ">
            Hi! It's
          </h3>
          <h1 className="text-gray-500 font-extrabold text-4xl md:text-[70px]  mt-4">
            ROBIUS SANI
          </h1>
          <h2 className="text-gray-500 text-2xl md:text-3xl font-semibold mt-2">
            MERN Stack Web Developer.
          </h2>
        </div>
        <div className="w-full px-2 md:pl-4 ml-0 md:ml-10 py-2 mt-4 relative border-0 md:border-l-2 border-gray-500">
          <p>
            Hi, I'm Robius Sani, a Junior MERN Stack Web Developer. I create
            responsive, scalable, and efficient web applications using MongoDB,
            Express.js, React, and Node.js. Let’s collaborate to bring your
            vision to life.
          </p>
          <div className="absolute hidden md:block w-4 h-4 bg-gray-200 rounded-full border-[2px] border-gray-500 top-0 -left-[9px]"></div>
        </div>
        <div className=" flex flex-wrap justify-center md:justify-start pl-3 md:pl-12 w-full items-center gap-5 mt-5">
          <div className="overflow-hidden   shadow-md rounded-md">
            <Button
              path={"/resume"}
              icon={<TiDownloadOutline />}
              text=" Resume"
            ></Button>
          </div>
          <Link
            to="/contact"
            className="px-5  py-1 border bg-white flex justify-center items-center gap-5 rounded-md shadow-md"
          >
            <span className="JosefinSans">Contact</span>
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={image} alt="banner image" className="max-w-[350px] skew" />
      </div>
      <div className="absolute right-5 bottom-5 flex justify-center items-center gap-3">
        <a
          href="https://www.facebook.com/robiussani.mubarok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="text-3xl text-gray-600 hover:text-blue-600" />
        </a>
        <a
          href="https://x.com/RobiusS4690"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-3xl text-gray-600 hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/robius-sani-mobarok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-700" />
        </a>
        <a
          href="https://wa.me/+8801617688805"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsappSquare className="text-3xl text-gray-600 hover:text-green-500" />
        </a>
        <a
          href="https://github.com/Robiu-Sani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="text-3xl text-gray-600 hover:text-black" />
        </a>
      </div>
    </div>
  );
}
