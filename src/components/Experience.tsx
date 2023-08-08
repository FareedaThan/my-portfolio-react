const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col mx-auto gap-10 w-8/12 mt-[7rem]"
    >
      <p className="font-extrabold text-4xl text-center pb-5 border-black border-b-[1px] ">
        Experiences
      </p>
      <div className="flex flex-col gap-9">
        <div className="items-start flex flex-col">
          <p className="font-extrabold text-xl">Data scientist</p>
          <p className="font-semibold text-lg">
            HIRATE TECHNICAL CORPORATION, JAPAN | 2022-2023 (1 year)
          </p>
          <ul className="text-left pl-[5%]" style={{ listStyleType: "circle" }}>
            <li>
              Joined the ICT engineering department. Providing data analytics
              and simulation services.
            </li>
            <li>
              Developed a simulation program for the traffic flow and factory
              layout planning for a new AGV(Auto-guided Vehicle) model using
              Python(Tkinter&Pygame).
            </li>
          </ul>
        </div>
        <div className="items-start flex flex-col">
          <p className="font-extrabold text-xl">
            Software development Research intern
          </p>
          <p className="font-semibold text-lg">
            Yannix (Thailand) Co. Ltd. | 2020 - 2021 (2 months)
          </p>
          <ul className="text-left pl-[5%]" style={{ listStyleType: "circle" }}>
            <li>Researched Face recognition libraries.</li>
            <li>
              Implemented Face recognition module as a feature of e-visitor
              verification machine.
            </li>
            <li>
              Trained basic computer vision software algorithms and tools e.g.
              MatchMove, Convolutional neural networks, SIFT and OpenCV.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
