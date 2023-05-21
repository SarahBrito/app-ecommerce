import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { useEcommerce } from '../../context/EcommerceContex';

import './style.scss'

const IconCart = () => {

  const { cartQuantity } = useEcommerce()

  return ( 
    <div className="icon-cart">
        <Link to={'/cart'}>
          <IoCartOutline size={25}/>
        </Link>
        <span>{cartQuantity}</span>
       
      </div>
   );
}
 
export default IconCart;