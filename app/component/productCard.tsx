import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function productCard(_props:{title:string,price:number, img:StaticImageData,Category:string,id:number}){
  console.log(_props)
  return (
    <Link href={`/products/${_props.id}`}>
    <div className='py-5'>
       <Image src={_props.img} alt ='app'width={300} height={300} />
       <h3 className='text-lg font-bold mt-2'>{_props.title}</h3>
       <p className='text-lg font-bold'>${_props.price}</p>
       <p className='text-lg font-bold'> Category{''}
       <span className='text-base font-normal capitalize'>{_props.Category}</span>
       </p>
       <Button  className='bg-black text-white mt-5'>Add to cart</Button>
      
       
    </div>
    </Link>
  )}

