import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';


import SlideHomeServiceTwoMobile from '../../public/images/slide-home-service2-mobile.webp'
import SlideHomeServiceTwoDesktop from '../../public/images/slide-home-service2-desktop.webp'

export const GroupTwoImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeServiceTwoMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeServiceTwoDesktop} />
        </Box>
    </>
  )
}
