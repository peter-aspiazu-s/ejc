import {FC, useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface LocationProps {
    titleLocation:string;
}

export const Location: FC<LocationProps> = ({
    titleLocation
}) => {

    const [scrollAnimation4, setScrollAnimation4] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation4 = document.getElementById('animationScroll4');
      let position4: any = animation4?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position4 < windowSize ){
        setScrollAnimation4(true);
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
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        id='animationScroll4' 
        className={scrollAnimation4 ? 'animate__animated animate__backInLeft' : ''} 
        display={scrollAnimation4 ? 'block' : 'none'}
    >
        <Grid item xs={12} sx={{mb:3}}>
            <Typography sx={{
                color:'text.disabled',
                textAlign:'center',
                fontSize:{
                    xs: '1.4rem', 
                    sm: '1.5rem', 
                    md: '1.7rem', 
                    lg: '1.8rem', 
                    xl: '1.9rem'},
            }}>{titleLocation}</Typography>
        </Grid>
        <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1455685504484!2d-74.0337417!3d41.10951180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e7fcf7fd35a1%3A0x196c3fa13fd16897!2s35%20Hopf%20Dr%2C%20Nanuet%2C%20NY%2010954%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1668181261199!5m2!1ses-419!2sec" 
                width="600" 
                height="450" 
                style={{border:"0"}} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </Grid>
    </Grid>
  )
}
