import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props) {
  const {
    image1,
    image2,
    ProjectName,
    description,
    technology,
    liveLink,
    gitHub,
  } = props.data;

  return (
    <div className="w-full border shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden">
      <div className="w-full grid grid-cols-1 min-h-[200px]">
        <img
          src={image1}
          alt={`${ProjectName} screenshot 1`}
          className="w-full h-full object-cover"
        />
        <img
          src={image2}
          alt={`${ProjectName} screenshot 2`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-between p-4">
        <h1 className="text-2xl font-bold JosefinSans mb-2">{ProjectName}</h1>
        <p className="text-sm JosefinSans mb-4">{description}</p>
        <hr className="mb-3" />
        <div className="w-full flex flex-wrap gap-2 mb-4">
          {technology.map((item, idx) => (
            <span
              className="text-sm p-1 px-2 rounded-md bg-gray-200 flex items-center"
              key={idx}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="w-full flex justify-between items-center">
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <FaGithub className="mr-2" /> GitHub Repo
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-green-600 hover:text-green-800"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Link
          </a>
        </div>
      </div>
    </div>
  );
}
