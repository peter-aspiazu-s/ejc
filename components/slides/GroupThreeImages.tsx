import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import SlideHomeServiceThreeMobile from '../../public/images/slide-home-service3-mobile.webp'
import SlideHomeServiceThreeDesktop from '../../public/images/slide-home-service3-desktop.webp'

export const GroupThreeImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeServiceThreeMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeServiceThreeDesktop} />
        </Box>
    </>
  )
}
