
import { useEcommerce } from "../../context/EcommerceContex";
import ProductCart from "../productCart";

import './style.scss'

const Products = () => {
  
  const {  products } = useEcommerce()
  
  return ( 
      <div className="products">
        {products.map((item)=>{
          return (
            <ProductCart item={item}  key={item.id}/>
          )
        })}
      </div>
   );
}
 
export default Products;
