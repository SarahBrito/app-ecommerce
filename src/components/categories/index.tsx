
import './style.scss'
import { useEcommerce } from "../../context/EcommerceContex";
import { useState } from 'react';

const Categories = () => {
  const {handleShowCategoriesAll, getProductsCategories} = useEcommerce()


  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterTasks = (filter:string) => {
    if (filter === 'all') {
      handleShowCategoriesAll()
    } else if (filter === 'electronics') {
      getProductsCategories('electronics')
    } else if (filter === 'jewelery') {
      getProductsCategories('jewelery');
    }
    else if (filter === "men's clothing") {
      getProductsCategories("men's clothing");
    }
    else if (filter === "women's clothing") {
      getProductsCategories("women's clothing");
    }
  
    setActiveFilter(filter);
  };

const getFilterClass = (filter:string) => {
  return filter === activeFilter ? 'active' : 'remove-active';
};


  return ( 
    <div className="categories">
        <button className={`category-item ${getFilterClass('all')}`} onClick={()=> handleFilterTasks('all')}>
          all categories
        </button>
        <button className={`category-item ${getFilterClass('electronics')}`} onClick={() => handleFilterTasks('electronics')}>
          eletronics
        </button>
        <button className={`category-item ${getFilterClass('jewelery')}`} onClick={() => handleFilterTasks('jewelery')} >
        jewelery
        </button>
        <button className={`category-item ${getFilterClass("men's clothing")}`} onClick={() => handleFilterTasks("men's clothing")}>
          men's clothing
        </button>
        <button className={`category-item ${getFilterClass("women's clothing")}`} onClick={() => handleFilterTasks("women's clothing")}>
          women's clothin
        </button>
    </div>
   );
}
 
export default Categories;
