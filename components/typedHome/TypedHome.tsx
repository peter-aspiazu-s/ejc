import {FC} from 'react'
import Typed from 'react-typed'
import Image from 'next/image'
import {Grid, Box, Button} from '@mui/material'
import { scrollButtonBannerHome } from '../../helpers'

import BannerSlideHomeImg1xs from '../../public/images/banner-slide-home-img1-xs.webp'
import BannerSlideHomeImg1sm from '../../public/images/banner-slide-home-img1-sm.webp'
import BannerSlideHomeImg1md from '../../public/images/banner-slide-home-img1-md.webp'
import BannerSlideHomeImg1lg from '../../public/images/banner-slide-home-img1-lg.webp'
import BannerSlideHomeImg1xl from '../../public/images/banner-slide-home-img1-xl.webp'

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
            <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                <Image src={BannerSlideHomeImg1xs} />
            </Box>
            <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
                <Image src={BannerSlideHomeImg1sm} />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
                <Image src={BannerSlideHomeImg1md} />
            </Box>
            <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
                <Image src={BannerSlideHomeImg1lg} />
            </Box>
            <Box sx={{display: {xs: 'none', xl: 'block'}}}>
                <Image src={BannerSlideHomeImg1xl} />
            </Box>
        </Grid>
        
        <Grid container sx={{
            position:"absolute",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            px:{md:3}
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
