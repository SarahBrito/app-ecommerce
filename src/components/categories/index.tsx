
import './style.scss'
import { useEcommerce } from "../../context/EcommerceContex";

const Categories = () => {
  const {handleShowCategoriesAll, getProductsCategories} = useEcommerce()

  const handleShowCategoryEletronics = () =>{
    getProductsCategories('electronics');
  }

  const handleShowCategoryJewelery = () =>{
    getProductsCategories('jewelery');
  }

  const handleShowCategoryMenClothing = () =>{
    getProductsCategories("men's clothing");
  }

  const handleShowCategoryWomenClothing = () =>{
    getProductsCategories("women's clothing");
  }


  return ( 
    <div className="categories">
        <button className="category-item" onClick={handleShowCategoriesAll}>
          all categories
        </button>
        <button className="category-item" onClick={handleShowCategoryEletronics}>
          eletronics
        </button>
        <button className="category-item" onClick={handleShowCategoryJewelery} >
        jewelery
        </button>
        <button className="category-item" onClick={handleShowCategoryMenClothing}>
          men's clothing
        </button>
        <button className="category-item" onClick={handleShowCategoryWomenClothing}>
          women's clothin
        </button>
    </div>
   );
}
 
export default Categories;
