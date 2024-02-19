import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../pages/home/Category';

export const Card = ({ category }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const categoryFilteredItems = data.filter((item) => item.category === category);
        // console.log(Category);
        // console.log(categoryFilteredItems);
        setFilteredItems(categoryFilteredItems);
        } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm md:px-28 px-4 py-8">
      {filteredItems.map((item) => (
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
