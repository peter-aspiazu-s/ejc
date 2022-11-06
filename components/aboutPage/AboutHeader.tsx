import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import BannerPageAboutxs from '../../public/images/banner-page-about-xs.webp'
import BannerPageAboutsm from '../../public/images/banner-page-about-sm.webp'
import BannerPageAboutmd from '../../public/images/banner-page-about-md.webp'
import BannerPageAboutlg from '../../public/images/banner-page-about-lg.webp'
import BannerPageAboutxl from '../../public/images/banner-page-about-xl.webp'

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
    <Grid container className="animate__animated animate__fadeIn">
        <Grid item xs={12}>
        <Box sx={{display: {xs: 'bloxk', sm: 'none'}}}>
                <Image src={BannerPageAboutxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerPageAboutsm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerPageAboutmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerPageAboutlg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerPageAboutxl} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: {xs: 'center', md: 'start'},
                    height: {xs: '100%'},
                    width: {xs: '100%', xl: '50%'},
                    p: {xs: 1, sm: 10}
                }}
            >
                <Typography 
                    sx={{
                        fontSize: {
                            xs: '1.4rem', 
                            sm: '1.5rem', 
                            md: '1.7rem', 
                            lg: '1.8rem',
                            xl: '1.9rem'}, 
                        mb: {xs: 1, sm: 3, md: 3, lg: 4}
                    }} component="h3">{aboutTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                            mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p"
                >{aboutSemiDescription}</Typography>
                {/* <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription2}</Typography>
                <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription3}</Typography> */}
                <Button 
                    href="#"
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                >
                    {aboutVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
