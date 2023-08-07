import Banner from "../components/Banner";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <div className="min-h-[90vh]">
      <Banner />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
