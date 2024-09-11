import image1 from "../../../images/profile.png";
import image2 from "../../../images/fresh.webp";
import image3 from "../../../images/j.png";
import { FaUser, FaRegCircle } from "react-icons/fa";

export default function AboutInformation() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-2">
        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={image1}
              alt=""
              className="max-w-[300px] border rounded-md"
            />
          </div>
          <div className="w-full">
            <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center mb-3">
              <div className="w-full flex gap-3 my-3 justify-start items-center">
                <FaUser className="mr-2" />
                <strong>Robius Sani:</strong>
              </div>
              Hello! I'm Robius Sani, a Junior MERN Stack Developer with a
              passion for building dynamic and scalable web applications. I
              specialize in working with the MERN stack, which includes MongoDB,
              Express.js, React, and Node.js. My journey in web development has
              equipped me with a solid understanding of both frontend and
              backend technologies, allowing me to create full-stack
              applications that deliver seamless user experiences.
            </p>
            <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center">
              <div className="w-full flex gap-3 my-3 justify-start items-center">
                <FaRegCircle className="mr-2" />
                <strong>Frontend Skills:</strong>
              </div>
              I have a strong foundation in HTML, CSS, and JavaScript, and I'm
              proficient in using React to build responsive, interactive
              interfaces. On the backend, I work with Node.js and Express.js to
              develop robust APIs and manage server-side logic. I also leverage
              MongoDB for database management, ensuring that data is efficiently
              stored and retrieved.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
          <div className="w-full">
            <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center mb-3">
              <div className="w-full flex gap-3 my-3 justify-start items-center">
                <FaRegCircle className="mr-2" />
                <strong>Developer Commitment:</strong>
              </div>
              As a developer, I am committed to writing clean, efficient code
              and continually learning new tools and technologies to improve my
              skill set. I enjoy working in collaborative environments, where I
              can contribute to meaningful projects and learn from others.
            </p>
            <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center mb-3">
              <div className="w-full flex gap-3 my-3 justify-start items-center">
                <FaRegCircle className="mr-2" />
                <strong>Learning Goals:</strong>
              </div>
              I'm currently expanding my knowledge in Next.js and looking
              forward to exploring other frameworks like Angular. My goal is to
              continue growing as a developer and take on new challenges that
              push the boundaries of what I can create.
            </p>
            <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center mb-3">
              <div className="w-full flex gap-3 my-3 justify-start items-center">
                <FaRegCircle className="mr-2" />
                <strong>Community Involvement:</strong>
              </div>
              When I'm not coding, I like to stay updated with the latest tech
              trends and contribute to open-source projects. I'm excited about
              the opportunities ahead and am always open to connecting with
              like-minded individuals in the tech community.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={image2}
              alt=""
              className="max-w-[300px] border rounded-md"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={image3}
              alt=""
              className="max-w-[300px] border rounded-md"
            />
          </div>
          <p className="JosefinSans text-justify flex flex-col  items-start sm:items-center">
            <div className="w-full flex gap-3 my-3 justify-start items-center">
              <FaRegCircle className="mr-2" />
              <strong>Web Development Journey:</strong>
            </div>
            My journey in web development began in 2023 when I started learning
            to code, and since then, I've been dedicated to honing my skills and
            expanding my knowledge. I completed the Complete Web Development
            Course With Jhankar Mahbub from Programming Hero! I was in Batch-9
            That was start 1 / jan / 2024, where I gained comprehensive training
            in web development. During this course, I was selected for the SCIC
            (Special Coding Intensive Course), a prestigious reward recognizing
            my dedication and performance.
          </p>
        </div>
      </div>
    </div>
  );
}
