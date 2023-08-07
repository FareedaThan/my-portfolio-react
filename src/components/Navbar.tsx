import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
interface ChildProps {
  children: ReactNode;
}

const Navbar = ({ children }: ChildProps) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <header className="z-50">
        <div className="flex flex-row justify-between items-center mx-auto  w-10/12">
          <NavLink to="/" className="font-extrabold">
            FAREEDA.CO
          </NavLink>

          {path === "/artgallery" ? (
            <nav className="flex flex-row gap-10">
              <NavLink
                to="/"
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Home
              </NavLink>
              <NavLink
                to="/artgallery"
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Art Gallery
              </NavLink>
            </nav>
          ) : (
            <nav className="flex flex-row gap-10">
              <Link
                to="project"
                spy={true}
                smooth={true}
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Experiences
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Education
              </Link>
              <NavLink
                to="/artgallery"
                className="transition duration-300 hover:scale-105 hover:font-bold cursor-pointer"
              >
                Art Gallery
              </NavLink>
            </nav>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
