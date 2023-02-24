import {FC} from 'react';
import Typed from 'react-typed';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { scrollButtonBannerHome } from '../../helpers';


interface TypedHomeProps {
    servicesTyped: string[];
    viewMore: string;
}

export const TypedHome:FC<TypedHomeProps> = ({
    servicesTyped,
    viewMore
}) => {

    const handleClickButton = (e: any) => {
        e.preventDefault();
        scrollButtonBannerHome(e);
    }

    const backgroundImageXS = '/images/banner-slide-home-img1-xs.webp';
    const backgroundImageSM = '/images/banner-slide-home-img1-sm.webp';
    const backgroundImageMD = '/images/banner-slide-home-img1-md.webp';
    const backgroundImageLG = '/images/banner-slide-home-img1-lg.webp';
    const backgroundImageXL = '/images/banner-slide-home-img1-xl.webp';
    
  return (
    <Grid 
        container 
        sx={{
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center'
        }}
        className="fade-in"    
    > 
        <Grid item xs={12}>
            <Box 
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    background: `url('${backgroundImageXS}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }}
            >
            </Box>
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
            >
            </Box>
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
            >
            </Box>
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
            >
            </Box>
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
            >
            </Box>
        </Grid>
        
        <Grid container sx={{
            position:"absolute",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            px:{md:3},
        }}>
            <Grid 
                item 
                xs={12} 
                sx={{
                    mb:{xs: 2, sm: 3, md: 4, lg: 1}, 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'start', 
                }}>
                <Typed
                    strings={servicesTyped}
                    typeSpeed={40}
                    loop
                    style={{
                        color: "#fff",
                        fontSize: "1.4rem",
                        textAlign: 'center'
                    }}
                />
            </Grid>
            <Grid item>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={handleClickButton}
                    href="#servicesection"
                >
                    {viewMore}
                </Button>
            </Grid>
        </Grid>
    </Grid>
  )
}
