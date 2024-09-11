import { Link } from "react-router-dom";

export default function Button({ path, icon, text }) {
  return (
    <Link
      to={path ? path : "#"}
      className="p-[2px] bg-gray-50 shadow-sm rounded-md overflow-hidden relative flex justify-center items-center"
    >
      <div className="w-[120%] absolute h-[70%] grid grid-cols-2 rotate">
        <div className="w-full bg-gray-800"></div>
        <div className="w-full bg-gray-400"></div>
      </div>
      <div className="flex justify-center rounded-md z-10 items-center gap-3 py-1 px-5 cursor-pointer bg-white">
        {icon ? icon : null}
        <span className="JosefinSans">{text ? text : null}</span>
      </div>
    </Link>
  );
}
