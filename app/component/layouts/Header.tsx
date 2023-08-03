import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
export default function Header() {
  return (
   <>
    <div className='flex justify-between items-centre py-6 px-5'>
   <Link href={'/'}>
    <Image src='/Logo.webp'alt='124'width={160} height={2}/>
   </Link>
   
    <div>
    <ul className='flex gap-x-6'>
       <li className='text-lg'>
        <Link href={'/category/Male'}>
        Male </Link></li>
        <li className='text-lg'> <Link href={'/category/Female'}>
        Female </Link></li>
        <li className='text-lg'> <Link href={'/category/Kids'}>
        Kids </Link></li>
        <li className='text-lg'> <Link href={'/category/sports'}>
        Sports </Link></li>
        <li className='text-lg'> <Link href={'/products'}>
        All products </Link></li>
       
    </ul>
    
    
    </div>
    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
        <ShoppingCart className='h-6 w-6'/>
        <div className="absolute z-10 top-1 right-2 h-4 w-4 text-xs flex justify-center items-center  bg-[#f02d34] rounded-full text-white">
                0
              </div>
        </div>
    </div>
    
    
    </>
   
    
    
  
  )
}
