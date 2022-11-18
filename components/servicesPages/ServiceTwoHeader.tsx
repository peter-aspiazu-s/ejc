import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import BannerPageSidingxs from '../../public/images/banner-page-siding-xs.webp'
import BannerPageSidingsm from '../../public/images/banner-page-siding-sm.webp'
import BannerPageSidingmd from '../../public/images/banner-page-siding-md.webp'
import BannerPageSidinglg from '../../public/images/banner-page-siding-lg.webp'
import BannerPageSidingxl from '../../public/images/banner-page-siding-xl.webp'

interface ServiceTwoHeaderProps {
    ServiceTwoHeaderTitle: string;
    ServiceTwoHeaderSemiDescription: string;
    ServiceTwoHeaderVisitBTN:string;
    ServiceTwoHeaderLinkMessageWhastapp: string;
}

export const ServiceTwoHeader: FC<ServiceTwoHeaderProps> = ({
    ServiceTwoHeaderTitle,
    ServiceTwoHeaderSemiDescription,
    ServiceTwoHeaderVisitBTN,
    ServiceTwoHeaderLinkMessageWhastapp
}) => {
  return (
    <Grid container className="animate__animated animate__fadeIn">
        <Grid item xs={12}>
        <Box sx={{display: {xs: 'bloxk', sm: 'none'}}}>
                <Image src={BannerPageSidingxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerPageSidingsm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerPageSidingmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerPageSidinglg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerPageSidingxl} />
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
                    }} component="h3">{ServiceTwoHeaderTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                            mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p"
                >{ServiceTwoHeaderSemiDescription}</Typography>
                <Button 
                    href={ServiceTwoHeaderLinkMessageWhastapp}
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                >
                    {ServiceTwoHeaderVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
