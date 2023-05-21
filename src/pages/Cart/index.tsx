
import ButtonHome from "../../components/buttonHome";

import { useEcommerce } from "../../context/EcommerceContex";

import './style.scss';

const Cart = () => {

  const { cartItems, removeProduct, updateItemValue } = useEcommerce()
  
  const handleDecrement = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateItemValue(itemId, item.quantity - 1);
    }
    };
  
  const handleIncrement = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      updateItemValue(itemId, item.quantity + 1);
    }
  };
  
  const handleProductDeleted = (id:number) => {
    return removeProduct(id)

  }

  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.price) * item.quantity;
    }, 0);
  
    return totalAmount;
  };

  const totalAmount = getTotalAmount();

    return ( 
      <div className="cart-container">
        <div className="cart-header">
          <ButtonHome />
        </div>
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
                  <span>Quantidade </span>
                  <button className="button-decrement" onClick={()=>handleDecrement(item.id)}>-</button>
                    {item.quantity}
                  <button className='button-increment' onClick={()=>handleIncrement(item.id)}>+</button>
                </div>
                <button className="cart-item-delete" onClick={() => handleProductDeleted(item.id)}>Excluir</button>
                <span className="cart-item-amount">
                 R$ { (parseFloat(item.price) * item.quantity) } 
                </span>
              </div>
            )
          })}
          <div className="cart-subtotal">
            <span>Subtotal  R$ {totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
  
  
     );
  }
  
export default Cart;