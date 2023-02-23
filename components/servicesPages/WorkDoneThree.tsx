import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

import GuttersWorkImg1 from '../../public/images/gutters-work-img1-border.webp'
import GuttersWorkImg2 from '../../public/images/gutters-work-img2-border.webp'
import GuttersWorkImg3 from '../../public/images/gutters-work-img3-border.webp'

interface WorkDoneThreeProps {
    workDoneThree: string;
}

export const WorkDoneThree: FC<WorkDoneThreeProps> = ({
    workDoneThree
}) => { 

  return (
        <Grid 
            container  
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Grid item xs={12}>
                <Typography
                    sx={{
                        color: 'text.disabled',
                        fontSize: {
                            xs: '1.4rem', 
                            sm: '1.5rem', 
                            md: '1.7rem', 
                            lg: '1.8rem', 
                            xl: '1.9rem'
                        },
                        textAlign: 'center',
                        mb: 3 
                    }}
                >
                    {workDoneThree}
                </Typography>
            </Grid>
            <Grid 
                item 
                xs={12} 
                sx={{
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center'
                }}>
                <Paper 
                    elevation={3} 
                    sx={{
                        p: {xs:1, sm:2, md:3, lg:4, xl:5},
                        width: {xs:"100%", sm:500, md:700}
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={GuttersWorkImg1} alt="gutters" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={GuttersWorkImg2} alt="gutters" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={GuttersWorkImg3} alt="gutters" />
                        </SwiperSlide>
                    </Swiper>
                </Paper>
            </Grid>
        </Grid>
  )
}
