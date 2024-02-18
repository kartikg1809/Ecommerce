import React from "react";
import banner from "/banner.png";

export const Banner = () => {
  return (
    <div className="bg-primarybg pt-12 xl:px-28 px-4 mt-8">
      <div className="py-14 flex flex-col md:flex-row-reverse items-center">
      <div className="md:w-1/2">
          <img className="" src={banner} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light text-black mb-5">Collections</h1>
          <p className="text-xl text-black mb-7">
            Get upto 30% off on all collections! Shop now!
          </p>
          <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white rounded-sm">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
