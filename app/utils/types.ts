import { StaticImageData } from "next/image"




export type Product= {
    [x: string]: any
    id:number,
    name:string,
    tagLine:'Dress'
    price:number,
    category:string,
    image:string |StaticImageData
   
   
}