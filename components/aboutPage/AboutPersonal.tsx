import {FC} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


interface AboutPersonalProps {
    about1Name: string;
    about1Position: string;
    about1Phone?: string;
    about1Email: string;
    about2Name: string;
    about2Position: string;
    about2Phone?: string;
    about2Email: string;
    textBtnAbout: string;
    aboutt1Link: string;
    aboutt2Link: string;
}

export const AboutPersonal: FC<AboutPersonalProps> = ({
    about1Name,
    about1Position,
    about1Phone,
    about1Email,
    about2Name,
    about2Position,
    about2Phone,
    about2Email,
    textBtnAbout,
    aboutt1Link,
    aboutt2Link,
}) => {
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{width:{xs: 300, sm: 400, md: 500}, maxWidth: 600, backgroundColor: 'primary.dark', py: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia
                        component="img"
                        sx={{width:{xs: 250, sm:350, lg:400}}}
                        image="/images/antonio-g-caguana-border.webp"
                        alt="Antonio Caguana"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about1Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about1Position}
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
                        <Link href={`mailto:${about1Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center'}}>
                                {about1Email}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        href={aboutt1Link}
                        target="_blank"
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                    >
                        {textBtnAbout}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{width:{xs: 300, sm: 400, md: 500}, maxWidth: 600, backgroundColor: 'primary.dark', py: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia
                        component="img"
                        sx={{width:{xs: 250, sm:350, lg:400}}}
                        image="/images/maria-t-loja-border.webp"
                        alt="María Loja"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about2Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about2Position}
                        </Typography>
                        <Link href={`tel:+18458933425`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center', 
                                mb:2}}>
                                +1 (845) 893-3425
                            </Typography>
                        </Link>
                        <Link href={`mailto:${about2Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center'}}>
                                {about2Email}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        href={aboutt2Link}
                        target="_blank"
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                    >
                        {textBtnAbout}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}