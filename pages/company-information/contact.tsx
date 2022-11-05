import type { NextPage } from 'next'
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { PlantillaLayout } from '../../components/layout'
import { ContactDirect, ContactHeader, ContactForm } from '../../components/contactPage';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC - Contact'} contentPage={'Page with information to contact us'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ContactHeader 
          contactTitle={'Contact Us'}
          contactSemiDescription={'Get in touch with an expert'}
          contactVisitBTN={'contact'}
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
              contact1Phone={'99 999999999'}
              contact1Email={'example@email.com'}
              contact1Link={'#'}
              contact2Name={'María T. Loja'}
              contact2Phone={'99 999999999'}
              contact2Email={'example@email.com'}
              contact2Link={'#'}
              textBtnContact={'Contact'}
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{py: 3, display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <IconButton color="secondary" href="#" target="_blank">
          <FacebookIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary" href="#" target="_blank">
          <InstagramIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary" href="#" target="_blank">
          <TwitterIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary" href="#" target="_blank">
          <YouTubeIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
      </Container>
    </PlantillaLayout>
  )
}

export default ContactPage