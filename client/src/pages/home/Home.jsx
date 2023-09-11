//import Footer from '../global/Footer';
import MainCarousel from './MainCarousel';
//import Navbar from '../global/Navbar';
import ShoppingList from './ShoppingList';



const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='home' style={{marginTop: '60px'}}>
        <MainCarousel />
        <ShoppingList />
        {/* <Footer /> */}
      </div>
    </>
  )
}
export default Home