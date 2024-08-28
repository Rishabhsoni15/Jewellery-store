import Data from "@/Shared/Data";
import React from "react";

import { GiGoldBar } from "react-icons/gi";

function Category() {
  return (
    <div className="m-14 font-first font-bold ">
      <h1 className="text-3xl font-first text-center mb-6">Sparkle In Love</h1>
      <div
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
      lg:grid-cols-6 gap-6  items-center justify-center px20"
      >
        {Data.Types.map((type, index) => (
          <div className="boeder rounded-md p-3 items-center flex-col flex hover:shadow-md shadow-sm ">
            <img
              src={type.images}
              alt=""
              className="bg-Graywala rounded-lg md:w-max h-[30vh]"
            />
            <h2>{type.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
