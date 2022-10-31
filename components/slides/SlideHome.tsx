import {FC} from 'react'
import { Grid } from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react'
import { GroupOneImages } from './GroupOneImages';
import { GroupTwoImages } from './GroupTwoImages';
import { GroupThreeImages } from './GroupThreeImages';
import { ElementSlideWebSite } from './ElementSlideWebSite';
import { ElementSlideGraphicDesign } from './ElementSlideGraphicDesign';
import { ElementSlideEcommerce } from './ElementSlideEcommerce';

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

interface SliderProps {
    titleSlide1: string;
    descriptionService1: string;
    servicePath1: string;
    titleSlide2: string;
    descriptionService2: string;
    servicePath2: string;
    titleSlide3: string;
    descriptionService3: string;
    servicePath3: string;
    start: string;
}

export const SlideHome: FC<SliderProps> = ({
    titleSlide1,
    descriptionService1,
    servicePath1,
    titleSlide2,
    descriptionService2,
    servicePath2,
    titleSlide3,
    descriptionService3,
    servicePath3,
    start,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
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
                    <GroupOneImages />
                    <ElementSlideWebSite
                        titleSlide1={titleSlide1}
                        descriptionService1={descriptionService1}
                        servicePath1={servicePath1}
                        start={start}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GroupTwoImages />
                    <ElementSlideGraphicDesign 
                        titleSlide2={titleSlide2}
                        descriptionService2={descriptionService2}
                        servicePath2={servicePath2}
                        start={start}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GroupThreeImages />
                    <ElementSlideEcommerce 
                        titleSlide3={titleSlide3}
                        descriptionService3={descriptionService3}
                        servicePath3={servicePath3}
                        start={start}
                    />
                </SwiperSlide>
            </Swiper>
        </Grid>
    </Grid>
  )
}
