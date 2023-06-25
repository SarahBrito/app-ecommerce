import {BsFillCheckSquareFill} from 'react-icons/bs'
import { TbConfetti } from "react-icons/tb";

import './style.scss'
import ButtonHome from '../../components/buttonHome'

const Checkout = () => {
  return ( 
    <div className='checkout-container'>
     <header>
      <ButtonHome />
     </header>
      <div className='success-message'>
        <TbConfetti size={45} color={'#7243E0'} />
        <h1>Successful purchase</h1>
        <BsFillCheckSquareFill size={45} color={'#0eeba9'}/>
        
      </div>
    </div>
   );
}
 
export default Checkout;