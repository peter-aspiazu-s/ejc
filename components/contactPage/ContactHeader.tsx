import {FC} from 'react'
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';

import ContactSectionImageDesktop from '../../public/images/contact-section.webp'
import ContactSectionImageMobile from '../../public/images/contact-section2.webp'

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
