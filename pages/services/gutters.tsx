import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'
import { ServiceThreeHeader, ServiceThreeMore } from '../../components/servicesPages'

const GuttersPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Gutters'} contentPage={'Gutters services'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceThreeHeader 
          ServiceThreeHeaderTitle={'Gutters'}
          ServiceThreeHeaderSemiDescription={'At EJC Home Improvement Corp we not only carry out rain gutter installations in your home, but we also take care of their maintenance, repair and cleaning to extend their durability thanks to our trained specialists.'}
          ServiceThreeHeaderVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceThreeMore 
          serviceThreeMoreTitle={'More about the service'}
          serviceThreeMoreDescription1={'EJC Home Improvement Corp is the best option for an efficient installation of rain gutters since we work with highly durable materials and ensure that your infrastructure will have the necessary outlet for different weather conditions.'}
          serviceThreeMoreDescription2={'At EJC Home Improvement Corp, we characterize ourselves by providing the best service for our clients, offering a channel at the union of the ceilings, with which it provides a better sealing to prevent leaks, meeting the demands of our clients.'}
          serviceThreeMoreDescription3={'In the case of needing to repair the channels, either due to natural consequences or normal wear and tear, we have experts in the area, for the identification, evaluation and repair of the same, providing the best result.'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default GuttersPage