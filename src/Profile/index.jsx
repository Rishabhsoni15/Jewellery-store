import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <NavBar />
      <div className="px-10 sm:px-20 my-10 font-first">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My Listing</h2>
          <Link to="/add-listing">
            <Button>+ Add Listing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
