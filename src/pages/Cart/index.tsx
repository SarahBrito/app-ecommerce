import { useState } from "react";
import Select from "../../components/select";
import { useEcommerce } from "../../context/EcommerceContex";

import './style.scss';

const Cart = () => {

  const { cartItems } = useEcommerce()

  const [selectedValue, setSelectedValue] = useState('');


  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
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

 

  return ( 
    <div className="cart-container">
      <h2>Your shopping cart</h2>
      <div className="cart-item-container">
        {cartItems.map((item:any)=>{
          return (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt="" />
              </div>
              <h2 className="cart-item-title">{item.title}</h2>
              <span className="cart-item-price">R$ {item.price}</span>
              <div className="cart-quantity-items">
                <span>Quantidade</span>
                <Select options={options} value={selectedValue} onChange={handleSelectChange} />
              </div>
              <button className="cart-item-delete">Excluir</button>
              <span className="cart-item-amount">
               R$ {'00,00'} 
              </span>
              {/* <p>Valor selecionado: {selectedValue}</p> */}
            </div>
            
          )
        })}
        <div className="cart-subtotal">
          Subtotal R$ {}
        </div>
      </div>
    </div>


   );
}
 
export default Cart;