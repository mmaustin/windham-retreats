import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import MessageForm from '../global/MessageForm';

const Home = () => {
  return (
    <>
      <div className='home' style={{marginTop: '60px'}}>
        <MainCarousel />
        <ShoppingList />
        <MessageForm />
      </div>
    </>
  )
}
export default Home