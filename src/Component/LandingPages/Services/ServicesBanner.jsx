import image from "../../../images/aboutinfo.png";

export default function ServicesBanner() {
  return (
    <div className="w-full reloadanimations pt-16 pb-10 px-3 flex justify-center items-center">
      <div className="bg-gray-200 animationTimeline rounded-md p-5  flex-col sm:flex-row px-2 container mx-auto flex justify-center items-center gap-10">
        <img
          src={image}
          alt="about logo"
          className="w-[250px] animationTimeline mr-4 border-b sm:border-b-0 sm:border-r pr-0 pb-10 sm:pb-0 sm:pr-10 border-gray-700"
        />
        <div className="JosefinSans animationTimeline flex flex-col gap-2 text-gray-800">
          <h1 className="text-4xl font-bold animationTimeline text-gray-600 JosefinSans">
            Robius Sani
          </h1>
          <p className="max-w-[550px] animationTimeline JosefinSans">
            I offer a range of services including web development, API
            integration, responsive design, and database management. From
            creating dynamic user interfaces to building robust backend systems,
            I deliver solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
