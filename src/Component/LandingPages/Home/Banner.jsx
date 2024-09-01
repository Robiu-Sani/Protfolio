import { TiDownloadOutline } from "react-icons/ti";
import Button from "../../ShaireComponent/Button";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Banner() {
  return (
    <div className=" min-h-screen flex justify-center items-center relative">
      <div className="w-full absolute top-0 h-full flex flex-col">
        <div
          className="w-full h-[50%]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, transparent, transparent,#a6acb64f)",
          }}
        ></div>
        <div
          className="w-full h-[50%]  "
          style={{
            backgroundImage:
              "linear-gradient(180deg, #a6acb55b, transparent, transparent, transparent)",
          }}
        ></div>
      </div>
      <div className="container mx-auto z-10">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="md:ml-5 md:text-left text-center JosefinSans font-bold text-xl text-gray-500">
            <span className="text-orange-500">| </span> Jr. MERN Stack Web
            Developer
          </h3>
        </div>
        <h1 className="font-extrabold !text-gray-400 leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[130px] text-center text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px]">
          Robius Sani
        </h1>
        <p className="max-w-[1000px] JosefinSans mx-auto block sm:hidden text-sm mt-3 px-3 text-center ">
          Hi, I'm Robius Sani, a Junior MERN Stack Web Developer.
        </p>
        <p className="max-w-[1000px] JosefinSans mx-auto sm:block hidden text-sm mt-3 px-3 text-center ">
          Hi, I'm Robius Sani, a Junior MERN Stack Web Developer. I create
          responsive, scalable, and efficient web applications using MongoDB,
          Express.js, React, and Node.js. Let’s collaborate to bring your vision
          to life.
        </p>
        <div className=" flex flex-wrap justify-center items-center gap-5 mt-5">
          <div className="overflow-hidden  w-[210px] shadow-md rounded-md">
            <Button
              icon={<TiDownloadOutline />}
              text="Download Resume"
            ></Button>
          </div>
          <Link
            to="/contact"
            className="px-5  py-1 border flex justify-center items-center gap-5 rounded-md shadow-md"
          >
            <span className="JosefinSans">Contact With Me</span>
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
