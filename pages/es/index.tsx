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
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}}}>
        <SlideHome 
          titleSlide1={'Techumbre'}
          descriptionService1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath1={'/es/servicios/techumbre'}
          titleSlide2={'Vía muerta'}
          descriptionService2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath2={'/es/servicios/via-muerta'}
          titleSlide3={'Canalones'}
          descriptionService3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?'}
          servicePath3={'/es/servicios/canalones'}
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
          aboutLinkBtn={'/es/informacion-empresa/nosotros'}
        />
      </Box>
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Servicios'}
            service1Title={'Techumbre'}
            service1Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service1Link={'/es/servicios/techumbre'}
            service2Title={'Vía muerta'}
            service2Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service2Link={'/es/servicios/via-muerta'}
            service3Title={'Canalones'}
            service3Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
            service3Link={'/es/servicios/canalones'}
            textBtn={'Visitar Página'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Revisa las diferentes formas de contactarnos...'}
          contactVisitBTN={'Visitar Página'}
          contactLinkBtn={'/es/informacion-empresa/contacto'}
        />
      </Box>
    </PlantillaLayoutEs>
  )
}

export default HomePage
