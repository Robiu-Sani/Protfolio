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
      </div>
    </div>
  );
}
