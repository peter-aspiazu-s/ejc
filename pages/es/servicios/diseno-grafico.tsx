import type { NextPage } from 'next'
import { Typography, Container, Grid } from '@mui/material'
import { PlantillaLayoutEs } from '../../../components/layout'
import EngineeringIcon from '@mui/icons-material/Engineering'

const ServiceTwoPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - ServiceTwo'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Container sx={{mt: {xs: 5, sm: 7, md: 8}, py: 5}}>
        <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: {xs: '40px', sm: '60px', md: '80px'}, color:'text.disabled', textAlign: 'center'}}>Página en mantenimiento</Typography>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <EngineeringIcon sx={{fontSize: {xs: '260px', sm: '280px', md: '300px'}, color:'text.disabled', textAlign: 'center'}} />
          </Grid>
        </Grid>
      </Container>
    </PlantillaLayoutEs>
  )
}

export default ServiceTwoPage