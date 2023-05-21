import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEcommerce } from '../../context/EcommerceContex';

import './style.scss'

import IconCart from '../../components/iconCart';
import ButtonHome from '../../components/buttonHome';

interface Product {
  id:number,
  title: string,
  price: string,
  description:string,
  image: string,
  quantity: number
  category: string
}

const Details = () => {
  const {id} = useParams()
  const {addToCart} = useEcommerce()

  const [product, setProduct] = useState<Product | null >(null);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //           .then(res =>res.json())
  //           .then(json => {
  //             setproduct(json)
  //           })
  // }, [id]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);


  const handleAddToCart = () => {
    if (product) {
      const productItem: Product = 
        {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
        quantity: product.quantity    
      };
     
      addToCart(productItem)
      console.log("Produto adicionado", productItem)
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: `Produto adicionado ao carrinho`,
        showConfirmButton: false,
        timer: 1500,
        width: 500,
        
      })
  }}

  return ( 
    <div className='details-container'> 
          <div className="details-header">
            <ButtonHome />
            <IconCart />
          </div>
          <section className='product-details'>
            <div className='details-img'>
              <img src={product?.image} alt="" />
            </div>
            <div className='datails-info'>
              <h2>{product?.title}</h2>
              <span>R$ {product?.price}</span>
              
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