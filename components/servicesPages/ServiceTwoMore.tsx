import {FC, useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface ServiceTwoMoreProps {
    serviceTwoMoreTitle: string;
    serviceTwoMoreDescription1: string;
    serviceTwoMoreDescription2: string;
    serviceTwoMoreDescription3: string;
}

export const ServiceTwoMore: FC<ServiceTwoMoreProps> = ({
    serviceTwoMoreTitle,
    serviceTwoMoreDescription1,
    serviceTwoMoreDescription2,
    serviceTwoMoreDescription3,
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
              }}>{serviceTwoMoreTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceTwoMoreDescription1}</Typography>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceTwoMoreDescription2}</Typography>
            <Typography sx={{color:'text.disabled', fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceTwoMoreDescription3}</Typography>
        </Grid>
    </Grid>
  )
}
