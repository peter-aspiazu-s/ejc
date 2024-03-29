import {FC, useState, useEffect} from 'react';
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

import SidingWorkImg3 from '/public/images/siding-work-img3-border.webp';
import SidingWorkImg7 from '/public/images/siding-work-img7-border.webp';
import SidingWorkImg10 from '/public/images/siding-work-img10-border.webp';
import SidingWorkImg14 from '/public/images/siding-work-img14-border.webp';
import SidingWorkImg15 from '/public/images/siding-work-img15-border.webp';
import SidingWorkImg16 from '/public/images/siding-work-img16-border.webp';

interface WorkDoneTwoProps {
    workDoneTwo: string;
}

export const WorkDoneTwo: FC<WorkDoneTwoProps> = ({
    workDoneTwo
}) => { 

    const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation = document.getElementById('animationScroll');
      let position: any = animation?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position < windowSize ){
        setScrollAnimation(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
        <Grid 
            container  
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
            id='animationScroll' 
            className={scrollAnimation ? 'animate__animated animate__backInLeft' : ''} 
            display={scrollAnimation ? 'block' : 'none'}
        >
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
                        <SwiperSlide>
                            <Image src={SidingWorkImg15} alt="siding" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={SidingWorkImg16} alt="siding" />
                        </SwiperSlide>
                    </Swiper>
                </Paper>
            </Grid>
        </Grid>
  )
}
