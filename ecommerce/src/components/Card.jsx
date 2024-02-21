import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({newItems}) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm md:px-28 px-4 py-8">
      {newItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto w-full h-[270px] hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">₹{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
