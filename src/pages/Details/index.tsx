import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useEcommerce } from '../../context/EcommerceContex';

import './style.scss'

interface Product {
  id:number,
  title: string,
  price: string,
  description:string,
  image: string
}

const Details = () => {
  const {id} = useParams()
  const {addToCart} = useEcommerce()

  const [product, setproduct] = useState<Product | null >(null);

  const [selectedValue, setSelectedValue] = useState('');
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
  };
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res =>res.json())
            .then(json => {
              
              setproduct(json)
              
            })
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const productItem: Product = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image
      };
      console.log("Produto adicionado", productItem)
      addToCart(productItem)
  }
  }
  return ( 
    <div className='details-container'> 
          <Link to={'/'} className='back-home'>Voltar</Link>
          <section className='product-details'>
            <div className='details-img'>
              <img src={product?.image} alt="" />
            </div>
            <div className='datails-info'>
              <h2>{product?.title}</h2>
              <span>R$ {product?.price}</span>
              <div className="quantity-items">
                <span>Quantidade</span>
                <select value={selectedValue} onChange={handleSelectChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              
              <button className='btn-add-cart' onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </div>
            <div className="product-description">
              <h2>Description</h2>
              <p>{product?.description}</p>
            </div>
          </section>
    
    </div>
   );
}
 
export default Details;