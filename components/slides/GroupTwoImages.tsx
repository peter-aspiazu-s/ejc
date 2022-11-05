import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import BannerSlideHomeImg2xs from '../../public/images/banner-slide-home-img2-xs.webp'
import BannerSlideHomeImg2sm from '../../public/images/banner-slide-home-img2-sm.webp'
import BannerSlideHomeImg2md from '../../public/images/banner-slide-home-img2-md.webp'
import BannerSlideHomeImg2lg from '../../public/images/banner-slide-home-img2-lg.webp'
import BannerSlideHomeImg2xl from '../../public/images/banner-slide-home-img2-xl.webp'

export const GroupTwoImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Image src={BannerSlideHomeImg2xs} />
        </Box>
        <Box sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
            <Image src={BannerSlideHomeImg2sm} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
            <Image src={BannerSlideHomeImg2md} />
        </Box>
        <Box sx={{display: {xs: 'none', lg: 'block', xl: 'none'}}}>
            <Image src={BannerSlideHomeImg2lg} />
        </Box>
        <Box sx={{display: {xs: 'none', xl: 'block'}}}>
            <Image src={BannerSlideHomeImg2xl} />
        </Box>
    </>
  )
}
