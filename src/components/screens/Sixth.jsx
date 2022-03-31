import { motion } from "framer-motion";
import React from "react";
import line from "../../assets/gif/line_fire.gif";

const Sixth = ({ currentView }) => {
  return (
    <div className="flex h-full text-white  pl-48 absolute z-[6] w-full items-center mix-blend-screen">
      {currentView === 6 && (
        <>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 2, delay: 1 },
            }}
            src={line}
            alt="line-fire"
          />
        </>
      )}
    </div>
  );
};

export default Sixth;
