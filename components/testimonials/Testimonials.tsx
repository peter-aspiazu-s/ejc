import {FC} from 'react'
import { Grid, Box, Typography } from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react'

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Navigation} from 'swiper'
import Image from 'next/image';

import TechnologyCss from '../../public/images/tecnology-css.webp'

interface TestimonialsProps {
    testimonialsTitle: string;
    clientTestimonial1: string;
    nameClient1: string;
    clientTestimonial2: string;
    nameClient2: string;
}

export const Testimonials: FC<TestimonialsProps> = ({
    testimonialsTitle,
    clientTestimonial1,
    nameClient1,
    clientTestimonial2,
    nameClient2,
}) => {
  return (
    <Grid container>
        <Grid item xs={12} sx={{textAlign: 'center', mb: 3}}>
            <Typography 
                component="h4" 
                sx={{
                    color: 'text.disabled', 
                    fontSize: {
                        xs: '1.4rem', 
                        sm: '1.5rem', 
                        md: '1.7rem', 
                        lg: '1.8rem', 
                        xl: '1.9rem'}
                    }}
                >
                    {testimonialsTitle}
                </Typography>
        </Grid>
        <Grid item xs={12}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', px:{xs: 1, sm: 2, md:10, lg:20}}}>
                        <Grid item xs={12} md={3} lg={4}>
                            <Image src={TechnologyCss} />
                        </Grid>
                        <Grid item xs={12} md={9} lg={8} sx={{display: 'flex', textAlign: {md:'left'}, flexDirection: 'column', justifyContent: 'center', alignItems:{md:'start'}}}>
                            <Typography 
                                sx={{
                                    color: 'text.disabled', 
                                    fontSize: {xs: '0.9rem', md: '1rem'}, 
                                    mb:{xs:2}
                                }} 
                                component="p"
                            >
                                {clientTestimonial1}
                            </Typography>
                            <Typography 
                                sx={{
                                    color: 'text.disabled',
                                    fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'}
                                }} 
                                component="p"
                                >
                                    {nameClient1}.
                                </Typography>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', px:{xs: 1, sm: 2, md:10, lg:20}}}>
                        <Grid item xs={12} md={3} lg={4}>
                            <Image src={TechnologyCss} />
                        </Grid>
                        <Grid item xs={12} md={9} lg={8} sx={{display: 'flex', textAlign: {md:'left'}, flexDirection: 'column', justifyContent: 'center', alignItems:{md:'start'}}}>
                            <Typography 
                                sx={{
                                    color: 'text.disabled', 
                                    fontSize: {xs: '0.9rem', md: '1rem'}, 
                                    mb:{xs:2}
                                }} 
                                component="p"
                            >
                                {clientTestimonial2}
                            </Typography>
                            <Typography 
                                sx={{
                                    color: 'text.disabled',
                                    fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'}
                                }} 
                                component="p"
                            >
                                {nameClient2}.
                            </Typography>
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Grid>
    </Grid>
  )
}
