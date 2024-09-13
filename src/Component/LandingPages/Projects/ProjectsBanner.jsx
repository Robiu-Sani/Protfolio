import image from "../../../images/aboutinfo.png";

export default function ProjectsBanner() {
  return (
    <div className="w-full reloadanimations pt-16 pb-10 px-3 flex justify-center items-center">
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
          <p className="max-w-[550px] JosefinSans">
            An interactive any kind of platform built with the MERN stack
            (MongoDB, Express.js, React, Node.js) that allows users to browse,
            filter, and sort products. The site includes user authentication, a
            secure payment gateway, and an admin dashboard for product
            management. The frontend is highly responsive, ensuring a seamless
            experience across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}
