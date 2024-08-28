import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-10 py-10 gap-6 h-auto md:h-[600px] w-full bg-Background">
        <h1 className="text-3xl md:text-[60px] font-first   md:leading-none md:text-left">
          Experience
          <br />
          the Brilliance
          <br />
          of
          <img
            src="public/Images/ne.png"
            alt=""
            className="inline md:ml-10 ml-4 w-28 h-14 rounded-full"
          />
          <br />
          Craftsmanship
        </h1>
        <div className="flex justify-center md:justify-evenly w-full">
          <img
            src="/public/Images/heading image.jpg"
            alt="Craftsmanship"
            className="w-[200px] md:w-[300px] h-auto md:h-[400px] sm:mt-32 mx-auto rounded-xl md:rounded-t-full"
          />
        </div>
        <div className="flex justify-center md:justify-center w-full">
          <img
            src="/public/Images/ring.png"
            alt="Craftsmanship"
            className="w-[200px] md:w-[300px] h-auto md:h-[400px] rounded-b-full "
          />
        </div>
      </div>
      <div className="flex my-10 items-center justify-center">
        <Search />
      </div>
    </div>
  );
}

export default Hero;
