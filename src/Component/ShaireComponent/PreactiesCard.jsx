import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PreactiesCard({ data }) {
  const { name, image, LiveLink, GitHub } = data;

  return (
    <div className="w-full border overflow-hidden rounded-md relative shadow-md min-h-[100px] group">
      <img src={image} alt={name} className="w-full" />
      <div className="w-full bg-gray-200 flex justify-center items-center p-1">
        <small className="font-bold">{name}</small>
      </div>

      {/* Hidden div with buttons, visible on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-white h-full bg-opacity-80 flex justify-center gap-5 items-center p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <a
          href={GitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
        <a
          href={LiveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-green-600 hover:text-green-800"
        >
          <FaExternalLinkAlt className="mr-1" /> Live Link
        </a>
      </div>
    </div>
  );
}
