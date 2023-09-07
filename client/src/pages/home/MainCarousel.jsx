import {Box, useMediaQuery, IconButton, Typography} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {NavigateBefore, NavigateNext} from '@mui/icons-material';
import {shades} from '../../theme';
import require from 'require-context';
import retreatOne from '../../assets/retreat-1.jpg';
import retreatTwo from '../../assets/retreat-2.jpg';
import retreatThree from '../../assets/retreat-3.jpg';
import yogaWomen from '../../assets/yoga-women.jpg';

const carouselPictures = {
  retreat1: retreatOne,
  retreat2: retreatTwo,
  retreat3: retreatThree,
  yogaW: yogaWomen
};

const importAll = (r) => 
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(jpg)$/)
  );


const MainCarousel = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10'
          }}
        >
          <NavigateBefore sx={{fontSize: 40}} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10'
          }}
        >
          <NavigateNext sx={{fontSize: 40}} />
        </IconButton>
      )}
    >

    </Carousel>
  )
}
export default MainCarousel;