import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

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

const Fifth = ({ currentView }) => {
  const textControls = useAnimation();

  useEffect(() => {
    if (currentView === 4) textControls.start("initial");

    if (currentView === 5) textControls.start("animate");
    if (currentView === 6) textControls.start("exit");
  }, [currentView, textControls]);

  return (
    <div className="flex h-full text-white pl-48 absolute z-[5] w-full items-center">
      <AnimatePresence exitBeforeEnter>
        {currentView === 5 && (
          <motion.div
            variants={textVariants}
            animate={textControls}
            initial="initial"
            exit="exit"
            className="p-4 mt-16 flex flex-col w-[40%]"
          >
            <h1 className="text-[#e28529] pb-8 text-2xl"> Draganomics </h1>
            <p className=" pb-4">Every transaction is taxed 10 %.</p>
            <ul className=" pb-4">
              <li>4% to the LAIR fund.</li>
              <li>3% to product development.</li>
              <li>3% to reflections</li>
            </ul>

            <h3 className="text-[#e28529] pb-4"> How our holders benefit: </h3>

            <p>
              {" "}
              A proportion of our profits which will be distributed to LAIR{" "}
              <br />
              holders, used to buy back and burn LAIR tokens (so that it is
              deflationary) and to fund further project investment.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fifth;
