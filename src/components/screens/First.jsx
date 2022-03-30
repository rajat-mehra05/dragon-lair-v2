import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import dragon from "../../assets/gif/dragon2.gif";
import dragonText from "../../assets/gif/dragontext.gif";
import staticDragon from "../../assets/images/dragonFireless.png";

const First = ({ currentView }) => {
  const [isStaticDragon, setIsStaticDragon] = useState(false);
  const controls = useAnimation();
  const btnControls = useAnimation();

  useEffect(() => {
    if (currentView === 1) {
      btnControls.start({
        opacity: 1,
        scaleX: 1,
        x: -108,
        y: -112,
        transition: {
          delay: 1.5,
          duration: 2,
        },
      });
    }

    if (currentView === 2) {
      btnControls.start({
        opacity: 0,
        scaleX: 3,
        y: -112,
        x: "-150%",
        transition: {
          duration: 2,
          delay: 1.5,
        },
      });
    }
  }, [currentView, btnControls]);

  useEffect(() => {
    if (currentView === 2) {
      controls.start({
        y: "-200px",
        x: "-450px",
        scale: 0.5,
      });

      setTimeout(() => {
        setIsStaticDragon(true);
      }, 2000);
    }
    if (currentView === 1) {
      controls.start({
        y: 0,
        x: 0,
        scale: 1,
      });

      setIsStaticDragon(false);
    }
  }, [currentView, controls]);

  return (
    <div className="flex h-full w-full absolute z-[1] text-white justify-center items-center mix-blend-screen">
      <div className="flex flex-col items-end">
        <motion.div
          initial={{
            scale: 1,
            x: 0,
            y: 0,
          }}
          animate={controls}
          transition={{
            duration: 2,
          }}
          className="flex gap-4 items-center"
        >
          <img
            src={isStaticDragon ? staticDragon : dragon}
            alt="dragon"
            className={`${currentView !== 1 ? "w-60" : ""}`}
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
          >
            <img src={dragonText} alt="Dragon's Lair" className="w-96" />
          </motion.div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: -108, y: -112 }}
          animate={btnControls}
          className="bg-gradient-to-br from-yellow-400 via-yellow-600 to-[#ef660a] px-12 py-2 rounded-lg max-w-max text-white"
        >
          BUY ON UNISWAP
        </motion.button>
      </div>
    </div>
  );
};

export default First;
