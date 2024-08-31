export default function Button({ icon, text }) {
  return (
    <div className="p-[2px] bg-gray-50 shadow-sm rounded-md overflow-hidden relative flex justify-center items-center">
      <div className="w-[120%] absolute h-[70%] grid grid-cols-2 rotate">
        <div className="w-full bg-black"></div>
        <div className="w-full bg-orange-600"></div>
      </div>
      <div className="flex justify-center z-10 items-center gap-3 py-1 px-5 cursor-pointer bg-white">
        {icon ? icon : null}
        {text ? text : null}
      </div>
    </div>
  );
}
