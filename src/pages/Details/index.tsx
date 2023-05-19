import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useEcommerce } from '../../context/EcommerceContex';

import './style.scss'
import Select from '../../components/select';

interface Product {
  id:number,
  title: string,
  price: string,
  description:string,
  image: string,
  quantity: number
}

const Details = () => {
  const {id} = useParams()
  const {addToCart, selectedValue, updateSelectedValue} = useEcommerce()

  const [product, setproduct] = useState<Product | null >(null);

  const handleSelectChange = (value: string) => {
    updateSelectedValue(value);
  };

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
  ];

  
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
        image: product.image,
        quantity: 0
      };
      console.log("Produto adicionado", productItem)
      addToCart(productItem)
  }}
  
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
                <Select options={options} value={selectedValue} onChange={handleSelectChange}/>
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