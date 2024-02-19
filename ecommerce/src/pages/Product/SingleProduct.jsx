import React from "react";
import { FaStar } from "react-icons/fa";
import image from "/category/images/product32.webp";

const SingleProduct = () => {
  return (
    <div className="mt-14 max-w-screem-2xl container mx-auto xl:px-14 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12">
            <div className="">
              <img
                src={image}
                alt=""
                className="h-auto max-w-full mx-auto rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-5xl text-black text-left">Title</h1>
              <p className="mt-3 text-black tex-base leading-6 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad
                perferendis aspernatur illum officiis eum nisi, modi animi in
                est esse ullam sint ipsum non eos ea molestiae nulla tempora!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium perspiciatis aliquam, cum corporis ratione enim.
                Nisi, iure a delectus, laudantium laborum quaerat perferendis
                officia tenetur, autem quod quos inventore sit!
              </p>
              <span className="my-3 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </span>
              <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                ₹ 100
              </span>
              <div className="mt-4">
                <div className="text-left flex flex-col gap-2">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    default={1}
                    required
                    className="border border-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="flex flex-row text-left my-4 gap-4">
                  <button
                    className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-white text-black text-md font-bold border border-black rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-black hover:text-white lg:m-0 md:px-6"
                    title="Confirm Order"
                  >
                    <span>Add To Cart</span>
                  </button>
                  <button
                    className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                    title="Confirm Order"
                  >
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
