import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Grid, Typography, Button, Box } from '@mui/material';

import ContactSectionImageDesktop from '../../public/images/contact-section.webp'
import ContactSectionImageMobile from '../../public/images/contact-section2.webp'

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
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <Image src={ContactSectionImageDesktop} />
            </Box>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <Image src={ContactSectionImageMobile} />
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
                <Typography sx={{fontSize: {xs:'25px', sm:'40px', md:'50px'}, mb: {xs: 1, sm: 3, md: 3, lg: 4}}} component="h3">{contactTitle}</Typography>
                <Typography sx={{fontSize: {xs:'16px', sm:'18px'}, mb: {xs: 2, sm: 3, md: 3, lg: 4}, textAlign:{xs:'center', md:'left'}}} component="p">{contactSemiDescription}</Typography>
                <NextLink href={contactLinkBtn} passHref>
                    <Button variant="contained" color="secondary" size={'large'} sx={{fontSize: {xs:'14px'}}}>{contactVisitBTN}</Button>
                </NextLink>
            </Box>
        </Grid>
    </Grid>
  )
}
