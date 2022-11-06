import {FC} from 'react'
import NextLink from 'next/link';
import { Card, CardActionArea, CardActions, CardContent, Grid, Typography, Button } from '@mui/material';

import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import CabinIcon from '@mui/icons-material/Cabin';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

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
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid item xs={12}>
            <Typography 
                sx={{
                    fontSize: {xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'}, 
                    color: 'text.disabled', 
                    textAlign: 'center'
                }}>{serviceSectionTitle}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <FilterHdrIcon 
                        sx={{
                            fontSize: {xs: '130px', sm: '150px', md: '180px'}
                        }} />
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
        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CabinIcon 
                        sx={{
                            fontSize: {xs: '130px', sm: '150px', md: '180px'}
                        }} />
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
        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <AccountTreeIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
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
