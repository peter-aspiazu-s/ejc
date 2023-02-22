import {FC} from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


interface ServiceOneHeaderProps {
    ServiceOneHeaderTitle: string;
    ServiceOneHeaderSemiDescription: string;
    ServiceOneHeaderVisitBTN:string;
    ServiceOneHeaderLinkMessageWhastapp: string;
}

export const ServiceOneHeader: FC<ServiceOneHeaderProps> = ({
    ServiceOneHeaderTitle,
    ServiceOneHeaderSemiDescription,
    ServiceOneHeaderVisitBTN,
    ServiceOneHeaderLinkMessageWhastapp
}) => {

    const backgroundImage = '/images/banner-page-roofing-lg.webp';

  return (
    <Grid container className='fade-in'>
        <Grid item xs={12}>
            <Box 
                sx={{
                    display: {xs: 'block', lg: 'none'},
                    background: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center',
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
                    href={ServiceOneHeaderLinkMessageWhastapp}
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
