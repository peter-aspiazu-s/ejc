import {FC, useState, useEffect, useRef} from 'react'
import NextLink from 'next/link';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface CompanySummaryProps {
    companySummaryTitle: string;
    companySummaryDescription1: string;
    companySummaryLinkAbout: string;
    companySummaryMore: string;
  }

export const CompanySummary: FC<CompanySummaryProps> = ({
    companySummaryTitle,
    companySummaryDescription1,
    companySummaryLinkAbout,
    companySummaryMore
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
        <Grid item xs={12} >
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
              }}>{companySummaryTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{companySummaryDescription1}</Typography>
            <NextLink href={companySummaryLinkAbout} passHref>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    sx={{ 
                        fontSize: {xs: '0.8rem', xl: '1rem'}
                    }}>{companySummaryMore}</Button>
            </NextLink>
        </Grid>
    </Grid>
  )
}
