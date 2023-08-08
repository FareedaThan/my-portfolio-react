const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col mx-auto gap-10 w-8/12 mt-[7rem]"
    >
      <p className="font-extrabold text-4xl text-center pb-5 border-black border-b-[1px] ">
        Education
      </p>
      <div className="flex flex-col gap-9">
        <div className="items-start flex flex-col">
          <p className="font-extrabold text-xl">
            10-week Full-Stack JavaScript Immersive Bootcamp
          </p>
          <p className="font-semibold text-lg">
            Cleverse Academy, Thailand | 2023
          </p>
        </div>
        <div className="items-start flex flex-col">
          <p className="font-extrabold text-xl">Master of Data Analytics</p>
          <p className="font-semibold text-lg">
            Queensland University of Technology (QUT), Australia | 2019 - 2021
          </p>
          <ul className="text-left pl-[5%]" style={{ listStyleType: "circle" }}>
            <li>
              QUT Science and Engineering (SEF) International Merit Scholarship
              recipient
            </li>
            <li>
              Featured courses: Object-Oriented Programming, Statistical Data
              Analysis, Data mining, Machine learning, Text, Web, And Media
              Analytics.
            </li>
          </ul>
        </div>
        <div className="items-start flex flex-col">
          <p className="font-extrabold text-xl">
            Bachelor of Chemical Engineering (Second-class honours)
          </p>
          <p className="font-semibold text-lg text-left">
            King Mongkut's University of Technology Thonburi (KMUTT), Thailand |
            2012 - 2016
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
