import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../../components/layout'
import { ServiceTwoHeader, ServiceTwoMore, WorkDoneTwo } from '../../../components/servicesPages'

const ViaMuertaPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Siding'} contentPage={'En EJC Home Improvement Corp en nuestro servicio de siding, generamos un revestimiento que ayuda al cuidado y mantenimiento de cualquier infraestructura, haciéndola más duradera y protegida del exterior.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceTwoHeader 
          ServiceTwoHeaderTitle={'Siding'}
          ServiceTwoHeaderSemiDescription={'Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas de buena calidad y estética.'}
          ServiceTwoHeaderVisitBTN={'Contáctanos'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceTwoMore 
          serviceTwoMoreTitle={'Más sobre el servicio'}
          serviceTwoMoreDescription1={'Ofrecemos las mejoras que se acoplen a las necesidades de tu infraestructura, ya que contamos con un capital humano experto en el área, capaces de un trabajo de calidad que te permitirá sentirte satisfecho.'}
          serviceTwoMoreDescription2={'En EJC Home Improvement Corp en nuestro servicio de siding, generamos un revestimiento que ayuda al cuidado y mantenimiento de cualquier infraestructura, haciéndola más duradera y protegida del exterior.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDoneTwo 
          workDoneTwo={'Trabajos Realizados'}
        />
      </Container>
    </PlantillaLayoutEs>
  )
}

export default ViaMuertaPage