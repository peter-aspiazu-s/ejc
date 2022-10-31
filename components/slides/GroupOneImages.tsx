import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';


import SlideHomeServiceOneMobile from '../../public/images/slide-home-service1-mobile.webp'
import SlideHomeServiceOneDesktop from '../../public/images/slide-home-service1-desktop.webp'

export const GroupOneImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeServiceOneMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeServiceOneDesktop} />
        </Box>
    </>
  )
}
