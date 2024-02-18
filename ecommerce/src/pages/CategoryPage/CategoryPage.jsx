import React from "react";
import { FaFilter } from "react-icons/fa";
import { Card } from "../../components/Card";
export const CategoryPage = () => {
  return (
    <div>
        <div className="flex justify-end mb-4 mt-4 xl:px-28 px-4">
          <div className="flex bg-black p-2 justify-end rounded-l-sm">
            <FaFilter className="text-white h-4 w-4" />
          </div>
          <select
            id="sort"
            className="bg-black text-white px-2 py-1 outline-none rounded-r-sm"
          >
            <option value="default"> Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
      </div>
      <Card/>
    </div>
  );
};
