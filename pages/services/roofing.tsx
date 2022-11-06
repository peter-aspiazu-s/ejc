import type { NextPage } from 'next'
import { Box, Container } from '@mui/material';
import { PlantillaLayout } from '../../components/layout'
import { ServiceOneHeader, ServiceOneMore, WorkDone } from '../../components/servicesPages';

const RoofingPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Roofing'} contentPage={'Roofing services'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceOneHeader 
          ServiceOneHeaderTitle={'Roofing'}
          ServiceOneHeaderSemiDescription={'Construction and roof replacement at EJC Home Improvement Corp. is one of the best investments a homeowner can make, as the quality of work and materials installed are of high quality.'}
          ServiceOneHeaderVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceOneMore 
          serviceOneMoreTitle={'More about the service'}
          serviceOneMoreDescription1={'That is why a timely repair is considered necessary in order to have adequate maintenance and avoid major expenses in the future.'}
          serviceOneMoreDescription2={'At EJC Home Improvement Corp, our priority is to help our customers ensure that their roofs receive the best repairs, using quality materials, helping them last for several years without the need for short-term replacement.'}
          serviceOneMoreDescription3={'It is worth mentioning that our ceilings and designs have added value, since they can be customized to the needs of our customers, in order to improve their durability.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDone 
          workDone={'Work Done'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default RoofingPage