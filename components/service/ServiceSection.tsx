import {FC, useState, useEffect} from 'react'
import NextLink from 'next/link';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


// TODO: agregar el alt en todas las imagenes usadas

interface ServiceSectionProps {
    serviceSectionTitle: string;
    service1Title: string;
    service1Description: string;
    service1Link: string;
    service2Title: string;
    service2Description: string;
    service2Link: string;
    service3Title: string;
    service3Description: string;
    service3Link: string;
    textBtn: string;
}

export const ServiceSection: FC<ServiceSectionProps> = ({
    serviceSectionTitle,
    service1Title,
    service1Description,
    service1Link,
    service2Title,
    service2Description,
    service2Link,
    service3Title,
    service3Description,
    service3Link,
    textBtn,
}) => {

    const [scrollAnimation1, setScrollAnimation1] = useState(false);
    const [scrollAnimation2, setScrollAnimation2] = useState(false);
    const [scrollAnimation3, setScrollAnimation3] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation1 = document.getElementById('animationScroll1');
      let position1: any = animation1?.getBoundingClientRect().top;
      let animation2 = document.getElementById('animationScroll2');
      let position2: any = animation2?.getBoundingClientRect().top;
      let animation3 = document.getElementById('animationScroll3');
      let position3: any = animation3?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position1 < windowSize ){
        setScrollAnimation1(true);
      }
      if( position2 < windowSize ){
        setScrollAnimation2(true);
      }
      if( position3 < windowSize ){
        setScrollAnimation3(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={3} id="servicesection">
        <Grid item xs={12}>
            <Typography 
                sx={{
                    fontSize: {xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'}, 
                    color: 'text.disabled', 
                    textAlign: 'center'
                }}>{serviceSectionTitle}</Typography>
        </Grid>

        <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll1' 
            className={scrollAnimation1 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation1 ? 'block' : 'none'}
        >
            <Card 
                sx={{ 
                    maxWidth: 345, 
                    backgroundColor: 'primary.dark', 
                    pb: 2, 
                }}
            >
                <NextLink href={service1Link} passHref>
                    <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <CardMedia
                            component="img"
                            sx={{
                                width:"100%",
                                height:200
                            }}
                            image="/images/banner-page-roofing-xs.webp"
                            alt="roofing"
                        />
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                component="div" 
                                sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}}}>
                                {service1Title}
                            </Typography>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}>
                                {service1Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <NextLink href={service1Link} passHref>
                        <Button 
                            size="small" 
                            variant="contained" 
                            color="secondary"
                            sx={{fontSize:{xs: '0.8rem', xl: '1rem'}}}
                        >
                            {textBtn}
                        </Button>
                    </NextLink>
                </CardActions>
            </Card>
        </Grid>

        <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll2' 
            className={scrollAnimation2 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation2 ? 'block' : 'none'}
        >
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark', pb: 2 }}>
                <NextLink href={service2Link} passHref>
                    <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <CardMedia
                            component="img"
                            sx={{
                                width:"100%",
                                height:200
                            }}
                            image="/images/banner-page-siding-xs.webp"
                            alt="Siding"
                        />
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                component="div" 
                                sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}}}>
                                {service2Title}
                            </Typography>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}>
                                {service2Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <NextLink href={service2Link} passHref>
                        <Button 
                            size="small" 
                            variant="contained" 
                            color="secondary"
                            sx={{fontSize:{xs: '0.8rem', xl: '1rem'}}}
                        >
                            {textBtn}
                        </Button>
                    </NextLink>
                </CardActions>
            </Card>
        </Grid>

        <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll3' 
            className={scrollAnimation3 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation3 ? 'block' : 'none'}
        >
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark', pb: 2 }}>
                <NextLink href={service3Link} passHref>
                    <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <CardMedia
                            component="img"
                            sx={{
                                width:"100%",
                                height:200
                            }}
                            image="/images/banner-slide-home-img3-xs.webp"
                            alt="Gutters"
                        />
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                component="div" 
                                sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}}}>
                                {service3Title}
                            </Typography>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}>
                                {service3Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <NextLink href={service3Link} passHref>
                        <Button 
                            size="small" 
                            variant="contained" 
                            color="secondary"
                            sx={{fontSize:{xs: '0.8rem', xl: '1rem'}}}
                        >
                            {textBtn}
                        </Button>
                    </NextLink>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}
