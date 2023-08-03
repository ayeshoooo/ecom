'use client'

import { Product } from "@/app/utils/types"
import ProductCard from '../../component/productCard'
import { StaticImageData } from "next/image"
import { Products } from "@/app/utils/mock";
import Image from "next/image";
import Qty from '../../component/Qty'


const sizes = ["XS", "S", "M", "L", "XL"];
const getProductsDetail= (id:string | number ) =>{
 return Products.filter((product)=>product.id == id)
}





export default function Page({ params }: { params: {id:string } }) {
  const result = getProductsDetail(params.id);
  return(
    <div className="flex mt-16 py-10 flex-wrap">
    {result.map((Product) => (
      <div key={Product.id} className="flex justify-between gap-6">
        {/* Left Image */}
        <div>
          <Image src={Product.image} alt={Product.name} />
        </div>
        {/* Right Content */}
        <div>
          <div>
            <h1 className="text-2xl">{Product.name}</h1>
            <h2 className="text-gray-400 text-sm">  {Product.tagLine}</h2>
           
          </div>
          <div>
            <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
            {/* Sizes */}
            <div className="flex gap-x-3 text-center justify-center  ">
            {sizes.map((item, i) => (
              <div key={i}
                className="center w-6 h-6 mt-2 rounded-full border hover:shadow-xl duration-300"
              >
                <span className="text-[10px] text-center font-semibold text-gray-600">
                  {item}
                </span>
              </div>
            ))}
            </div>
            {/* Quantity */}
            <div className="flex items-center mt-6 gap-x-3">
              <h3 className="text-[10px] font-semibold">Quantity:</h3>
             <Qty/>
            </div>
              
          </div>
        </div>
      </div>
    ))}
  </div>
)
            }
           