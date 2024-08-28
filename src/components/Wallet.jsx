import React from "react";

const Wallet = () => {
  return (
    <section className="flex my-28 font-first flex-col md:flex-row mt-36  justify-center md:justify-evenly gap-8 px-4 md:px-20 sm:h-[80vh]">
      <div className="flex-1 bg-Background rounded-xl p-4 md:p-8">
        <h4 className="flex items-center px-4 md:px-8 mt-12 md:mt-24 bg-Graywala rounded-full h-8 md:w-[35vh] text-center mx-auto">
          Get 25% off this Week
        </h4>
        <h1 className="font-bold text-2xl md:text-5xl px-4 md:px-12 mt-8 md:mt-16 font-first leading-snug text-center">
          Unleash Your<p>Craving, Not Your</p>
          <p> Wallet!</p>
        </h1>
        <div className="flex justify-center mt-8">
          <div className="bg-shopclr pl-2 pt-2">
            <div className="flex items-center justify-center hover:text-black cursor-pointer -mb-2 -mr-2 gap-2 text-white h-11 w-36 bg-primary rounded-md">
              Shop Now <i className="rotate-45 bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="/Images/22.jpeg"
          alt="Wallet"
          className="rounded-xl object-cover h-[50vh] md:h-[80vh] w-full"
        />
      </div>
    </section>
  );
};

export default Wallet;
