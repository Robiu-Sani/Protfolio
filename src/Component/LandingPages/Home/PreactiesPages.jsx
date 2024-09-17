import image1 from "../../../images/b1.png";
import image2 from "../../../images/b2.png";
import image3 from "../../../images/b3.png";
import image4 from "../../../images/b4.png";
import PreactiesCard from "../../ShaireComponent/PreactiesCard";

export default function PreactiesPages() {
  const data = [
    {
      name: "Loader 3",
      image: image1,
      LiveLink: "https://robiu-sani.github.io/loader-3/",
      GitHub: "https://github.com/Robiu-Sani/loader-3",
    },
    {
      name: "Loader 2",
      image: image2,
      LiveLink: "https://robiu-sani.github.io/loader-2/",
      GitHub: "https://github.com/Robiu-Sani/loader-2",
    },
    {
      name: "Icon Carcle",
      image: image3,
      LiveLink: "https://robiu-sani.github.io/Css-icon-cercel/",
      GitHub: "https://github.com/Robiu-Sani/Css-icon-cercel",
    },
    {
      name: "Vustom Review",
      image: image4,
      LiveLink: "https://robiu-sani.github.io/Customer-Review/",
      GitHub: "https://github.com/Robiu-Sani/Customer-Review",
    },
  ];
  return (
    <div className="w-full animationTimeline py-10 ">
      <h2 className="text-2xl animationTimeline JosefinSans font-bold text-center text-gray-800 mb-8">
        My Preactiesing Pages
      </h2>
      <div className="container mx-auto animationTimeline px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((item, idx) => (
          <PreactiesCard data={item} key={idx}></PreactiesCard>
        ))}
      </div>
    </div>
  );
}
