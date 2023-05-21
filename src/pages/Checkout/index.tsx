import {BsFillCheckSquareFill} from 'react-icons/bs'

import './style.scss'
import ButtonHome from '../../components/buttonHome'

const Checkout = () => {
  return ( 
    <div className='checkout-container'>
     <header>
      <ButtonHome />
     </header>
      <div className='success-message'>
        <h1>Success</h1>
        <BsFillCheckSquareFill size={48} color={'#0eeba9'}/>
      </div>
    </div>
   );
}
 
export default Checkout;