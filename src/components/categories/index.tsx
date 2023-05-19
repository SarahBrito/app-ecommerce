import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './style.scss'

const Categories = () => {

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
             .then(res=>res.json())
            .then(json=>setcategories(json))
  }, []);

  return ( 
    <div className="categories">{categories.map((item:any, index:any)=>{
        return (
          <Link to={`category/${item}`} key={index}>
            <div  className="category-item">{item}</div>
          </Link>
        )
    })}</div>
   );
}
 
export default Categories;
