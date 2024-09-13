import image from "../../../images/aboutinfo.png";

export default function ContactBanner() {
  return (
    <div className="w-full reloadanimations pt-16 pb-10 px-3 flex justify-center items-center">
      <div className="bg-gray-200 rounded-md p-5 flex-col sm:flex-row px-2 container mx-auto flex justify-center items-center gap-10">
        <img
          src={image}
          alt="about logo"
          className="w-[250px] mr-4 border-b sm:border-b-0 sm:border-r pr-0 pb-10 sm:pb-0 sm:pr-10 border-gray-700"
        />
        <div className="JosefinSans flex flex-col gap-2 text-gray-800">
          <h1 className="text-4xl font-bold text-gray-600 JosefinSans">
            Robius Sani
          </h1>
          <p className="max-w-[550px] JosefinSans">
            Feel free to reach out for any inquiries or collaboration
            opportunities. You can contact me via email at{" "}
            <a
              href="mailto:hafazrobiussani@gmail.com"
              className="text-blue-600"
            >
              hafazrobiussani@gmail.com
            </a>
            , or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/robius-sani-mobarok/"
              className="text-blue-600"
            >
              LinkedIn
            </a>
            . I am available for project discussions, consultations, and any
            other messages you might have.
          </p>
        </div>
      </div>
    </div>
  );
}
