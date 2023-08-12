import { useState } from "react";
import Digiart from "../gallery/Digiart";
import Oilpastels from "../gallery/Oilpastels";
import Watercolor from "../gallery/Watercolor";

const ArtGallery = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-[90vh]">
      <p className="font-extrabold text-4xl text-center mt-[5rem]">Gallery</p>
      <div className="flex flex-row justify-center mt-12 gap-[100px]">
        <a
          onClick={() => handleTab("tab1")}
          className={
            activeTab === "tab1"
              ? "font-extrabold hover:cursor-pointer"
              : "hover:font-extrabold cursor-pointer "
          }
        >
          Oil pastels
        </a>
        <a
          onClick={() => handleTab("tab2")}
          className={
            activeTab === "tab2"
              ? "font-extrabold hover:cursor-pointer"
              : "hover:font-extrabold cursor-pointer"
          }
        >
          Watercolors
        </a>
        <a
          onClick={() => handleTab("tab3")}
          className={
            activeTab === "tab3"
              ? "font-extrabold hover:cursor-pointer"
              : "hover:font-extrabold cursor-pointer"
          }
        >
          Digital arts
        </a>
      </div>
      <hr className="mt-5 w-[50%] h-[2px] mx-auto bg-gray-800" />
      <div className="mt-10 border-[0.03rem] border-slate-500 w-[500px] h-[400px] mx-auto">
        {activeTab === "tab1" ? (
          <Oilpastels />
        ) : activeTab === "tab2" ? (
          <Watercolor />
        ) : (
          <Digiart />
        )}
      </div>
    </div>
  );
};

export default ArtGallery;
