import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-[90vh]">
      <p className="font-extrabold text-4xl text-center mt-[10rem]">Blog</p>
      <hr className="mt-5 w-[50%] h-[2px] mx-auto bg-gray-800" />
      <div className="flex flex-wrap gap-10 w-[60%] mx-auto">
        <div className="mt-10 transition duration-300 hover:scale-105">
          <NavLink
            to="/graph"
            className="text-xl border-2 border-slate-900 p-4 "
          >
            Parse CSV and Bar chart practice
          </NavLink>
        </div>
        <div className="mt-10 transition duration-300 hover:scale-105">
          <NavLink
            to="/myth"
            className="text-xl border-2 border-slate-900 p-4 "
          >
            Myth Stories
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
