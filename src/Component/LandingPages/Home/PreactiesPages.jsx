import image1 from "../../../images/e1.png";
import image2 from "../../../images/e2.png";
import image3 from "../../../images/e3.png";
import PreactiesCard from "../../ShaireComponent/PreactiesCard";

export default function PreactiesPages() {
  const data = [
    {
      name: "3D Moveing Image",
      image: image1,
      LiveLink: "https://robiu-sani.github.io/css-3d-animation-image/",
      GitHub: "https://github.com/Robiu-Sani/css-3d-animation-image/",
    },
    {
      name: "Contact Form",
      image: image2,
      LiveLink: "https://robiu-sani.github.io/Css-UniQue-Form/",
      GitHub: "https://github.com/Robiu-Sani/Css-UniQue-Form",
    },
    {
      name: "Product Card",
      image: image3,
      LiveLink: "https://robiu-sani.github.io/project-selling-card/",
      GitHub: "https://github.com/Robiu-Sani/project-selling-card",
    },
    {
      name: "3D Moveing Image",
      image: image1,
      LiveLink: "https://robiu-sani.github.io/css-3d-animation-image/",
      GitHub: "https://github.com/Robiu-Sani/css-3d-animation-image/",
    },
  ];
  return (
    <div className="w-full py-10 ">
      <h2 className="text-2xl JosefinSans font-bold text-center text-gray-800 mb-8">
        My Preactiesing Pages
      </h2>
      <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((item, idx) => (
          <PreactiesCard data={item} key={idx}></PreactiesCard>
        ))}
      </div>
    </div>
  );
}
