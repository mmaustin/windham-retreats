import { Box, useTheme, Typography} from "@mui/material";
import { shades } from "../../theme";


const Footer = () => {

  const {palette: {info }} = useTheme();

  return (
    <Box mt='70px' p='40px 0' bgcolor={info.light}>
      Footer
    </Box>
  )
}
export default Footer;