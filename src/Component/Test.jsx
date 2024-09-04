import image from "../images/p1.png";

export default function Test() {
  return (
    <div className="w-full">
      <div className="container grid grid-cols-4 gap-5 mx-auto py-10">
        <div className="w-full border overflow-hidden rounded-md relative shadow-md min-h-[100px]">
          <img src={image} alt="" />
          <div className="w-full bg-gray-200 flex justify-center items-center p-1">
            <small className="font-bold">Contact Form</small>
          </div>
        </div>
      </div>
    </div>
  );
}
