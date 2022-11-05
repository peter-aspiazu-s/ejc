import {FC} from 'react'
import NextLink from 'next/link';
import { Grid, Typography, Button } from '@mui/material';

interface ElementSlideGraphicDesignProps {
    titleSlide2: string;
    descriptionService2: string;
    servicePath2: string;
    start: string;
}

export const ElementSlideGraphicDesign: FC<ElementSlideGraphicDesignProps> = ({
    titleSlide2,
    descriptionService2,
    servicePath2,
    start,
}) => {
  return (
    <Grid 
        container 
        sx={{
            position:"absolute", 
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 1}, display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
            <Typography 
                sx={{
                    fontSize: {
                        xs: '1.4rem', 
                        sm: '1.5rem', 
                        md: '1.7rem', 
                        lg: '1.8rem',
                        xl: '1.9rem'}
                }} component="h3">{titleSlide2}</Typography>
        </Grid>
        <Grid item md={12} sx={{mb:{md: 4, lg: 5}, display: {xs: 'none', lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
            <Typography sx={{fontSize: {lg: '1.1rem', xl: '1.2rem'}, textAlign: {lg: 'left'}}} component="p">{descriptionService2}</Typography>
        </Grid>
        <Grid item xs={12} sx={{display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}>
            <NextLink href={servicePath2}>
                <Button variant="contained" size="large" color="secondary">
                    <Typography sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}>{start}</Typography>
                </Button>
            </NextLink>
        </Grid>
    </Grid>
  )
}
