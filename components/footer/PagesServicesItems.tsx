import {FC, useContext} from 'react'
import NextLink from 'next/link';
import { Typography, Link } from '@mui/material';
import { UiContext } from '../../context';

interface FooterProps {
    titleItemsServices: string;
    serviceOne:string;
    linkServiceOne:string;
    serviceTwo:string;
    linkServiceTwo:string;
    serviceThree:string;
    linkServiceThree:string;
    serviceFour:string;
    linkServiceFour:string;
    serviceFive:string;
    linkServiceFive:string;
    serviceSix:string;
    linkServiceSix:string;
}

export const PagesServicesItems: FC<FooterProps> = ({
    titleItemsServices,
    serviceOne,
    linkServiceOne,
    serviceTwo,
    linkServiceTwo,
    serviceThree,
    linkServiceThree,
    serviceFour,
    linkServiceFour,
    serviceFive,
    linkServiceFive,
    serviceSix,
    linkServiceSix,
}) => {

    const { pathname } = useContext(UiContext)

  return (
    <>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb:2, color:'text.disabled' }}>{titleItemsServices}</Typography>
        <NextLink href={linkServiceOne} passHref>
            <Link 
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                // underline={ (pathname === linkServiceOne) ? 'always' : 'hover' }
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceOne}
            </Link>
        </NextLink>
        <NextLink href={linkServiceTwo} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                // underline={ (pathname === linkServiceTwo) ? 'always' : 'hover' }
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceTwo}
            </Link>
        </NextLink>
        <NextLink href={linkServiceThree} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                // underline={ (pathname === linkServiceThree) ? 'always' : 'hover' }
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceThree}
            </Link>
        </NextLink>
        <NextLink href={linkServiceFour} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                // underline={ (pathname === linkServiceThree) ? 'always' : 'hover' }
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceFour}
            </Link>
        </NextLink>
        <NextLink href={linkServiceFive} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceFive}
            </Link>
        </NextLink>
        <NextLink href={linkServiceSix} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === '/none') ? 'always' : 'hover' }
            >
                {serviceSix}
            </Link>
        </NextLink>
    </>
  )
}
