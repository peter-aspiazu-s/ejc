import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';
import { Box, Grid, Paper, Typography } from '@mui/material';

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

import RoofingWorkImg4 from '../../public/images/roofing-work-img4-border.webp'
import RoofingWorkImg6 from '../../public/images/roofing-work-img6-border.webp'
import RoofingWorkImg7 from '../../public/images/roofing-work-img7-border.webp'
import RoofingWorkImg10 from '../../public/images/roofing-work-img10-border.webp'
import RoofingWorkImg11 from '../../public/images/roofing-work-img11-border.webp'

interface WorkDoneProps {
    workDone: string;
}

export const WorkDone: FC<WorkDoneProps> = ({
    workDone
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
                    {workDone}
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
                            <Image src={RoofingWorkImg4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg6} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg7} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg10} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg11} />
                        </SwiperSlide>
                    </Swiper>

                </Paper>
            </Grid>
        </Grid>
  )
}
