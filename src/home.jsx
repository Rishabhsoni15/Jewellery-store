import React from "react";
import { Button } from "./components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearched from "./components/MostSearched";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Wallet from "./components/Wallet";

function Home() {
  return (
    <div>
      {/* Navbar section */}
      <NavBar />
      {/* Hero section */}
      <Hero />
      {/* category section */}
      <Category />
      {/* Most Searched */}
      <MostSearched />
      {/* Offer sections */}
      <Wallet />
      {/* Info Sections */}
      <Info />
      {/* Footer Sections */}
      <Footer />
    </div>
  );
}

export default Home;
