import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/Robiu-Sani"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-200 hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/robius-sani/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-200 hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/RobiusS4690"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-200 hover:text-white"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="mailto:hafazrobiussani@gmail.com"
            className="mx-2 text-gray-200 hover:text-white"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Robius Sani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
