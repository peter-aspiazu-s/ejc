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

    const backgroundImage = '/images/banner-slide-home-img1-lg.webp';
    
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
                    display: 'block',
                    background: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }} 
            ></Box>
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
