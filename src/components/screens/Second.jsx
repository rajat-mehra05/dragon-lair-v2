import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import mountain from "../../assets/images/mountains.png";

const mountVariants = {
  initial: {
    y: "80%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },

  animate: {
    y: "50%",
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },

  exit: {
    scale: 1.5,
    y: "-20%",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    top: "100%",
  },
  animate: (isSecond) => ({
    top: isSecond ? "10%" : "19%",
    opacity: 1,
    transition: {
      delay: isSecond ? 0.2 : 1.5,
      duration: 2,
    },
  }),
  exit: {
    top: "100%",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const Second = ({ currentView }) => {
  const mountainControls = useAnimation();

  useEffect(() => {
    if (currentView === 2) mountainControls.start("animate");

    if (currentView === 1) mountainControls.start("initial");
    if (currentView === 4) mountainControls.start("exit");
  }, [currentView, mountainControls]);

  return (
    <div className="flex h-full flex-col absolute z-[2] w-full justify-center items-center">
      <motion.div
        className="w-full absolute bottom-0 left-0 z-[3]"
        variants={mountVariants}
        initial="initial"
        animate={mountainControls}
      >
        <img src={mountain} alt="mountain" />
      </motion.div>

      <AnimatePresence exitBeforeEnter>
        {currentView === 2 && (
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={false}
            className="w-full absolute left-0 flex justify-around px-2"
          >
            <p className="text-white w-[35%] pl-20 ">
              <h2 className="text-[#e28529] pb-8 text-2xl mt-8">
                Who are we ?
              </h2>
              Dragon's Lair is a launchpad for the most daring and innovate of
              new crypto and NFT projects.
            </p>
            <p className="text-white w-[28%] pb-12">
              <h2 className="text-[#e28529] pb-8 text-2xl">
                What's our goal ?
              </h2>
              The crypto Dragonland is full of <br /> rugpulls and scammers,{" "}
              <br /> fat private sales <br /> and inexperienced teams. <br />{" "}
              <br /> Our dragons will incinerate these projects and only the
              worthy which survive will be incubated.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {currentView === 3 && (
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={true}
            className="w-full absolute left-0 flex justify-around"
          >
            <div className="w-[30%] pl-20 py-4 mt-16">
              <h2 className="text-[#e28529] pb-8 text-2xl">
                {" "}
                How do we do it ?{" "}
              </h2>
              <p className="text-white pb-4">Our dragons are made up of</p>

              <ul className="text-white list-disc">
                <li>top influencers</li>
                <li>savvy crypto investors/traders</li>
                <li>and experienced developers.</li>
              </ul>
            </div>

            <div className="w-[35%] transform translate-y-20">
              <p className="text-white px-4 transform -translate-x-8">
                We will help to structure and launch any project that passes the
                dragons tests, giving it the best opportunity to prosper and
                ensuring that: <br /> <br />
              </p>
              <ul className="text-white list-decimal flex flex-col gap-2">
                <li>The projects come with stealth/fair launch model</li>
                <li>Fair vesting</li>
                <li>And locked liquidity.</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Second;
