import React from "react";
import dragon from "../../assets/gif/dragon2.gif";

const Fourth = ({ currentView }) => {
  return (
    <div className="flex h-full justify-around absolute z-[4] w-full items-center mix-blend-screen">
      {currentView === 4 && (
        <>
          <div className="p-4 mt-16 flex flex-col w-[40%] transform translate-x-20">
            <h1 className="text-[#e28529] pb-8 text-2xl"> The 3 dragons. </h1>
            <p className="text-white">
              {" "}
              Our 3 fierceful dragons are assigned with 3 duties to <br />{" "}
              support your project and help you grow.{" "}
            </p>
            <br />
            <br />
            <ul className="text-white list-decimal px-4 flex flex-col gap-4">
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
          </div>

          <div>
            <img src={dragon} alt="dragon" />
          </div>
        </>
      )}
    </div>
  );
};

export default Fourth;
