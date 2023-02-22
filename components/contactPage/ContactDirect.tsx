import {FC} from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

// TODO: agregar el alt en todas las imagenes usadas

interface ContactDirectProps {
    contact1Name: string;
    contact1Position: string;
    contact1Phone: string;
    contact1Email: string;
    contact1Link:string;
    contact2Name:string;
    contact2Position: string;
    contact2Phone:string;
    contact2Email:string;
    contact2Link:string;
    textBtnContact: string;
}

export const ContactDirect: FC<ContactDirectProps> = ({
    contact1Name,
    contact1Position,
    contact1Phone,
    contact1Email,
    contact1Link,
    contact2Name,
    contact2Position,
    contact2Phone,
    contact2Email,
    contact2Link,
    textBtnContact,
}) => {
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={5}>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ width:{xs:'300px', sm: '400px'}, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <PhoneCallbackIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{
                                fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', 
                                    xl: '1.6rem'}, 
                                textAlign: 'center', 
                                mb:2}}>
                            {contact1Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {contact1Position}
                        </Typography>
                        <Link href={`tel:+18455389673`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center', 
                                mb:2}}>
                                +1 (845) 538-9673
                            </Typography>
                        </Link>
                        <Link href={`mailto:${contact1Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, textAlign: 'center'}}>
                                {contact1Email}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        href={contact1Link}
                        target="_blank"
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                    >
                        {textBtnContact}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ width:{xs:'300px', sm: '400px'}, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <PhoneCallbackIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{
                                fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', 
                                xl: '1.6rem'}, 
                            textAlign: 'center', mb:2}}>
                            {contact2Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {contact2Position}
                        </Typography>
                        <Link href={`tel:+18458933425`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, textAlign: 'center', mb:2}}>
                                +1 (845) 893-3425
                            </Typography>
                        </Link>
                        <Link href={`mailto:${contact2Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, textAlign: 'center'}}>
                                {contact2Email}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        href={contact2Link}
                        target="_blank"
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                    >
                        {textBtnContact}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}
