import {FC, MouseEventHandler} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';
import { Grid, Paper, Typography } from '@mui/material';

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

import RoofingWorkImg1 from '../../public/images/roofing-work-img1-border.webp'
import RoofingWorkImg2 from '../../public/images/roofing-work-img2-border.webp'
import RoofingWorkImg3 from '../../public/images/roofing-work-img3-border.webp'
import RoofingWorkImg4 from '../../public/images/roofing-work-img4-border.webp'
import RoofingWorkImg5 from '../../public/images/roofing-work-img5-border.webp'
import RoofingWorkImg6 from '../../public/images/roofing-work-img6-border.webp'
import RoofingWorkImg7 from '../../public/images/roofing-work-img7-border.webp'
import RoofingWorkImg8 from '../../public/images/roofing-work-img8-border.webp'
import RoofingWorkImg9 from '../../public/images/roofing-work-img9-border.webp'
import RoofingWorkImg10 from '../../public/images/roofing-work-img10-border.webp'
import RoofingWorkImg11 from '../../public/images/roofing-work-img11-border.webp'
import RoofingWorkImg12 from '../../public/images/roofing-work-img12-border.webp'
import RoofingWorkImg13 from '../../public/images/roofing-work-img13-border.webp'
import RoofingWorkImg14 from '../../public/images/roofing-work-img14-border.webp'

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
                        width: {xs:290, sm:500, md:700}
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
                            <Image src={RoofingWorkImg1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg6} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg7} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg8} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg9} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg10} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg11} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg12} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg13} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={RoofingWorkImg14} />
                        </SwiperSlide>
                    </Swiper>
                </Paper>
            </Grid>
        </Grid>
  )
}
