import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'
import { Technologies } from '../components/technologies'
import { Testimonials } from '../components/testimonials'
import { SectionAbout } from '../components/about'
import { ServiceSection } from '../components/service'
import { SectionContact } from '../components/contact'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'EJC - Home'} contentPage={'Construction services'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}}}>
        <SlideHome 
          titleSlide1={'Roofing'}
          descriptionService1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath1={'/services/roofing'}
          titleSlide2={'Siding'}
          descriptionService2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath2={'/services/siding'}
          titleSlide3={'Gutters'}
          descriptionService3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath3={'/services/gutters'}
          start={'Start'}
        />
      </Box>
      <Box sx={{mt: -1, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Brands'}
            technologiesSubTitle={'Trusted brands we work with'}
          />
        </Container>
      </Box>
      <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Customer Testimonials'}
          clientTestimonial1={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient1={'Client name'}
          clientTestimonial2={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient2={'Client name'}
        />
      </Box>
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'About Us'}
          aboutSemiDescription={'We are EJC Home Improvement Corp. A well-established...'}
          aboutVisitBTN={'Visit The Page'}
          aboutLinkBtn={'/company-information/about'}
        />
      </Box>
    
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Services'}
            service1Title={'Roofing'}
            service1Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service1Link={'/services/roofing'}
            service2Title={'Siding'}
            service2Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service2Link={'/services/siding'}
            service3Title={'Gutters'}
            service3Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
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
