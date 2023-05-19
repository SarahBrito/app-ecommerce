import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './style.scss'
import Product from '../../components/product';

const Category = () => {
 
  const {name} = useParams()
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
    .then(res=>res.json())
    .then(json=>setCategory(json))
  },[]);

  return ( 
    <div className='category-container'>
      <h2 className='category-title'>{name}</h2>
      <div  className='category-products'>
      {category.map((category:any, index:any)=>{
        return (
          <Product item={category} index={index} key={index}/>
        )
      })}
        </div>
    </div>
   );
}
 
export default Category;