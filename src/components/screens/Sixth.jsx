import { motion } from "framer-motion";
import React from "react";
import line from "../../assets/gif/line_fire.gif";

const boxVariants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 3.5,
    },
  },
};

const listVariants = {
  initial: {
    x: -10,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
  },
};

const Sixth = ({ currentView }) => {
  return (
    <div className="flex h-full text-white absolute pb-12 z-[6] w-full justify-center items-end mix-blend-screen">
      {currentView === 6 && (
        <div className="flex relative h-96 w-full">
          <div>
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full"
            />
          </div>

          <motion.div
            variants={boxVariants}
            initial="initial"
            animate="animate"
            className="flex w-full h-full px-32 gap-36 justify-between"
          >
            <motion.div
              variants={listVariants}
              className="flex flex-col-reverse w-[80%] z-[7] gap-4 transform -translate-y-4 text-white self-start"
            >
              <p className="text-3xl"> PHASE 1 </p>
              <ul>
                <li>- STEALTH LAUNCH</li>
                <li>- LIQUIDITY UNLOCKED</li>
                <li>- SOCIALS LIVE</li>
                <li>- CMC & COINGECKO LISTING</li>
              </ul>
            </motion.div>

            <motion.div
              variants={listVariants}
              className="flex flex-col z-[7] gap-4 w-[70%] transform translate-y-12  text-white self-end"
            >
              <p className="text-3xl"> PHASE 2 </p>
              <ul>
                <li>- PROJECT DASHBOARD LAUNCH</li>
                <li>- CONTRACT AUDIT</li>
                <li>- PARTNERSHIPS/LISTINGS WITH LEADINGS DEGEN PLATFORMS</li>
                <li>- MERCHANDISE RELEASE</li>
              </ul>
            </motion.div>

            <motion.div
              variants={listVariants}
              className="flex flex-col-reverse z-[7] w-[80%] gap-4 transform -translate-y-4 text-white self-start"
            >
              <p className="text-3xl"> PHASE 3 </p>
              <ul>
                <li>- DRAGON NFTS</li>
                <li>- YOUTUBE SHOW WITH PROJECT PITCHES AND LIVE LAUNCHES</li>
                <li>- STAKING PLATFORM</li>
                <li>- CEX LISTING</li>
              </ul>
            </motion.div>

            <motion.div
              variants={listVariants}
              className="flex flex-col z-[7] gap-4 text-white self-end"
            >
              <p className="text-3xl"> PHASE 4 </p>
              <ul>
                <li>- LEGENDARY LAUNCH AUDITS SERVICE</li>
                <li>- P2E GAME</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Sixth;
