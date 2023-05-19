import { Link } from 'react-router-dom';
import { useEcommerce } from '../../context/EcommerceContex';
import './style.scss'

import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  const { quantityCartItems } = useEcommerce()
  return ( 
    <header>
      <input type="search" className="search-product" placeholder="Search product"/>
      <div className="icon-cart">
        <Link to={'/cart'}>
          <IoCartOutline size={25}/>
        </Link>
        
        <span>{quantityCartItems}</span>
      </div>
    </header>
   );
}

export default Header;