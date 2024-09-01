import { GiRead } from "react-icons/gi";
import image from "../../../images/profile.png";
import Button from "../../ShaireComponent/Button";

export default function AboutSection() {
  return (
    <div className="w-full pb-8 pt-3">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="w-full px-5 md:px-[70px] flex justify-center items-center">
          <div
            className="border p-2"
            style={{ boxShadow: "2px 2px 6px 0px #bfbfbf" }}
          >
            <div
              className="border p-2"
              style={{ boxShadow: "inset 1px 1px 11px 0px #cacaca" }}
            >
              <img
                src={image}
                alt="Robius Sani (Mubarok)"
                className="w-full"
                style={{ boxShadow: "2px 2px 6px 0px #bfbfbf" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full p-2 flex justify-center flex-col gap-5 items-center">
          <h2 className="text-3xl JosefinSans text-gray-500 font-bold w-full">
            About Me
          </h2>
          <p className="JosefinSans">
            Hello! I'm Robius Sani, a Junior MERN Stack Developer with a passion
            for building dynamic and scalable web applications. I specialize in
            working with the MERN stack, which includes MongoDB, Express.js,
            React, and Node.js. My journey in web development has equipped me
            with a solid understanding of both frontend and backend
            technologies, allowing me to create full-stack applications that
            deliver seamless user experiences.
          </p>
          <p className="JosefinSans">
            I have a strong foundation in HTML, CSS, and JavaScript, and I'm
            proficient in using React to build responsive, interactive
            interfaces. On the backend, I work with Node.js and Express.js to
            develop robust APIs and manage server-side logic. I also leverage
            MongoDB for database management, ensuring that data is efficiently
            stored and retrieved.
          </p>
          <p className="JosefinSans">
            As a developer, I am committed to writing clean, efficient code and
            continually learning new tools and technologies to improve my skill
            set. I enjoy working in collaborative environments, where I can
            contribute to meaningful projects and learn from others...
          </p>
          <div className="w-full flex justify-start">
            <Button
              icon={<GiRead />}
              path="/about"
              text="Read more..."
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
