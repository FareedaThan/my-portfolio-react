const Banner = () => {
  return (
    <>
      <div className="flex flex-row mx-auto items-center gap-10 w-8/12 mt-[10rem]">
        <div className="flex flex-col items-start gap-3 w-[35rem]">
          <p className="font-extrabold text-4xl ">FAREEDA THAITHANAN</p>
          <p className="font-bold text-2xl">Aspiring Front-end Developer</p>
          <p className="font-thin text-left">
            A full-stack bootcamp graduate with a background in Data Analytics
            pursuing a career in Web Application Development. Confident in new
            skills acquisition as well as collaborating with cross-functional
            teams. Currently, looking for an opportunity to deliver top user
            experience app corresponding to business requirements.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[10rem]">
          <img src="/profile.svg" alt="a cute black cat" />
          <a
            className="btn-black"
            target="_blank"
            href="https://drive.google.com/file/d/1WMjbQbubGbtqB8cqxEZ_l9usKirzvwCU/view?usp=sharing"
          >
            My Resume
          </a>
          <div className="flex flex-row justify-center gap-4">
            <a href="https://github.com/FareedaThan" target="_blank">
              <img
                src="/github.svg"
                alt="github"
                className="w-[35px] transition duration-300 hover:scale-125 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fareeda-thaithanan-959751159/"
              target="_blank"
            >
              <img
                src="/linkedin.svg"
                alt="linkedIn"
                className="w-[35px] transition duration-300 hover:scale-125 cursor-pointer"
              />
            </a>
            <a href="mailto:fareedathan@gmail.com" target="_blank">
              <img
                src="/mail.svg"
                alt="mail"
                className="w-[33px] transition duration-300 hover:scale-125 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
