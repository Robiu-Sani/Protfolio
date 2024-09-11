import image from "../../../images/aboutinfo.png";

export default function AboutBanner() {
  return (
    <div className="w-full pt-16 pb-10 px-3 flex justify-center items-center">
      <div className="bg-gray-200 rounded-md p-5  flex-col sm:flex-row px-2 container mx-auto flex justify-center items-center gap-10">
        <img
          src={image}
          alt="about logo"
          className="w-[250px] mr-4 border-b sm:border-b-0 sm:border-r pr-0 pb-10 sm:pb-0 sm:pr-10 border-gray-700"
        />
        <div className="JosefinSans flex flex-col gap-2 text-gray-800">
          <h1 className="text-4xl font-bold text-gray-600 JosefinSans">
            Robius Sani
          </h1>
          <p className="text-lg JosefinSans">
            <strong className="JosefinSans">Mobile:</strong>{" "}
            <a
              href="tel:+8801617688805"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
            >
              +88 01617688805 (WhatsApp)
            </a>{" "}
            |{" "}
            <a
              href="tel:+8801602587418"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
            >
              +88 01602587418
            </a>
          </p>
          <p className="text-lg JosefinSans">
            <strong className="JosefinSans">Email:</strong>{" "}
            <a
              href="mailto:hafazrobiussani@gmail.com"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
            >
              hafazrobiussani@gmail.com
            </a>
          </p>
          <p className="text-lg JosefinSans">
            <strong className="JosefinSans">Social:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/robius-sani-mobarok/"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Robiu-Sani"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition duration-300 JosefinSans"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="text-lg JosefinSans">
            <strong className="JosefinSans">Address:</strong>{" "}
            <span className="text-gray-600">
              Comilla, Chittagong, Bangladesh
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
