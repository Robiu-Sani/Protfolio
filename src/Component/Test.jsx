export default function Test() {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-2">
      <div className=""></div>
      <form className="w-full p-5 border">
        <div className="w-full mb-6 border relative rounded-md p-2">
          <label className="border flex justify-center items-center gap-2 rounded-sm absolute -top-3 px-1 py-[2px] text-sm bg-white">
            {" "}
            LAvel name
          </label>
          <input
            type="text"
            placeholder="this is kj"
            className="w-full mt-2 outline-0 border-0"
          />
        </div>
        <div className="w-full mb-5 border relative rounded-md p-2">
          <label className="border rounded-sm absolute -top-3 px-1 py-[2px] text-sm bg-white">
            {" "}
            LAvel name
          </label>
          <input
            type="text"
            placeholder="this is kj"
            className="w-full mt-2 outline-0 border-0"
          />
        </div>
      </form>
    </div>
  );
}
