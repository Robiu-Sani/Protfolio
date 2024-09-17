import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props) {
  const { image1, ProjectName, description, technology, liveLink, gitHub } =
    props.data;

  // State to track if the full description is displayed
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the description view
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate the description to 10 words
  const truncatedDescription = description.split(" ").slice(0, 10).join(" ");

  return (
    <div className="w-full animationTimeline border shadow-md rounded-md grid grid-cols-1 gap-3 overflow-hidden">
      <div className="w-full animationTimeline grid grid-cols-1">
        <img
          src={image1}
          alt={`${ProjectName} screenshot 1`}
          className="w-full animationTimeline object-cover"
        />
      </div>
      <div className="w-full animationTimeline flex flex-col justify-between p-2">
        <h1 className="text-xl animationTimeline font-bold JosefinSans mb-2">
          {ProjectName}
        </h1>
        <p className="text-sm animationTimeline JosefinSans mb-4">
          <strong>Description : </strong>
          {isExpanded ? description : truncatedDescription + "... "}
          <button
            onClick={toggleDescription}
            className="text-blue-600 animationTimeline hover:underline"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </p>
        <hr className="mb-3" />
        <div className="w-full flex animationTimeline flex-wrap gap-1 mb-4">
          <strong className="text-[11px] animationTimeline">
            {" "}
            Technology :{" "}
          </strong>
          {technology.map((item, idx) => (
            <span
              className="text-[10px] p-0 px-2 animationTimeline rounded-sm bg-gray-200 flex items-center"
              key={idx}
            >
              {item}
            </span>
          ))}
        </div>
        <hr />
        <div className="w-full mt-2 flex animationTimeline justify-between items-center">
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center animationTimeline text-sm text-blue-600 hover:text-blue-800"
          >
            <FaGithub className="mr-2 animationTimeline" /> GitHub Repo
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center animationTimeline text-sm text-green-600 hover:text-green-800"
          >
            <FaExternalLinkAlt className="mr-2 animationTimeline" /> Live Link
          </a>
        </div>
      </div>
    </div>
  );
}
