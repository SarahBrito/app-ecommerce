import { Link } from 'react-router-dom';
import './style.scss'

const Product = ({item, index}:any) => {

  return ( 
    <Link to={`datails/${item.id}`} key={index}>
      <section  className="product">
        <h2 className="product-title">{item.title}</h2>
        <img src={item.image} alt="image" className="product-image"/>
        <span className="product-price">R$ {item.price}</span>
    </section>
</Link>
   );
}
 
export default Product;