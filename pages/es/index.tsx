import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { SlideHome } from '../../components/slides'
import { Technologies } from '../../components/technologies'
import { Testimonials } from '../../components/testimonials'
import { SectionAbout } from '../../components/about'
import { ServiceSection } from '../../components/service'
import { SectionContact } from '../../components/contact'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Home'} contentPage={'Servicios de construcción'}>
      <Box sx={{mt: {xs: 17, sm: 18}}}>
        <SlideHome 
          titleSlide1={'Servicio 1'}
          descriptionService1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath1={'/es'}
          titleSlide2={'Servicio 2'}
          descriptionService2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath2={'/es'}
          titleSlide3={'Servicio 3'}
          descriptionService3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath3={'/es'}
          start={'Empezar'}
        />
      </Box>
      <Box sx={{mt: -1, mb: 5, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Marcas'}
            technologiesSubTitle={'Marcas de confianza con las que trabajamos'}
          />
        </Container>
      </Box>
      <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Testimonios de Clientes'}
          clientTestimonial1={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient1={'Nombre cliente'}
          clientTestimonial2={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient2={'Nombre cliente'}
        />
      </Box>
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'Sobre Nosotros'}
          aboutSemiDescription={'Somos EJC Home Improvement Corp. una empresa consolidada, con...'}
          aboutVisitBTN={'Visitar Página'}
          aboutLinkBtn={'/es/nosotros'}
        />
      </Box>
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Servicios'}
            service1Title={'Servicio 1'}
            service1Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service1Link={'/es'}
            service2Title={'Servicio 2'}
            service2Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service2Link={'/es'}
            service3Title={'Servicio 3'}
            service3Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service3Link={'/es'}
            textBtn={'Visitar Página'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Revisa las diferentes formas de contactarnos...'}
          contactVisitBTN={'Visitar Página'}
          contactLinkBtn={'/es/contacto'}
        />
      </Box>
    </PlantillaLayoutEs>
  )
}

export default HomePage
