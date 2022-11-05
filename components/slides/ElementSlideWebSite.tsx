import {FC} from 'react'
import NextLink from 'next/link';
import { Grid, Typography, Button } from '@mui/material';

interface ElementSlideWebSiteProps {
    titleSlide1: string;
    descriptionService1: string;
    servicePath1: string;
    start: string;
}

export const ElementSlideWebSite: FC<ElementSlideWebSiteProps> = ({
    titleSlide1,
    descriptionService1,
    servicePath1,
    start,
}) => {
  return (
    <Grid 
        container 
        sx={{
            position:"absolute", 
            display:"flex",
            justifyContent:{xs:"center", md:'start'},
            alignItems:{xs:"center", md:'start'}
        }}>
        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 1}, display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
            <Typography 
                sx={{
                    fontSize: {
                        xs: '1.4rem', 
                        sm: '1.5rem', 
                        md: '1.7rem', 
                        lg: '1.8rem',
                        xl: '1.9rem'
                        }
                }} component="h3">{titleSlide1}</Typography>
        </Grid>
        <Grid item md={12} sx={{mb:{md: 4, lg: 5}, display: {xs: 'none', lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
            <Typography sx={{fontSize: {lg: '1.1rem', xl: '1.2rem'}, textAlign: {lg: 'left'}}} component="p">{descriptionService1}</Typography>
        </Grid>
        <Grid item xs={12} sx={{display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}>
            <NextLink href={servicePath1}>
                <Button variant="contained" size="large" color="secondary">
                    <Typography sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}>{start}</Typography>
                </Button>
            </NextLink>
        </Grid>
    </Grid>
  )
}