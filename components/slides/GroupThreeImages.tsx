import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import BannerSlideHomeImg3xs from '../../public/images/banner-slide-home-img3-xs.webp'
import BannerSlideHomeImg3sm from '../../public/images/banner-slide-home-img3-sm.webp'
import BannerSlideHomeImg3md from '../../public/images/banner-slide-home-img3-md.webp'
import BannerSlideHomeImg3lg from '../../public/images/banner-slide-home-img3-lg.webp'
import BannerSlideHomeImg3xl from '../../public/images/banner-slide-home-img3-xl.webp'

export const GroupThreeImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Image src={BannerSlideHomeImg3xs} />
        </Box>
        <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
            <Image src={BannerSlideHomeImg3sm} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
            <Image src={BannerSlideHomeImg3md} />
        </Box>
        <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
            <Image src={BannerSlideHomeImg3lg} />
        </Box>
        <Box sx={{display: {xs: 'none', xl: 'block'}}}>
            <Image src={BannerSlideHomeImg3xl} />
        </Box>
    </>
  )
}
