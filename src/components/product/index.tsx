import { Link } from 'react-router-dom';

import './style.scss'
import { roundValue } from '../../utils/round-value';
import { Product } from '../../context/EcommerceContex';

const Product = ({item}: { item: Product}) => {
 
  return ( 
   <Link to={`datails/${item.id}`} key={item.id}> 

      <section  className="product">
         <div className="product-image">
            <img src={item.image} alt="image" className="product-image"/>
         </div>

         <h2 className="product-title">{item.title}</h2>
         <div className="divider"></div>
         <span className="product-price">R$ {roundValue(parseFloat(item.price))}</span>
    </section>
</Link>
   );
}
 
export default Product;
