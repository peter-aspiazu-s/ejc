import {FC, useContext} from 'react'
import NextLink from 'next/link';
import { Typography, Link } from '@mui/material'
import { UiContext } from '../../context';

interface FooterProps {
    titleItems:string;
    home:string;
    linkHome:string;
    contact:string;
    linkContact:string;
    about:string;
    linkAbout:string;
    frequentQuestions: string;
    linkFrequentQuestions: string;
}

export const PagesItems: FC<FooterProps> = ({
    titleItems,
    home,
    linkHome,
    contact,
    linkContact,
    about,
    linkAbout,
    frequentQuestions,
    linkFrequentQuestions,
}) => {

    const { pathname } = useContext(UiContext)

  return (
    <>
        <Typography 
            sx={{ 
                fontWeight: 'bold', 
                mb:2, 
                color:'text.disabled',
                fontSize:{xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}
            }}>{titleItems}</Typography>
        <NextLink href={linkHome} passHref>
            <Link 
                variant="overline" 
                sx={{
                    mb:1, 
                    display: 'block', 
                    color:'text.disabled',
                    textDecorationColor:'#90a4ae',
                    fontSize: {xs:'0.7rem'}
                }}
                underline={ pathname === linkHome ? 'always' : 'hover' }
            >
                {home}
            </Link>
        </NextLink>
        <NextLink href={linkAbout} passHref>
            <Link 
                variant="overline" 
                sx={{ 
                    mb:1, 
                    display: 'block', 
                    color:'text.disabled', 
                    textDecorationColor:'#90a4ae',
                    fontSize: {xs:'0.7rem', xl: '0.8rem'}
                }}
                underline={ (pathname === linkAbout) ? 'always' : 'hover' }
            >
                {about}
            </Link>
        </NextLink>
        <NextLink href={linkContact} passHref>
        <Link 
            variant="overline" 
            sx={{ 
                mb:1, 
                display: 'block', 
                color:'text.disabled', 
                textDecorationColor:'#90a4ae',
                fontSize: {xs:'0.7rem', xl: '0.8rem'}
            }}
            underline={ (pathname === linkContact) ? 'always' : 'hover' }
        >
            {contact}
        </Link>
        </NextLink>
        <NextLink href={linkFrequentQuestions} passHref>
        <Link 
            variant="overline" 
            sx={{ 
                mb:1, 
                display: 'block', 
                color:'text.disabled', 
                textDecorationColor:'#90a4ae',
                fontSize: {xs:'0.7rem', xl: '0.8rem'}
            }}
            underline={ (pathname === linkFrequentQuestions) ? 'always' : 'hover' }
        >
            {frequentQuestions}
        </Link>
        </NextLink>
    </>
  )
}
