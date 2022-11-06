import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'
import { ServiceTwoHeader, ServiceTwoMore, WorkDoneTwo } from '../../components/servicesPages'

const SidingPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Siding'} contentPage={'Siding services'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceTwoHeader 
          ServiceTwoHeaderTitle={'Siding'}
          ServiceTwoHeaderSemiDescription={'With our siding service your walls will have the right materials to have facades of good quality and aesthetics.'}
          ServiceTwoHeaderVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceTwoMore 
          serviceTwoMoreTitle={'More about the service'}
          serviceTwoMoreDescription1={'We offer the improvements that meet the needs of your infrastructure, since we have expert human capital in the area, capable of quality work that will allow you to feel satisfied.'}
          serviceTwoMoreDescription2={'At EJC Home Improvement Corp in our siding service, we generate a coating that helps care for and maintain any infrastructure, making it more durable and protected from the outside.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDoneTwo 
          workDoneTwo={'Work Done'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default SidingPage