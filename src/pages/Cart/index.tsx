import Select from "../../components/select";
import { useEcommerce } from "../../context/EcommerceContex";

import './style.scss';

const Cart = () => {

  const { cartItems, selectedValue, updateSelectedValue, removeProduct } = useEcommerce()
  
  

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

  const handleProductDeleted = (id:any) => {
    return removeProduct(id)
}
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
              <button className="cart-item-delete" onClick={() => handleProductDeleted(item.id)}>Excluir</button>
              <span className="cart-item-amount">
               R$ {(parseFloat(item.price) * parseFloat(selectedValue))} 
              </span>
             
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