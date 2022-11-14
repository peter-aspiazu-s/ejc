import {FC} from 'react'
import { Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface FooterProps {
    contactUs:string;
    linkContactFooter: string;
}

export const ContactSocialMedia: FC<FooterProps> = ({ 
    contactUs,
    linkContactFooter 
}) => {
  return (
    <>  
        <Button 
            variant="contained" 
            size="large" 
            fullWidth 
            color="secondary"
            sx={{
                mb: 3,
                fontSize: {xs: '0.8rem', xl: '1rem'}
            }}
            href={linkContactFooter}
            target="_blank"
        >
            {contactUs}
        </Button>
        <IconButton color="secondary" href="#" target="_blank">
            <FacebookIcon />
        </IconButton>
        <IconButton color="secondary" href="#" target="_blank">
            <InstagramIcon />
        </IconButton>
        {/* <IconButton color="secondary" href="#" target="_blank">
            <TwitterIcon />
        </IconButton> */}
        <IconButton color="secondary" href="#" target="_blank">
            <YouTubeIcon />
        </IconButton>
    </>
  )
}
