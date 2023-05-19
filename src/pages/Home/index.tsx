import Categories from '../../components/categories';
import Header from '../../components/header';
import Products from '../../components/poducts';
import './style.scss'

const Home = () => {
  return ( 
    <div className='home'>
      <Header />
      <Categories />
      <Products />
    </div>
   );
}
 
export default Home;