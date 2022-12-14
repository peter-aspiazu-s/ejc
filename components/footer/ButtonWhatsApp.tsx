import {FC} from 'react'
import Image from 'next/image';
import { Box, Button } from '@mui/material';

import ButtonWhatsAppImg from '../../public/images/btn-whatsapp.webp'

interface ButtonWhatsAppProps {
    TextButtonWhatsApp: string;
    messageButtonWhatsapp: string;
}

export const ButtonWhatsApp: FC<ButtonWhatsAppProps> = ({
    TextButtonWhatsApp,
    messageButtonWhatsapp,
}) => {

  return (
    <>
        <Box 
            sx={{cursor: 'pointer'}}
        >   
            <Button
                href={messageButtonWhatsapp}
                target="_blank"
            >
                <Image 
                    src={ButtonWhatsAppImg} 
                    width={50} 
                    height={50}
                    title={TextButtonWhatsApp}
                />
            </Button>
        </Box>
    </>
  )
}
