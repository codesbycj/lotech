import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.items.find((each) => each.id === parseInt(id)));

  if (!product) {
    return (
      <div className="container mx-auto px-9 py-5">
        <div className="text-center mt-50">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>

          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-9 py-8">
      <div className="mt-40">
        <Link to="/" className="mb-8 inline-block">
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md p-4 rounded w-[660px]">
            <img src={product.image} alt="" />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <span className="font-semibold mb-2">{product.category}</span>
            </div>

            <button
              className="w-full md:w-auto bg-zinc-300 px-8 py-3
          rounded-md flex items-center justify-center gap-2 hover:bg-zinc-400
          cursor-pointer"
            >
              <ShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
