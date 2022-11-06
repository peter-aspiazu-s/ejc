import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import BannerPageRoofingxs from '../../public/images/banner-page-roofing-xs.webp'
import BannerPageRoofingsm from '../../public/images/banner-page-roofing-sm.webp'
import BannerPageRoofingmd from '../../public/images/banner-page-roofing-md.webp'
import BannerPageRoofinglg from '../../public/images/banner-page-roofing-lg.webp'
import BannerPageRoofingxl from '../../public/images/banner-page-roofing-xl.webp'

interface ServiceOneHeaderProps {
    ServiceOneHeaderTitle: string;
    ServiceOneHeaderSemiDescription: string;
    ServiceOneHeaderVisitBTN:string;
}

export const ServiceOneHeader: FC<ServiceOneHeaderProps> = ({
    ServiceOneHeaderTitle,
    ServiceOneHeaderSemiDescription,
    ServiceOneHeaderVisitBTN
}) => {
  return (
    <Grid container className="animate__animated animate__fadeIn">
        <Grid item xs={12}>
        <Box sx={{display: {xs: 'bloxk', sm: 'none'}}}>
                <Image src={BannerPageRoofingxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerPageRoofingsm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerPageRoofingmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerPageRoofinglg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerPageRoofingxl} />
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
                    }} component="h3">{ServiceOneHeaderTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                            mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p"
                >{ServiceOneHeaderSemiDescription}</Typography>
                <Button 
                    href="#"
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                >
                    {ServiceOneHeaderVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
