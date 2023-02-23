import {FC, useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface ServiceOneMoreProps {
    serviceOneMoreTitle: string;
    serviceOneMoreDescription1: string;
    serviceOneMoreDescription2: string;
    serviceOneMoreDescription3: string;
}

export const ServiceOneMore: FC<ServiceOneMoreProps> = ({
    serviceOneMoreTitle,
    serviceOneMoreDescription1,
    serviceOneMoreDescription2,
    serviceOneMoreDescription3,
}) => {

  const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation = document.getElementById('animationScroll');
      let position: any = animation?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position < windowSize ){
        setScrollAnimation(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Grid 
      container
      id='animationScroll' 
      className={scrollAnimation ? 'animate__animated animate__backInLeft' : ''} 
      display={scrollAnimation ? 'block' : 'none'}
    >
        <Grid item xs={12}>
            <Typography 
              sx={{
                color:'text.disabled', 
                fontWeight:'bold', 
                mb: 3, 
                fontSize: {
                  xs: '1.4rem', 
                  sm: '1.5rem', 
                  md: '1.7rem', 
                  lg: '1.8rem', 
                  xl: '1.9rem'}, 
                textAlign:{xs: 'center', md:'left'}
              }}>{serviceOneMoreTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceOneMoreDescription1}</Typography>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceOneMoreDescription2}</Typography>
            <Typography sx={{color:'text.disabled', fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceOneMoreDescription3}</Typography>
        </Grid>
    </Grid>
  )
}
