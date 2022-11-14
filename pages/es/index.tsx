import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { SlideHome } from '../../components/slides'
import { Technologies } from '../../components/technologies'
import { Testimonials } from '../../components/testimonials'
import { SectionAbout } from '../../components/about'
import { ServiceSection } from '../../components/service'
import { SectionContact } from '../../components/contact'
import { CompanySummary } from '../../components/companySummary'
import { TypedHome } from '../../components/typedHome'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Inicio'} contentPage={'Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras'}>
      {/* <Box sx={{mt: {xs: 13, sm: 14, md: 15}}}>
        <SlideHome 
          titleSlide1={'Techumbre'}
          descriptionService1={'La construcción y reemplazo de techos en EJC Home Improvement Corp. es una de las mejores inversiones que un propietario puede hacer, ya que la calidad de trabajo y los materiales instalados son de alta calidad...'}
          servicePath1={'/es/servicios/techumbre'}
          titleSlide2={'Vía muerta'}
          descriptionService2={'Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas de buena calidad y estética...'}
          servicePath2={'/es/servicios/via-muerta'}
          titleSlide3={'Canalones'}
          descriptionService3={'En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino que también nos encargamos de su mantenimiento, reparación y limpieza para alargar su durabilidad gracias a nuestros especialistas capacitados...'}
          servicePath3={'/es/servicios/canalones'}
          start={'Empezar'}
        />
      </Box> */}

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
            'Roofing - La construcción y reemplazo de techos en EJC Home Improvement Corp. es una de las mejores inversiones que un propietario puede hacer, ya que la calidad de trabajo y los materiales instalados son de alta calidad...', 
            'Siding - Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas de buena calidad y estética...', 
            'Gutters - En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino que también nos encargamos de su mantenimiento, reparación y limpieza para alargar su durabilidad gracias a nuestros especialistas capacitados...'
          ]}
        />
      </Box>

      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>
          <CompanySummary
              companySummaryTitle={'EJC | Home Improvement Corp'}
              companySummaryDescription1={'Somos EJC Home Improvement Corp. una empresa consolidada, con personal que cuenta con una gran trayectoria, con sede principal en el Estado de Nueva York. Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras....'}
              companySummaryLinkAbout={'/es/informacion-empresa/nosotros'}
              companySummaryMore={'Leer más'}
            />
        </Container>
      </Box>
      {/* <Box sx={{mt: -1, mb: 5, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Marcas'}
            technologiesSubTitle={'Marcas de confianza con las que trabajamos'}
          />
        </Container>
      </Box> */}
      {/* <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Testimonios de Clientes'}
          clientTestimonial1={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient1={'Nombre cliente'}
          clientTestimonial2={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas eaque sit quis magni quo veritatis officiis?"`}
          nameClient2={'Nombre cliente'}
        />
      </Box> */}
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'Sobre Nosotros'}
          aboutSemiDescription={'Somos EJC Home Improvement Corp., una empresa consolidada, con...'}
          aboutVisitBTN={'Visitar Página'}
          aboutLinkBtn={'/es/informacion-empresa/nosotros'}
        />
      </Box>
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Servicios'}
            service1Title={'Roofing'}
            service1Description={'La construcción y reemplazo de techos en EJC Home Improvement Corp. es una de las mejores inversiones...'}
            service1Link={'/es/servicios/roofing'}
            service2Title={'Siding'}
            service2Description={'Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas...'}
            service2Link={'/es/servicios/siding'}
            service3Title={'Gutters'}
            service3Description={'En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino...'}
            service3Link={'/es/servicios/gutters'}
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
