import {FC} from 'react'
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BannerPageContactxs from '../../public/images/banner-page-contact-xs.webp'
import BannerPageContactsm from '../../public/images/banner-page-contact-sm.webp'
import BannerPageContactmd from '../../public/images/banner-page-contact-md.webp'
import BannerPageContactlg from '../../public/images/banner-page-contact-lg.webp'
import BannerPageContactxl from '../../public/images/banner-page-contact-xl.webp'

interface SectionContactProps {
    contactTitle: string;
    contactSemiDescription: string;
    contactVisitBTN:string;
    contactLinkMessageWhatsapp: string;
}

export const ContactHeader: FC<SectionContactProps> = ({
    contactTitle,
    contactSemiDescription,
    contactVisitBTN,
    contactLinkMessageWhatsapp
}) => {

    const backgroundImage = '/images/banner-page-contact-lg.webp';

  return (
    <Grid container className='fade-in'>
        <Grid item xs={12}>
            
            <Box 
                sx={{
                    display: {xs: 'block', sm:'none'},
                    background: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPositionX: '-130px',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', sm:'block', lg: 'none'},
                    background: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'left',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', lg: 'block'},
                    background: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>

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
                    href={contactLinkMessageWhatsapp}
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
