import React from "react";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  );
};

export default App;
