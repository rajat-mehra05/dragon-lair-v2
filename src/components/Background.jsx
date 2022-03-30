import React from "react";
import background from "../assets/gif/bg2.gif";

const Background = () => {
  return (
    <div className="w-full h-full absolute">
      <img
        className="w-full h-full object-cover"
        src={background}
        alt="background"
      />
    </div>
  );
};

export default Background;
