import { ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>

            {isOpen && (
              <div className="flex flex-col absolute right-0 md:right-0 top-12 z-10
               bg-zinc-50 p-4 gap-4">
                <li>
                  <Link to="">Sign Up</Link>
                </li>
                <li>
                  <Link to="">My Account</Link>
                </li>
              </div>
            )}

            <User
              className="bg-gray-200 text-black rounded cursor-pointer p-2 size-[40px]"
              onClick={dropDown}
            />
          </ul>
        </div>
      </>

      <nav className="flex justify-between container m-auto items-center md:py-6 py-3 px-4 md:px-0 mb-15 md:mb-0">
        <div>
          <Link>
            <img src="./lotech.webp" alt="" className="w-20 md:w-25" />
          </Link>
        </div>

        <form action="" className="w-1/2 sm:block hidden">
          <input type="text" 
          className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none p-3 w-full"
          placeholder="Search Product"/>
          
        </form>

        <Link>
            <ShoppingCart className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full size-[50px]"/>
        </Link>
      </nav>
    </header>
  );
};
