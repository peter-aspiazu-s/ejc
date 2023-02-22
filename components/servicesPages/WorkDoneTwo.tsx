import {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Import CSS Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation} from 'swiper';

import SidingWorkImg1 from '../../public/images/siding-work-img1-border.webp';
import SidingWorkImg3 from '../../public/images/siding-work-img3-border.webp';
import SidingWorkImg7 from '../../public/images/siding-work-img7-border.webp';
import SidingWorkImg10 from '../../public/images/siding-work-img10-border.webp';
import SidingWorkImg14 from '../../public/images/siding-work-img14-border.webp';

interface WorkDoneTwoProps {
    workDoneTwo: string;
}

export const WorkDoneTwo: FC<WorkDoneTwoProps> = ({
    workDoneTwo
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
                    {workDoneTwo}
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
                            <Image src={SidingWorkImg1} alt="siding" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={SidingWorkImg3} alt="siding" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={SidingWorkImg7} alt="siding" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={SidingWorkImg10} alt="siding" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={SidingWorkImg14} alt="siding" />
                        </SwiperSlide>
                    </Swiper>
                </Paper>
            </Grid>
        </Grid>
  )
}
