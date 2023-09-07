import {Box, useMediaQuery, IconButton, Typography} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {NavigateBefore, NavigateNext} from '@mui/icons-material';
import {shades} from '../../theme';
import require from 'require-context/';

const importAll = (r) => 
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(jpg)$/)
  );


const MainCarousel = () => {
  return (
    <div>MainCarousel</div>
  )
}
export default MainCarousel;