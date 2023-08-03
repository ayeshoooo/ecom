import React from 'react'
import p1 from '/public/p1.webp'
import Image, { StaticImageData } from 'next/image'
import ProductCard from '../component/productCard'
import {Products} from '../utils/mock'
import { Button } from "@/components/ui/button"



export default function productList() {
  const productChecks = Products.slice(0,3);
  console.log(productChecks)


  return (
    
    <>
   <div className='flex mt-16 justify-evenly py-10'>
    {
      productChecks.map((product)=>(
       <ProductCard key={product.id}
        title={product.name}
        price={product.price}
        img={product.image as StaticImageData}
        Category={product.category}
        id={product.id}       />
       

      )
      )
    }
    


                    
    </div>
    </>
    

    
  )}
   
   
