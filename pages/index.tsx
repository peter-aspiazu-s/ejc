import type { NextPage } from 'next'
import { Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SectionAbout } from '../components/about'
import { ServiceSection } from '../components/service'
import { SectionContact } from '../components/contact'
import { CompanySummary } from '../components/companySummary'
import { TypedHome } from '../components/typedHome'
import { Video } from '../components/video'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'EJC - Home'} contentPage={'Our approach is oriented to the management and execution of infrastructure construction, remodeling and repair services'}>
      
      <Box 
        sx={{
          mt: {
            xs: 13, sm: 14, md: 15
            },
          display: {xs: 'block', md: 'none'}
          }}    
      >
        <TypedHome 
          servicesTyped={['Roofing', 'Siding', 'Gutters']}
          viewMore="View More"
        />
      </Box>
      <Box 
        sx={{
          mt: {
            xs: 13, sm: 14, md: 15
            },
          display: {xs: 'none', md: 'block'}
          }}    
      >
        <TypedHome 
          servicesTyped={[
            'Roofing - The construction, cleaning and replacement of roofs at EJC Home Improvement Corp. is one of the best investments a homeowner can make, since the quality of work and the materials installed are of the highest quality...', 
            'Siding - With our siding service your walls will have the right materials to have good quality and aesthetic facades...', 
            'Gutters - At EJC Home Improvement Corp we not only install rain gutters in your house, but we also take care of their maintenance, repair and cleaning to extend their durability thanks to our trained specialists...'
          ]}
          viewMore="View More"
        />
      </Box>
      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>
          <CompanySummary
            companySummaryTitle={'EJC | Home Improvement Corp'}
            companySummaryDescription1={'We are EJC Home Improvement Corp., a well-established company with a long-standing staff, headquartered in New York State. Our focus is oriented towards the management and execution of construction, remodeling and infrastructure repair services...'}
            companySummaryLinkAbout={'/company-information/about'}
            companySummaryMore={'Read more'}
          />
        </Container>
      </Box>
      <Container sx={{py:5}}>
        <Video 
          linkVideo={"https://www.youtube.com/embed/SI7AMlIbqvw"}
        />
      </Container>
      
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'About Us'}
          aboutSemiDescription={'We are EJC Home Improvement Corp., a well-established...'}
          aboutVisitBTN={'Visit The Page'}
          aboutLinkBtn={'/company-information/about'}
        />
      </Box>
    
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Services'}
            service1Title={'Roofing'}
            service1Description={'The construction, cleaning and replacement of roofs at EJC Home Improvement Corp. is one of the best...'}
            service1Link={'/services/roofing'}
            service2Title={'Siding'}
            service2Description={'With our siding service your walls will have the right materials to have good quality and...'}
            service2Link={'/services/siding'}
            service3Title={'Gutters'}
            service3Description={'At EJC Home Improvement Corp we not only install rain gutters in your house, but we also...'}
            service3Link={'/services/gutters'}
            textBtn={'Visit The Page'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contact Us'}
          contactSemiDescription={'Check the different ways to contact us...'}
          contactVisitBTN={'Visit The Page'}
          contactLinkBtn={'/company-information/contact'}
        />
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
