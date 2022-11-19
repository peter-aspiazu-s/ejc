import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'
import { ServiceThreeHeader, ServiceThreeMore, WorkDoneThree } from '../../components/servicesPages'

const GuttersPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Gutters'} contentPage={'EJC Home Improvement Corp is the best option for an efficient installation of rain gutters since we work with highly durable materials and ensure that your infrastructure will have the necessary outlet for different weather conditions.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceThreeHeader 
          ServiceThreeHeaderTitle={'Gutters'}
          ServiceThreeHeaderSemiDescription={'In EJC Home Improvement Corp in our siding service, we generate a coating that helps the care and maintenance of any infrastructure, making it more durable and protected from the outside.'}
          ServiceThreeHeaderVisitBTN={'Contact'}
          ServiceThreeHeaderLinkMessageWhastapp={'https://wa.link/6tn2re'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceThreeMore 
          serviceThreeMoreTitle={'More about the service'}
          serviceThreeMoreDescription1={'EJC Home Improvement Corp is the best option for an efficient installation of rain gutters since we work with highly durable materials and we make sure that your infrastructure will have the necessary drainage for the different weather conditions.'}
          serviceThreeMoreDescription2={'In EJC Home Improvement Corp, we are characterized in offering the best service for our clients, offering in the union of the roofs a gutter, which provides a better sealing to avoid filtrations, fulfilling the demands of our clients.'}
          serviceThreeMoreDescription3={'In the case of needing to repair the gutters, either by natural consequences or by normal wear and tear, we have experts in the area, for the identification, evaluation and repair of the same, providing the best result.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDoneThree 
          workDoneThree={'Work Done'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default GuttersPage