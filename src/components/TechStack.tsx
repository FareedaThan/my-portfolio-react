import { dataStack, webStack } from "../data/TechStack";
import TechStackTag from "./TechStackTag";

const TechStack = () => {
  return (
    <div className="flex flex-row mx-auto gap-3 w-8/12 mt-[7rem]">
      <p className="text-left font-extrabold text-3xl w-[40%]">Tech Stack</p>
      <div className="flex flex-col items-start gap-10 w-[90%]">
        <div className="flex flex-col gap-5">
          <p className="text-left text-2xl">| Web development</p>
          <div className="flex flex-wrap gap-3">
            {webStack.map((tag) => (
              <TechStackTag key={tag} name={tag} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-left text-2xl">| Data Analytics & GUI</p>
          <div className="flex flex-wrap gap-3">
            {dataStack.map((tag) => (
              <TechStackTag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
