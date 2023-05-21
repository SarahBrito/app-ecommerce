
import IconCart from '../iconCart';
import { useEcommerce } from '../../context/EcommerceContex';

import './style.scss'

const Header = () => {

  const {handleSearchInputChange, searchTitle} = useEcommerce()
  
  
   return ( 
    <header>
      <input 
        type="text" 
        value={searchTitle} 
        className="search-product" 
        placeholder="Search product" 
        onChange={handleSearchInputChange}
        />
      <IconCart />
    </header>
   );
}

export default Header;