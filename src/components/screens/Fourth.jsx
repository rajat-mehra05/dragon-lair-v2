import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import dragon from "../../assets/gif/dragon2.gif";

const textVariants = {
  initial: {
    opacity: 0,
    y: "200%",
    transition: {
      duration: 1,
    },
  },
  animate: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
  exit: {
    y: "200%",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const imageVariants = {
  initial: {
    top: "100%",
    right: "144px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    top: "15%",
    right: "144px",
    scale: 1.2,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
  screenFive: {
    top: "20%",
    right: "100px",
    opacity: 1,
    scale: 3.6,
    transition: {
      duration: 2,
    },
  },
  exit: {
    scale: 6,
    right: "120px",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const Fourth = ({ currentView }) => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (currentView === 4) textControls.start("animate");

    if (currentView === 3) textControls.start("initial");
    if (currentView === 5) textControls.start("exit");
  }, [currentView, textControls]);

  useEffect(() => {
    if (currentView === 4) imageControls.start("animate");

    if (currentView === 3) imageControls.start("initial");
    if (currentView === 5) imageControls.start("screenFive");
    if (currentView === 6) imageControls.start("exit");
  }, [currentView, imageControls]);

  return (
    <div className="flex text-white h-full pl-48 absolute z-[4] w-full items-center mix-blend-screen">
      <AnimatePresence exitBeforeEnter>
        {currentView === 4 && (
          <motion.div
            variants={textVariants}
            animate={textControls}
            initial="initial"
            exit="exit"
            className="p-4 mt-16 flex flex-col w-[45%]"
          >
            <h1 className="text-[#e28529] pb-8 text-2xl"> The 3 dragons. </h1>
            <p>
              {" "}
              Our 3 fierceful dragons are assigned with 3 duties to <br />{" "}
              support your project and help you grow.{" "}
            </p>
            <br />
            <br />
            <ul className="list-decimal px-4 flex flex-col gap-4">
              <li>
                Experienced developer oversight and guidance both in relation to
                smart contracts and complete front-end solutions.
              </li>
              <li>
                Top tier influencer network and industry insight and support.
              </li>
              <li>
                {" "}
                Savvy investors who will apply the LAIR fund to provide the
                initial liquidity as well as testing the viability of the
                project.
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={imageVariants}
        animate={imageControls}
        initial="initial"
        className="absolute"
      >
        <img src={dragon} alt="dragon" />
      </motion.div>
    </div>
  );
};

export default Fourth;
