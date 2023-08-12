import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="project" className="flex flex-col mx-auto gap-10 w-8/12 mt-[7rem]">
      <p className="font-extrabold text-4xl text-center pb-5 border-black border-b-[1px] ">
        Projects
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default Projects;
