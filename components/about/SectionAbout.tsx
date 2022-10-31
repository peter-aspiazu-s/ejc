import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Grid, Typography, Button, Box } from '@mui/material';

import AboutSectionImageDesktop from '../../public/images/about-section.webp'
import AboutSectionImageMobile from '../../public/images/about-section2.webp'

interface SectionAboutProps {
    aboutTitle: string;
    aboutSemiDescription: string;
    aboutVisitBTN:string;
    aboutLinkBtn: string;
}

export const SectionAbout: FC<SectionAboutProps> = ({
    aboutTitle,
    aboutSemiDescription,
    aboutVisitBTN,
    aboutLinkBtn,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <Image src={AboutSectionImageDesktop} />
            </Box>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <Image src={AboutSectionImageMobile} />
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
                <Typography sx={{fontSize: {xs:'25px', sm:'40px', md:'50px'}, mb: {xs: 1, sm: 3, md: 3, lg: 4}}} component="h3">{aboutTitle}</Typography>
                <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{aboutSemiDescription}</Typography>
                <NextLink href={aboutLinkBtn} passHref>
                    <Button variant="contained" color="secondary" size={'large'} sx={{fontSize: {xs:'14px'}}}>{aboutVisitBTN}</Button>
                </NextLink>
            </Box>
        </Grid>
    </Grid>
  )
}
