import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface ChildProps {
  children: ReactNode;
}

const Navbar = ({ children }: ChildProps) => {
  return (
    <>
      <header className="z-50">
        <div className="flex flex-row justify-between items-center mx-auto  w-10/12">
          <NavLink to="/">FAREEDA.CO</NavLink>
          <nav className="flex flex-row gap-10">
            <div>Projects</div>
            <div>Experiences</div>
            <div>Education</div>
            <NavLink to="/artgallery">Art Gallery</NavLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
