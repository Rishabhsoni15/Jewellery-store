import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { IoSearchSharp } from "react-icons/io5";
import Data from "@/Shared/Data";

function Search() {
  return (
    <div className="p-2 bg-light rounded-md font-semibold md:rounded-xl font-first flex-col md:flex-row md:flex gap-10 px-5 items-center w-[40%]  md:p-4">
      <Select>
        <SelectTrigger className=" outline-none border-none w-full shadow-none text-2xl">
          <SelectValue placeholder="Gold" />
        </SelectTrigger>
        <SelectContent className="font-semibold">
          {Data.Category.map((marker, index) => (
            <SelectItem value={marker.name}>{marker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className=" outline-none border-none w-full shadow-none text-2xl">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="font-semibold">
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="">
        <IoSearchSharp className="text-4xl text-white hover:scale-105 transition-all bg-primary rounded-full p-2 " />
      </div>
    </div>
  );
}

export default Search;
