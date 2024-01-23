import React from "react";
import { AiFillCar, AiOutlineFieldTime } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";
const HelpLine = () => {
  return (
    <section
      className="py-6 dark:bg-gray-800 -mt-36"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="flex lg:gap-60 sm:gap-3 md:gap-28 gap-4">
          <div className="card h-28 w-36 lg:w-60  lg:h-60 bg-white mt-6  flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center ">
              <h2 className="lg:text-8xl text-2xl">
                <AiOutlineFieldTime className="text-[#455a64]" />
              </h2>
              <p className="font-semibold text-sm lg:text-2xl">Book Online</p>
            </div>
          </div>
          {/*  */}
          <div className="card h-28 w-36 lg:w-60  lg:h-60 -mt-12 bg-[#455a64] text-white flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center ">
              <h2 className="lg:text-8xl text-2xl">
                <AiFillCar />
              </h2>
              <p className="font-semibold text-sm lg:text-2xl">We Drive</p>
            </div>
          </div>
          {/*  */}

          <div className="card h-28 w-36 lg:w-60  lg:h-60 bg-white mt-6  flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center ">
              <h2 className="lg:text-8xl text-2xl">
                <FaPencilRuler className="text-[#455a64]" />
              </h2>
              <p className="font-semibold text-sm lg:text-2xl text-center">
                Solve Problem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpLine;
