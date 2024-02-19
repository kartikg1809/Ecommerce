import React from 'react'
import { Link } from 'react-router-dom';

const categories=[
    {id:1,img:"/category/electronics.webp",alt:"Electronics",title:"Electronics"},
    {id:2,img:"/category/clothes.webp",alt:"Clothing",title:"Clothing"},
    {id:3,img:"/category/jewelry.webp",alt:"Jewelry",title:"Jewelry"},
    {id:4,img:"/category/home.webp",alt:"Home&Living",title:"Home & Living"},
    {id:5,img:"/category/entertainment.jpg",alt:"Toys&Entertainment",title:"Toys & Entertainment"},
    {id:6,img:"/category/art.webp",alt:"Art&Collections",title:"Art & Collections"}
]
export const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto xl:px-28 px-4 py-24'>
     <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link to={`/category/${category.alt}`} key={category.id} className='flex items-center justify-center hover:scale-105 transition-all duration-200'>
          <span  className='absolute uppercase font-bold bg-white text-black font-primary py-2 px-6 rounded-sm'>{category.title}</span>
            <img src={category.img} alt={`Category ${category.id}`} className="md:w-[400px] md:h-[250px] rounded-md" />
          </Link>
        ))}
      </div>
    </div>
  )
}
