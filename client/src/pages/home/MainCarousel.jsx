import {Box, useMediaQuery, IconButton, Typography} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {NavigateBefore, NavigateNext} from '@mui/icons-material';
import {shades} from '../../theme';
// import require from 'require-context';
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

const MainCarousel = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px");

  return (
    <div >
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
        <div>
            <img src={carouselPictures.retreat1} alt='one'
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                backgroundAttachment: 'fixed'
              }}              
            />
            <Box
              color='white'
              padding='20px'
              borderRadius='1px'
              textAlign='left'
              bgcolor='rgba(0,0,0,0.4)'
              position="absolute"
              top='46%'
              left={isNonMobile ? '10%' : '0'}
              right={isNonMobile ? undefined : '0'}
              margin={isNonMobile ? undefined : '0 auto'}
              maxWidth={isNonMobile ? undefined : '240px'}
            >
              <Typography color={shades.secondary[200]}>YOGA RETREATS</Typography>
              <Typography variant='h1'>KNOW THYSELF</Typography>
            </Box>              
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={carouselPictures.retreat2} alt='two'
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                backgroundAttachment: 'fixed'
              }}              
            />
            <Box
              color='white'
              padding='20px'
              borderRadius='1px'
              textAlign='left'
              bgcolor='rgba(0,0,0,0.4)'
              position="absolute"
              top='46%'
              left={isNonMobile ? '10%' : '0'}
              right={isNonMobile ? undefined : '0'}
              margin={isNonMobile ? undefined : '0 auto'}
              maxWidth={isNonMobile ? undefined : '240px'}
            >
              <Typography color={shades.secondary[200]}>YOGA RETREATS</Typography>
              <Typography variant='h1'>KNOW THYSELF</Typography>
            </Box>              
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={carouselPictures.retreat3} alt='two'
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                backgroundAttachment: 'fixed'
              }}              
            />
            <Box
              color='white'
              padding='20px'
              borderRadius='1px'
              textAlign='left'
              bgcolor='rgba(0,0,0,0.4)'
              position="absolute"
              top='46%'
              left={isNonMobile ? '10%' : '0'}
              right={isNonMobile ? undefined : '0'}
              margin={isNonMobile ? undefined : '0 auto'}
              maxWidth={isNonMobile ? undefined : '240px'}
            >
              <Typography color={shades.secondary[200]}>YOGA RETREATS</Typography>
              <Typography variant='h1'>KNOW THYSELF</Typography>
            </Box>              
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}
export default MainCarousel;