import HeroIcons from './HeroIcons';
import HeroImage from './HeroImage';
import styles from './hero.module.css';
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <>
     <Box className={styles.herocontainer} >
      <Box className={styles.iconcontainer} >
        <HeroIcons/>
      </Box>
     
      <Box>
        <HeroImage/>
      </Box>
     </Box> 
    </>
  );
}

export default Hero;
