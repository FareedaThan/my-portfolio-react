interface IProject {
  name: string;
  detail: string;
  img: string;
  github: string;
  demo?: string;
}

const ProjectCard = (props: IProject) => {
  return (
    <>
      <div className="flex flex-row gap-8">
        <img src={props.img} className="w-[30%] h-[10rem]" />

        <div className="flex flex-col w-[60%]">
          <p className="text-left relative group">
            <a
              href={props.demo}
              className=" font-semibold text-2xl transition duration-300 hover:opacity-80 cursor-pointer"
            >
              {props.name}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-[60%]"></span>
          </p>

          <p className="text-left mt-2">{props.detail}</p>
          <a
            href={props.github}
            target="_blank"
            className="mt-3 ml-[100%] w-[35px] transition duration-300 hover:scale-125 cursor-pointer"
          >
            <img src="./github.svg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
