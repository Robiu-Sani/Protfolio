import { SiCodeproject } from "react-icons/si";
import Button from "../../ShaireComponent/Button";
import ProjectCard from "../../ShaireComponent/ProjectCard";
import imagep1 from "../../../images/p1.png";
import imagep2 from "../../../images/p21.png";
import imagep3 from "../../../images/p3.png";
import PreactiesPages from "./PreactiesPages";

const projectsData = [
  {
    image1: imagep1,
    ProjectName: "Pay-Path",
    description:
      "PayPath is a MFS comprehensive payment processing application designed to simplify the management of transactions, user accounts, and agent activities. It offers a secure platform for cash-in operations, money transfers, and detailed transaction history tracking.",
    technology: [
      "React",
      "CSS3",
      "TailwindCSS",
      "Javascript",
      "MongoDB",
      "ExpressJS",
    ],
    liveLink: "https://magenta-tapioca-a374bb.netlify.app/",
    gitHub: "https://github.com/Robiu-Sani/Pay-Path",
  },
  {
    image1: imagep2,
    ProjectName: "LUX-TOWER",
    description:
      "This website provides a comprehensive solution for managing a single building, making it easier for users, members, and administrators to handle all aspects of building management efficiently.",
    technology: [
      "React",
      "CSS3",
      "TailwindCSS",
      "Javascript",
      "MongoDB",
      "ExpressJS",
      "firebase",
    ],
    liveLink: "https://fluffy-gaufre-5d80b4.netlify.app/",
    gitHub: "https://github.com/Robiu-Sani/Luxtower-project-12",
  },
  {
    image1: imagep3,
    ProjectName: "ProductFlow",
    description:
      "ProductFlow is a responsive e-commerce app built with React, Firebase, and Tailwind CSS, offering an intuitive interface for browsing, adding products to the cart, and seamless checkout.",
    technology: [
      "React",
      "CSS3",
      "TailwindCSS",
      "Javascript",
      "MongoDB",
      "ExpressJS",
      "firebase",
    ],
    liveLink: "https://dynamic-lokum-79663f.netlify.app/",
    gitHub: "https://github.com/Robiu-Sani/ProductFlow-client-site",
  },
];

export default function ProjectSection() {
  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto">
        <h2 className="text-4xl JosefinSans font-bold text-center text-gray-800 mb-8">
          My Complete Projects
        </h2>
        <div className="w-full px-2 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto  justify-center items-center">
          {/* ------------------ there will have projects card -------------  */}
          <ProjectCard data={projectsData[0]}></ProjectCard>
          <ProjectCard data={projectsData[1]}></ProjectCard>
          <ProjectCard data={projectsData[2]}></ProjectCard>
          <span></span>
        </div>
        <PreactiesPages></PreactiesPages>
        <div className="w-full flex justify-center items-center pt-7">
          <Button
            icon={<SiCodeproject />}
            path={"/project"}
            text="See All Projects"
          />
        </div>
      </div>
    </div>
  );
}
