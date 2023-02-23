import {FC, useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ConstructionIcon from '@mui/icons-material/Construction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface AboutMisionVisionProps {
    titleMision: string;
    descriptionMision: string;
    titleVision: string;
    descriptionVision: string;
}

export const AboutMisionVision: FC<AboutMisionVisionProps> = ({
    titleMision,
    descriptionMision,
    titleVision,
    descriptionVision,
}) => {

    const [scrollAnimation1, setScrollAnimation1] = useState(false);
    const [scrollAnimation2, setScrollAnimation2] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation1 = document.getElementById('animationScroll1');
      let position1: any = animation1?.getBoundingClientRect().top;
      let animation2 = document.getElementById('animationScroll2');
      let position2: any = animation2?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position1 < windowSize ){
        setScrollAnimation1(true);
      }
      if( position2 < windowSize ){
        setScrollAnimation2(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} spacing={3}>
        <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll1' 
            className={scrollAnimation1 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation1 ? 'block' : 'none'}
        >
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark' }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ConstructionIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                            textAlign: {xs: 'center', md: 'left'}
                        }}>
                            {titleMision}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{
                                fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: {xs: 'center', md: 'left'}
                            }}>
                            {descriptionMision}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll2' 
            className={scrollAnimation2 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation2 ? 'block' : 'none'}
        >
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark' }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <TrendingUpIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{
                                fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                                textAlign: {xs: 'center', md: 'left'}
                            }}>
                            {titleVision}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{
                                fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: {xs: 'center', md: 'left'}
                            }}>
                            {descriptionVision}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
  )
}
