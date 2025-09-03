import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container px-9 mx-auto mt-10">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Subscribe to Our Newsletter
            </h2>

            <form action="" className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter your Email"
                className="py-4 px-4 rounded shadow-md bg-white w-full"
              />

              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container px-9 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9">
            <div>
              <img src="./lotech-bg.png" alt="" className="w-50" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur maiores quisquam vitae eos, pariatur placeat. Veniam
                quae nisi maiores ratione alias.
              </p>

              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Pages</h2>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <ul>
                <li>
                  <Link to="/">Keyboards</Link>
                </li>
                <li>
                  <Link to="/">Headsets</Link>
                </li>
                <li>
                  <Link to="/">Mouse</Link>
                </li>
                <li>
                  <Link to="/">Speakers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <p>Left, Right, Ojuelegba Road, Port Harcourt, South Carolina</p>
              <p>+234 8951 0987 212</p>
              <p>+234 8901 0987 212</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-4 text-white">
        <p>Copyright &copy; 2025 GABOKEKE</p>
      </div>
    </footer>
  );
};
