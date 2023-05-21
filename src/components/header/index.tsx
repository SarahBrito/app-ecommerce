import './style.scss'

import IconCart from '../iconCart';
import { useState } from 'react';
import { useEcommerce } from '../../context/EcommerceContex';

const Header = () => {
  // const { getProductFilter } = useEcommerce()

  const [searchValue, setSearchValue] = useState('');
  

  const handleSearchChange = (event:any) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event:any) => {
    event.preventDefault();
    console.log('Valor da busca:', searchValue);
  };

   return ( 
    <header>
      <form onSubmit={handleSearchSubmit}>
        <input 
        type="text" 
        value={searchValue} 
        className="search-product" 
        placeholder="Search product" 
        onChange={handleSearchChange}
        />
      </form>
      
      <IconCart />
    </header>
   );
}

export default Header;