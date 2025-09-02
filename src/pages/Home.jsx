import React from "react";
import bg from "../assets/homebanner.jpg";
import mbg from "../assets/mobilebanner.jpg";
import { ProductGrid } from "../components";

export const Home = () => {
  const categories = ["All", "Keyboard", "Mouse", "Speakers", "Headset"];

  return (
    <div className={`w-full lg:bg-[url('/homebanner.jpg')]`}>
      <div className="container m-auto">
        <div className="lg:w-1/4 h-[75vh] flex flex-col gap-5 w-full px-3 md:px-0 justify-center">
          <h1 className="font-bold lg:text-6xl text-5xl">End Summer Right.</h1>
          <img src={mbg} alt="" className="lg:hidden" />
          <ul className="md:text-xl text-lg space-y-2">
            <li>Shop Now & Save.</li>
            <li>$150 off $450</li>
            <li>$70 off $250</li>
            <li>$30 off $120</li>
            <li>
              Limited Time Offer.{" "}
              <span className="font-semibold underline cursor-pointer">
                Exclusion Apply *
              </span>
            </li>
          </ul>

          <button className="bg-[#00FDCF] py-3 px-10 rounded-xl font-bold w-fit">
            SHOP NOW
          </button>
        </div>

        <div className="flex gap-4">
          {categories.map((category) => {
            return (
              <button
                className="bg-gray-300 py-2 px-4 rounde-md text-black active:scale-105
            hover:bg-zinc-400 transition-all ease-in cursor-pointer rounded-lg"
            key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        
        <ProductGrid />
      </div>
    </div>
  );
};
