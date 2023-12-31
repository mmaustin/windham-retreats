import { Box, useTheme, Typography } from "@mui/material";
import { shades } from "../../theme";


const Footer = () => {

  const { palette: { info } } = useTheme();

  return (
    <Box mt='70px' p='40px 0' bgcolor={info.light}>
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-around'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
      >
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            Windham Retreats
          </Typography>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            Situation in the lovely Catskills Mountains
          </Typography>
        </Box>

        <Box width='clamp(20%, 30%, 40%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            Curator: Your Host, PhD
          </Typography>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            Location: Windham, New York
          </Typography>
        </Box>

        <Box width='clamp(20%, 30%, 40%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            555-555-5555
          </Typography>
          <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            windhamyoga@gmail.com
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}
export default Footer;