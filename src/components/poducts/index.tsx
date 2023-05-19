import { useEffect, useState } from "react";
import Product from "../product";

import './style.scss'

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setproducts(json))
  }, []);

  return ( 
      <div className="products">
        {products.map((item:any, index:any)=>{
          return (
            <Product item={item} index={index}/>
          )
        })}
      </div>
   );
}
 
export default Products;