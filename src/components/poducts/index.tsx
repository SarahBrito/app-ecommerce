
import { useEcommerce } from "../../context/EcommerceContex";
import Product from "../product";

import './style.scss'

const Products = () => {
  
  const {  products } = useEcommerce()
  
  return ( 
      <div className="products">
        {products.map((item)=>{
          return (
            <Product item={item}  key={item.id}/>
          )
        })}
      </div>
   );
}
 
export default Products;