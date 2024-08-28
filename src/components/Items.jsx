import React from "react";
import { Separator } from "./ui/separator";
import { IoIosOpen } from "react-icons/io";

function Items({ jew }) {
  return (
    <div className="font-first rounded-xl bg-white border hover:shadow-lg cursor-pointer ">
      <h2></h2>
      <img
        src={jew?.image}
        width={"100%"}
        className="rounded-t-xl mx-auto h-80 object-cover "
      />
      <div className="p-4  overflow-hidden">
        <h2 className="font-bold font-first  text-black text-2xl mb-2">
          {jew?.name}
        </h2>
        <Separator />
        <div>
          <h2 className="font-bold font-first text-xl text-gray-500 mb-2">
            ${jew.price}
          </h2>
          <Separator />
          <h2 className=" text-primary text-lg flex gap-2 items-center mt-2">
            View Details
            <IoIosOpen />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Items;
