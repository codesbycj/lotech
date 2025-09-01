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

      <nav className="flex ">
        <div>
          <Link></Link>
        </div>

        <form action="">
          <input type="text" className="w-5 h-12"/>
        </form>

        <Link>
            <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
};
