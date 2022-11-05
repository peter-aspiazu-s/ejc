import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';


import BannerSlideHomeImg1xs from '../../public/images/banner-slide-home-img1-xs.webp'
import BannerSlideHomeImg1sm from '../../public/images/banner-slide-home-img1-sm.webp'
import BannerSlideHomeImg1md from '../../public/images/banner-slide-home-img1-md.webp'
import BannerSlideHomeImg1lg from '../../public/images/banner-slide-home-img1-lg.webp'
import BannerSlideHomeImg1xl from '../../public/images/banner-slide-home-img1-xl.webp'

export const GroupOneImages: FC = () => {
  return (
    <>
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
    </>
  )
}
