import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { SectionAbout } from '../../components/about'
import { ServiceSection } from '../../components/service'
import { SectionContact } from '../../components/contact'
import { CompanySummary } from '../../components/companySummary'
import { TypedHome } from '../../components/typedHome'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Inicio'} contentPage={'Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras'}>


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
          viewMore="Ver Más"
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
          viewMore="Ver Más"
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
