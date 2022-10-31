import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import AboutSectionImageDesktop from '../../public/images/about-section.webp'
import AboutSectionImageMobile from '../../public/images/about-section2.webp'
import AboutSectionImageSmall from '../../public/images/about-section3.webp'

interface AboutHeaderProps {
    aboutTitle: string;
    aboutSemiDescription: string;
    aboutVisitBTN:string;
}

export const AboutHeader: FC<AboutHeaderProps> = ({
    aboutTitle,
    aboutSemiDescription,
    aboutVisitBTN,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <Image src={AboutSectionImageDesktop} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={AboutSectionImageMobile} />
            </Box>
            <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                <Image src={AboutSectionImageSmall} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: {xs: 'center', md: 'start'},
                    height: {xs: '100%', sm:'100%'},
                    width: {xs: '100%', md: '70%', lg: '50%'},
                    p: {xs: 1, sm: 10}
                }}
            >
                <Typography sx={{fontSize: {xs:'25px', sm:'40px', md:'50px'}, mb: {xs: 1, sm: 3, md: 3, lg: 4}}} component="h3">{aboutTitle}</Typography>
                <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription}</Typography>
                {/* <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription2}</Typography>
                <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription3}</Typography> */}
                <Button 
                    href="https://walink.co/5e72b8"
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs:'14px'}}}
                >
                    {aboutVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
