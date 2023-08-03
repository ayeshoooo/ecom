import { Product } from "@/app/utils/types"
import ProductCard from '../../component/productCard'
import { StaticImageData } from "next/image"
import { Products } from "@/app/utils/mock"
//import Share from '@/app/share'

const getProductsByCategory = (Category:string) =>{
 return Products.filter((product)=>product.category ===Category)
}




export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsByCategory(params.id)
  return(
  <div className='flex mt-16 justify-evenly py-10'>

{
  result.length > 0 ?
    result.map((Product)=>(
     <ProductCard key={Product.id}
      title={Product.name}
      price={Product.price}
      img={Product.image as StaticImageData} Category={Product.category}
       id={Product.id}     />
     

    )):<p>No category</p>
}
   


    
    


                    
    </div>
  )}
  