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
          titleSlide1={'Service 1'}
          descriptionService1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath1={'/'}
          titleSlide2={'Service 2'}
          descriptionService2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath2={'/'}
          titleSlide3={'Service 3'}
          descriptionService3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath3={'/'}
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
          aboutLinkBtn={'/about'}
        />
      </Box>
    
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Services'}
            service1Title={'Service 1'}
            service1Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service1Link={'/'}
            service2Title={'Service 2'}
            service2Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service2Link={'/'}
            service3Title={'Service 3'}
            service3Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service3Link={'/'}
            textBtn={'Visit The Page'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contact Us'}
          contactSemiDescription={'Check the different ways to contact us...'}
          contactVisitBTN={'Visit The Page'}
          contactLinkBtn={'/contact'}
        />
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
