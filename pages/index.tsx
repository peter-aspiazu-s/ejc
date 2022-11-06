import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'
import { Technologies } from '../components/technologies'
import { Testimonials } from '../components/testimonials'
import { SectionAbout } from '../components/about'
import { ServiceSection } from '../components/service'
import { SectionContact } from '../components/contact'
import { CompanySummary } from '../components/companySummary'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'EJC - Home'} contentPage={'Construction services'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}}}>
        <SlideHome 
          titleSlide1={'Roofing'}
          descriptionService1={'Construction and roof replacement at EJC Home Improvement Corp. is one of the best investments a homeowner can make, as the quality of work and materials installed are of high quality...'}
          servicePath1={'/services/roofing'}
          titleSlide2={'Siding'}
          descriptionService2={'With our siding service your walls will have the right materials to have facades of good quality and aesthetics...'}
          servicePath2={'/services/siding'}
          titleSlide3={'Gutters'}
          descriptionService3={'At EJC Home Improvement Corp we not only carry out rain gutter installations in your home, but we also take care of their maintenance, repair and cleaning to extend their durability thanks to our trained specialists...'}
          servicePath3={'/services/gutters'}
          start={'Start'}
        />
      </Box>
      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>
          <CompanySummary
            companySummaryTitle={'EJC | Home Improvement Corp'}
            companySummaryDescription1={'We are EJC Home Improvement Corp, a well-established company with highly experienced staff, headquartered in New York State. Our approach is oriented to the management and execution of infrastructure construction, remodeling and repair services...'}
            companySummaryLinkAbout={'/company-information/about'}
            companySummaryMore={'Read more'}
          />
        </Container>
      </Box>
      {/* <Box sx={{mt: -1, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Brands'}
            technologiesSubTitle={'Trusted brands we work with'}
          />
        </Container>
      </Box> */}
      {/* <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Customer Testimonials'}
          clientTestimonial1={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient1={'Client name'}
          clientTestimonial2={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient2={'Client name'}
        />
      </Box> */}
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
            service1Description={'Construction and roof replacement at EJC Home Improvement Corp. is one of the best...'}
            service1Link={'/services/roofing'}
            service2Title={'Siding'}
            service2Description={'With our siding service your walls will have the right materials to have facades of good...'}
            service2Link={'/services/siding'}
            service3Title={'Gutters'}
            service3Description={'At EJC Home Improvement Corp we not only carry out rain gutter installations in your...'}
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
