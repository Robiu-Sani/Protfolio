import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import Button from "../ShaireComponent/Button";
import { TiDownloadOutline } from "react-icons/ti";

export default function NavBar() {
  const navItem = (
    <>
      <li className="homeNav">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="homeNav">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="homeNav">
        <NavLink to={"/project"}>Project</NavLink>
      </li>
      <li className="homeNav">
        <NavLink to={"/skills"}>Skills</NavLink>
      </li>
      <li className="homeNav">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="navbar container mx-auto bg-[#0000]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={Logo} alt="webLogo" className="h-[40px]" />
            <h3 className="font-bold text-xl Name">WebWeaver</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Button icon={<TiDownloadOutline />} text="Resume"></Button>
        </div>
      </div>
    </div>
  );
}
