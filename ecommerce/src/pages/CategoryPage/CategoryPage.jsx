import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";
export const CategoryPage = () => {
  const { category } = useParams();
  const [sort, setSort] = useState("default");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const categoryFilteredItems = data.filter(
          (item) => item.category === category
        );
        setFilteredItems(categoryFilteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  const sortItems = (value) => {
    setSort(value);
    let sortedItems = [...filteredItems];
    switch (value) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };
  return (
    <div>
      <div className="flex justify-between mb-4 mt-4 xl:px-28 px-4">
        <div className="flex items-center gap-2 pt-8 text-gray-500">
          <a
            href="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Home
          </a>{" "}
          <p className="font-semibold text-black">/ Shop</p>
        </div>
        <div className="flex items-center px-4 h-8 mt-8 text-white bg-black rounded-sm p-0">
          <FaFilter className="bg-black" />
          <select
            id="sort"
            onChange={(e) => sortItems(e.target.value)}
            value={sort}
            className="px-4 w-34 bg-black outline-none"
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      <Card newItems={filteredItems} />
    </div>
  );
};
