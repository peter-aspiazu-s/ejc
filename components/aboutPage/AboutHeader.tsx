import {FC} from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


interface AboutHeaderProps {
    aboutTitle: string;
    aboutSemiDescription: string;
    aboutVisitBTN:string;
    aboutLinkMessageWhatsapp: string;
}

export const AboutHeader: FC<AboutHeaderProps> = ({
    aboutTitle,
    aboutSemiDescription,
    aboutVisitBTN,
    aboutLinkMessageWhatsapp
}) => {

    const backgroundImageXS = '/images/banner-page-about-xs.webp';
    const backgroundImageSM = '/images/banner-page-about-sm.webp';
    const backgroundImageMD = '/images/banner-page-about-md.webp';
    const backgroundImageLG = '/images/banner-page-about-lg.webp';
    const backgroundImageXL = '/images/banner-page-about-xl.webp';

  return (
    <Grid container className='fade-in'>
        <Grid item xs={12}>
            <Box 
                sx={{
                    display: {xs:'block', sm: 'none'},
                    background: `url('${backgroundImageXS}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', sm: 'block', md: 'none'},
                    background: `url('${backgroundImageSM}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', md: 'block', lg: 'none'},
                    background: `url('${backgroundImageMD}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', lg: 'block', xl: 'none'},
                    background: `url('${backgroundImageLG}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
            <Box 
                sx={{
                    display: {xs: 'none', xl: 'block'},
                    background: `url('${backgroundImageXL}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
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
                    }} component="h3">{aboutTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                            mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} 
                    component="p"
                >{aboutSemiDescription}</Typography>
                <Button 
                    href={aboutLinkMessageWhatsapp}
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
