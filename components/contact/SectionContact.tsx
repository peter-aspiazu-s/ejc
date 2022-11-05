import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Grid, Typography, Button, Box } from '@mui/material';

import BannerSectionContactxs from '../../public/images/banner-section-contact-xs.webp'
import BannerSectionContactsm from '../../public/images/banner-section-contact-sm.webp'
import BannerSectionContactmd from '../../public/images/banner-section-contact-md.webp'
import BannerSectionContactlg from '../../public/images/banner-section-contact-lg.webp'
import BannerSectionContactxl from '../../public/images/banner-section-contact-xl.webp'

interface SectionContactProps {
    contactTitle: string;
    contactSemiDescription: string;
    contactVisitBTN:string;
    contactLinkBtn: string;
}

export const SectionContact: FC<SectionContactProps> = ({
    contactTitle,
    contactSemiDescription,
    contactVisitBTN,
    contactLinkBtn,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                <Image src={BannerSectionContactxs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerSectionContactsm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerSectionContactmd} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerSectionContactlg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block',}}}>
                <Image src={BannerSectionContactxl} />
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
                    width: {xs: '100%', md: '50%'},
                    p: {xs: 1, sm: 10}
                }}
            >
                <Typography 
                    sx={{
                        fontSize: {xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'}, 
                        mb: {xs: 1, sm: 3, md: 3, lg: 4}
                    }} component="h3">{contactTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                        mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p">{contactSemiDescription}</Typography>
                <NextLink href={contactLinkBtn} passHref>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size={'large'} 
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}
                    }}>{contactVisitBTN}</Button>
                </NextLink>
            </Box>
        </Grid>
    </Grid>
  )
}
