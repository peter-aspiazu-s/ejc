import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { PlantillaLayout } from '../../components/layout'
import { ContactDirect, ContactHeader, ContactForm } from '../../components/contactPage';
import { Location } from '../../components/location';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactPage: NextPage = () => {

  const [scrollAnimation3, setScrollAnimation3] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation3 = document.getElementById('animationScroll');
      let position3: any = animation3?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position3 < windowSize ){
        setScrollAnimation3(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <PlantillaLayout title={'EJC - Contact'} contentPage={'Page with information to contact us'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ContactHeader 
          contactTitle={'Contact Us'}
          contactSemiDescription={'Get in touch with an expert'}
          contactVisitBTN={'contact'}
          contactLinkMessageWhatsapp={'https://wa.link/adxsm0'}
        />
      </Box>
      <Container sx={{py:5}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography 
              sx={{
                fontSize: {
                  xs: '1.4rem', 
                  sm: '1.5rem', 
                  md: '1.7rem', 
                  lg: '1.8rem', 
                  xl: '1.9rem'}, 
                color: 'text.disabled', 
                textAlign: 'center', 
                mb: 3}}>Contact Form</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12} md={6} sx={{mb:{xs: 5, md: 0}}}>
            <ContactForm 
                labelName={'Name'}
                labelEmail={'Email'}
                labelComment={'Message'}
                btnSubmit={'Submit'}
                warningMessage={'your message was sent successfully'}
                nameErrorMessage={'name is required'}
                emailErrorMessage={'The email is incorrect'}
                messageErrorMessage={'The message is required and must have 10 or more letters'}
                warningMessageInput={'Please enter a value'}
              />
          </Grid>
          <Grid item xs={12}>
            <ContactDirect 
              contact1Name={'Antonio G. Caguana'}
              contact1Position={'General Manager'}
              contact1Phone={'99 999999999'}
              contact1Email={'acaguana@ejc-home.com'}
              contact1Link={'https://wa.link/adxsm0'}
              contact2Name={'María T. Loja'}
              contact2Position={'Administrative Head'}
              contact2Phone={'99 999999999'}
              contact2Email={'mloja@ejc-home.com'}
              contact2Link={'https://wa.link/ers6zv'}
              textBtnContact={'Contact'}
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{py: 3, display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <IconButton 
          color="secondary" 
          href="https://www.facebook.com/profile.php?id=100087763103794&mibextid=LQQJ4d" 
          target="_blank"
        >
          <FacebookIcon 
            sx={{fontSize: {xs:'40px', sm:'60px'}}} 
            id='animationScroll3' 
            className={scrollAnimation3 ? 'animate__animated animate__tada' : ''} 
            display={scrollAnimation3 ? 'block' : 'none'}
          />
        </IconButton>
        <IconButton color="secondary" href="https://instagram.com/ejc.home_improvement_corp?igshid=YmMyMTA2M2Y=" target="_blank">
          <InstagramIcon 
            sx={{fontSize: {xs:'40px', sm:'60px'}}} 
            className={scrollAnimation3 ? 'animate__animated animate__tada' : ''} 
            display={scrollAnimation3 ? 'block' : 'none'}
          />
        </IconButton>
        <IconButton color="secondary" href="https://www.youtube.com/@ejchomeimprovementcorp" target="_blank">
          <YouTubeIcon 
            sx={{fontSize: {xs:'40px', sm:'60px'}}} 
            className={scrollAnimation3 ? 'animate__animated animate__tada' : ''} 
            display={scrollAnimation3 ? 'block' : 'none'}
          />
        </IconButton>
      </Container>
      <Container sx={{py: 3}}>
        <Location 
          titleLocation={'Location'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default ContactPage