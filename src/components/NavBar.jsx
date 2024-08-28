import { SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, isSignedIn } = useUser();
  return (
    <nav className="">
      <div className="flex items-center font-first font-semibold bg-Navwala w-full justify-between shadow-sm p-5">
        <h1 className="flex font-first text-5xl ">
          <i className="bx bx-diamond "></i> Aj
        </h1>
        <ul className=" hidden md:flex text-2xl space-x-10">
          <li className=" hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
          <li className=" hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Shop
          </li>
          <li className=" hover:scale-105 transition-all cursor-pointer hover:text-primary">
            About us
          </li>
          <li className=" hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Page
          </li>
        </ul>
        <div className="flex justify-end md:hidden bg-primary rounded-xl shadow-lg p-2.5 text-white font-first font-semibold ">
          <SignInButton mode="modal" forceRedirectUrl="/" />
        </div>
        {isSignedIn ? (
          <div className="flex   items-center gap-5">
            <UserButton />
            <Link to={"/Profile"}>
              <Button className="text-base">Submit Listing</Button>
            </Link>
          </div>
        ) : (
          <Button className="text-base">Submit Listing</Button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
