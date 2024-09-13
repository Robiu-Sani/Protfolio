import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full animationTimeline bg-gray-200">
      <footer className="footer grid animationTimeline grid-cols-1 sm:grid-cols-2 md:grid-cols-4 container mx-auto bg-gray-200 text-base-content p-10">
        <nav>
          <div className="flex justify-start animationTimeline items-center gap-2">
            <img src={Logo} alt="webLogo" className="rounded-full h-[40px]" />
            <h3 className="font-bold text-xl Name JosefinSans">WebWeaver</h3>
          </div>
          <p className="my-3 JosefinSans">
            My name is Robius Sani. I`m a passionate full-stack web developer
            with a keen interest in web technologies. I enjoy learning and
            applying new skills, and I`m always up for a challenge.
          </p>
        </nav>
        <nav className="animationTimeline">
          <h6 className="footer-title JosefinSans">Services</h6>
          <Link to={"/services"} className="link link-hover JosefinSans">
            Website Design
          </Link>
          <Link to={"/services"} className="link link-hover JosefinSans">
            Frontend Development{" "}
          </Link>
          <Link to={"/services"} className="link link-hover JosefinSans">
            Backend Development{" "}
          </Link>
          <Link to={"/services"} className="link link-hover JosefinSans">
            Marn-Stack Development
          </Link>
          <Link to={"/services"} className="link link-hover JosefinSans">
            Full-Stack Development
          </Link>
        </nav>
        <nav className="animationTimeline">
          <h6 className="footer-title JosefinSans">Short-cut</h6>
          <Link to={"/"} className="link link-hover JosefinSans">
            Home
          </Link>
          <Link to={"/about"} className="link link-hover JosefinSans">
            About me
          </Link>
          <Link to={"/project"} className="link link-hover JosefinSans">
            Projects
          </Link>
          <Link to={"/skills"} className="link link-hover JosefinSans">
            Skills
          </Link>
          <Link to={"/contact"} className="link link-hover JosefinSans">
            contact
          </Link>
        </nav>
        <nav className="animationTimeline">
          <h6 className="footer-title JosefinSans">OUR TEAM</h6>
          <a target="blank" href="#" className="link JosefinSans link-hover">
            Code-Biruni
          </a>
          <a target="blank" className="link JosefinSans link-hover">
            Frontend Developer
          </a>
          <a target="blank" className="link JosefinSans link-hover">
            Backend Developer
          </a>
        </nav>
      </footer>
      <footer className="footer  bg-gray-200 container mx-auto text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img src={Logo} alt="webLogo" className="rounded-full h-[40px]" />
          <p className="JosefinSans">
            Code-Biruni Industries Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              target="blank"
              href="https://www.linkedin.com/in/robius-sani-mobarok/"
            >
              <FaLinkedin className="text-2xl text-gray-800" />
            </a>
            <a target="blank" href="https://github.com/Robiu-Sani">
              <FaGithub className="text-2xl text-gray-800" />
            </a>
            <a target="blank" href="https://x.com/RobiusS4690">
              <FaSquareXTwitter className="text-2xl text-gray-800" />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/robiussani.mubarok"
            >
              <FaFacebook className="text-2xl text-gray-800" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
