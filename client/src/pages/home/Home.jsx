import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import MessageForm from '../global/MessageForm';
import { Box } from '@mui/material';


const Home = () => {
  return (
    <>
      <Box className='home' style={{marginTop: '60px'}}>
        <MainCarousel />
        <ShoppingList />
        <Box width='80%' m='0px auto'>
          <MessageForm />
        </Box>
      </Box>
    </>
  )
}
export default Home