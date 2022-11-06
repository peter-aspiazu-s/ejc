import {FC} from 'react'
import Image from 'next/image';
import { Grid, Card, CardActionArea, CardContent, Typography, Link, CardActions, Button, CardMedia } from '@mui/material';

import PublicIcon from '@mui/icons-material/Public';

interface AboutPersonalProps {
    about1Name: string;
    about1Position: string;
    about1Phone: string;
    about1Email: string;
    about2Name: string;
    about2Position: string;
    about2Phone: string;
    about2Email: string;
    textBtnAbout: string;
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
}) => {
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{width:{xs: 300, sm: 400, md: 500}, maxWidth: 600, backgroundColor: 'primary.dark', py: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Image src="/images/antonio-g-caguana.webp" width={300} height={300} /> */}
                    <CardMedia
                        component="img"
                        sx={{width:{xs: 250, sm:350, lg:400}}}
                        image="/images/antonio-g-caguana-border.webp"
                        alt="luego pondre algo"
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
                        <Link href={`tel:${about1Phone}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center', 
                                    mb:2}}>
                                +{about1Phone}
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
                        href="#"
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
                    {/* <Image src="/images/maria-t-loja.webp" width={400} height={400} /> */}
                    <CardMedia
                        component="img"
                        sx={{width:{xs: 250, sm:350, lg:400}}}
                        image="/images/maria-t-loja-border.webp"
                        alt="luego pondre algo"
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
                        <Link href={`tel:${about2Phone}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center', 
                                mb:2}}>
                                +{about2Phone}
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
                        href="#"
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