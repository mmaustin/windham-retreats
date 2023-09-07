import CheckOut from '../CheckOut';
import MainCarousel from './MainCarousel';
import Navbar from '../global/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home' style={{marginTop: '60px'}}>
      <MainCarousel />
      </div>
    </>
  )
}
export default Home