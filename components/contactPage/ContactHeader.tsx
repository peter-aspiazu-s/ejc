import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import BannerPageContactxs from '../../public/images/banner-page-contact-xs.webp'
import BannerPageContactsm from '../../public/images/banner-page-contact-sm.webp'
import BannerPageContactmd from '../../public/images/banner-page-contact-md.webp'
import BannerPageContactlg from '../../public/images/banner-page-contact-lg.webp'
import BannerPageContactxl from '../../public/images/banner-page-contact-xl.webp'

interface SectionContactProps {
    contactTitle: string;
    contactSemiDescription: string;
    contactVisitBTN:string;
}

export const ContactHeader: FC<SectionContactProps> = ({
    contactTitle,
    contactSemiDescription,
    contactVisitBTN,
}) => {
  return (
    <Grid container className="animate__animated animate__fadeIn">
        <Grid item xs={12}>
            <Box sx={{display: {xs: 'bloxk', sm: 'none'}}}>
                <Image src={BannerPageContactxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerPageContactsm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerPageContactmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerPageContactlg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerPageContactxl} />
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
                    }} component="h3">{contactTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                        mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} component="p">{contactSemiDescription}</Typography>
                <Button 
                    href="https://walink.co/5e72b8"
                    target="_blank" 
                    variant="contained" 
                    color="secondary" 
                    size={'large'} 
                    sx={{fontSize: {xs:'14px'}}}
                >
                    {contactVisitBTN}
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
