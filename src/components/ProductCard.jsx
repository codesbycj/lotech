import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={product.image} alt="" className="h-54 m-auto"/>

        <div className="bg-gray-50 p-4">
            <h2 className="text-lg font-semibold my-4">{product.title.substring(0,20)+"..."}</h2>
            <p className="text-sm text-zinc-500 border-zinc-200 border-b-2 pb-4">{product.description}</p>

            <div className="flex justify-between mt-4 items-center">
                <p className="text-xl font-semibold">${product.price}</p>
                <p>View Details</p>
            </div>
        </div>
      </div>
    </Link>
  );
};
