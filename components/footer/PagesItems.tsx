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
}

export const PagesItems: FC<FooterProps> = ({
    titleItems,
    home,
    linkHome,
    contact,
    linkContact,
    about,
    linkAbout,
}) => {

    const { pathname } = useContext(UiContext)

  return (
    <>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb:2, color:'text.disabled' }}>{titleItems}</Typography>
        <NextLink href={linkHome} passHref>
            <Link 
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                underline={ pathname === linkHome ? 'always' : 'hover' }
            >
                {home}
            </Link>
        </NextLink>
        <NextLink href={linkAbout} passHref>
            <Link 
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === linkAbout) ? 'always' : 'hover' }
            >
                {about}
            </Link>
        </NextLink>
        <NextLink href={linkContact} passHref>
        <Link 
            variant="overline" 
            sx={{ mb:1, display: 'block', color:'text.disabled', textDecorationColor:'#90a4ae' }}
            underline={ (pathname === linkContact) ? 'always' : 'hover' }
        >
            {contact}
        </Link>
        </NextLink>
    </>
  )
}
