import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import BannerPageGuttersxs from '../../public/images/banner-page-gutters-xs.webp'
import BannerPageGutterssm from '../../public/images/banner-page-gutters-sm.webp'
import BannerPageGuttersmd from '../../public/images/banner-page-gutters-md.webp'
import BannerPageGutterslg from '../../public/images/banner-page-gutters-lg.webp'
import BannerPageGuttersxl from '../../public/images/banner-page-gutters-xl.webp'

interface ServiceThreeHeaderProps {
    ServiceThreeHeaderTitle: string;
    ServiceThreeHeaderSemiDescription: string;
    ServiceThreeHeaderVisitBTN:string;
}

export const ServiceThreeHeader: FC<ServiceThreeHeaderProps> = ({
    ServiceThreeHeaderTitle,
    ServiceThreeHeaderSemiDescription,
    ServiceThreeHeaderVisitBTN
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
        <Box sx={{display: {xs: 'bloxk', sm: 'none'}}}>
                <Image src={BannerPageGuttersxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerPageGutterssm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerPageGuttersmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerPageGutterslg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerPageGuttersxl} />
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
                    }} component="h3">{ServiceThreeHeaderTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                            mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p"
                >{ServiceThreeHeaderSemiDescription}</Typography>
                <Button 
                    href="#"
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                >
                    {ServiceThreeHeaderVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
