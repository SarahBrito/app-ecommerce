import { Link } from 'react-router-dom';

import './style.scss'

const ButtonHome = () => {
  return ( 
    <Link to={'/'} className='back-home'>Voltar</Link>
   );
}
 
export default ButtonHome;