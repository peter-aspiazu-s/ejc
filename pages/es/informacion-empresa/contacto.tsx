import type { NextPage } from 'next'
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { PlantillaLayoutEs } from '../../../components/layout'
import { ContactDirect, ContactHeader, ContactForm } from '../../../components/contactPage';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Contacto'} contentPage={'Página con información para contactarnos'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ContactHeader 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Ponte en contacto con un experto'}
          contactVisitBTN={'Contactar'}
        />
      </Box>
      <Container sx={{py:5}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{fontSize: {xs:'25px', sm:'40px', md:'50px'}, color: 'text.disabled', textAlign: 'center', mb: 3}}>Formulario de Contacto</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12} md={6} sx={{mb:{xs: 5, md: 0}}}>
            <ContactForm 
              labelName={'Nombre'}
              labelEmail={'Correo'}
              labelComment={'Mensaje'}
              btnSubmit={'Enviar'}
              warningMessage={'Su mensaje se envió con éxito'}
              nameErrorMessage={'El nombre es requerido'}
              emailErrorMessage={'El correo es incorrecto'}
              messageErrorMessage={'El mensaje es requerido y debe tener 10 o más letras'}
              warningMessageInput={'Ingrese un valor'}
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
              textBtnContact={'Contactar'}
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
    </PlantillaLayoutEs>
  )
}

export default ContactPage