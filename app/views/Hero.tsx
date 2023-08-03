
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'


export default function Hero() {
  return (
   <section className='flex py-6 flex-col gap-y-10 lg:flex-row'>
    {/*Lefy div */}
    <div className='flex-1'>
    <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-600  hover:bg-blue-200'>Sale 70%</Badge>
   
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5">
      An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <Button className='bg-black text-white py-6 rounded-l-none px-8 mt-8' ><ShoppingCart className='h-6 w-6 mr-2' />Start Shoping </Button>
        <div className='flex mt-32 justify-evenly'>
          <Image src='/Featured1.webp' alt='pop'width={100} height={30} />
          <Image src='/Featured2.webp' alt='pop'width={100} height={30}/>
          <Image src='/Featured3.webp' alt='pop'width={100} height={30}/>
          <Image src='/Featured4.webp' alt='pop'width={100} height={30}/>
        </div>
        <div className='justify-centre mt-72 ml-72' >
        <h4 className="scroll-m-20 text-l font-semibold tracking-tight text-blue-800">
        PROMOTIONS
    </h4>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors ">
    Our Promotions Events
    </h2>
        </div>
        
    </div>
    
  
    {/*Right div */}
    <div className='flex-1 rounded-full shrink-0 bg-[#ffece3] mt-16 md:mr-28'>
      <Image src='/header.webp' alt='hero' width='650' height='600'/>
    </div>
   
       
   </section>
  )
}
