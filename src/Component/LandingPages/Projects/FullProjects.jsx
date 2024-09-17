import imagep1 from "../../../images/p1.png";
import imagep2 from "../../../images/p21.png";
import imagep3 from "../../../images/p3.png";
import imagep4 from "../../../images/p4.png";
import imagep5 from "../../../images/p5.png";
import imagep6 from "../../../images/p6.png";
import imagep7 from "../../../images/p7.png";
import ProjectCard from "../../ShaireComponent/ProjectCard";

export default function FullProjects() {
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
    {
      image1: imagep5,
      ProjectName: "TutorNest",
      description:
        "Tutor Nest is dedicated to providing top-notch education services tailored to your needs.",
      technology: [
        "React",
        "CSS3",
        "TailwindCSS",
        "Javascript",
        "MongoDB",
        "ExpressJS",
        "firebase",
      ],
      liveLink: "https://amazing-concha-2bff67.netlify.app/",
      gitHub: "https://github.com/Robiu-Sani/Tutor-Nest-project-11",
    },
    {
      image1: imagep6,
      ProjectName: "Artful Brush",
      description:
        "Exploring Artistic Expression: Painting and Drawing Categories Explored from Realism to Abstract, Capturing Diverse Techniques and Creative Styles",
      technology: [
        "React",
        "CSS3",
        "TailwindCSS",
        "Javascript",
        "MongoDB",
        "ExpressJS",
        "firebase",
      ],
      liveLink: "https://classy-melba-3e3de6.netlify.app/",
      gitHub: "https://github.com/Robiu-Sani/ArtFul-Bresh-Project-10",
    },
    {
      image1: imagep4,
      ProjectName: "Haven-Ease",
      description:
        "Spacious Modern Apartment in Prime Urban Location with Top Amenities and Stylish Interiors",
      technology: ["React", "CSS3", "TailwindCSS", "Javascript", "firebase"],
      liveLink: "https://spiffy-pie-b672f0.netlify.app/",
      gitHub: "https://github.com/Robiu-Sani/Haven-Ease-project-9",
    },
    {
      image1: imagep7,
      ProjectName: "Dr Hefzur rahman",
      description:
        "An intuitive dashboard allowing users to easily upload and manage images, videos, blogs, news, quotes, and programs with dates, ensuring seamless content organization and updates.",
      technology: [
        "React",
        "CSS3",
        "TailwindCSS",
        "Javascript",
        "MongoDB",
        "ExpressJS",
        "firebase",
      ],
      liveLink: "https://dr-hefzurrahman.com/",
      gitHub: "https://github.com/Robiu-Sani/hifzur-rahman-client-site",
    },
  ];

  return (
    <div className="w-full px-2 animationTimeline container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto  justify-center items-center">
      {/* ------------------ there will have projects card -------------  */}
      {projectsData.map((item, idx) => (
        <ProjectCard key={idx} data={item}></ProjectCard>
      ))}
    </div>
  );
}
