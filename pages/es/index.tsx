import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PlantillaLayoutEs } from '../../components/layout';
import { SectionAbout } from '../../components/about';
import { ServiceSection } from '../../components/service';
import { SectionContact } from '../../components/contact';
import { CompanySummary } from '../../components/companySummary';
import { TypedHome } from '../../components/typedHome';
import { Video } from '../../components/video';
import { homeTypedES, nextSectionFourES, nextSectionOneES, nextSectionThreeES, nextSectionTwoES } from '../../database/dataHome';

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
          servicesTyped={homeTypedES[0]}
          viewMore="Ver Más"
        />
      </Box>

      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>
          <CompanySummary
              companySummaryTitle={nextSectionOneES[0].titleSectionOne}
              companySummaryDescription1={nextSectionOneES[0].descriptionSectionOne}
              companySummaryLinkAbout={nextSectionOneES[0].linkSectionOne}
              companySummaryMore={'Leer más'}
            />
        </Container>
      </Box>
      <Container sx={{py:5}}>
        <Video 
          linkVideo={nextSectionOneES[0].videoSectionOne}
        />
      </Container>
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={nextSectionTwoES[0].titleSectionTwo}
          aboutSemiDescription={nextSectionTwoES[0].descriptionSectionTwo}
          aboutVisitBTN={'Visitar Página'}
          aboutLinkBtn={nextSectionTwoES[0].linkSectionTwo}
        />
      </Box>
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={nextSectionThreeES[0].titleSectionThree}
            service1Title={nextSectionThreeES[0].subTitleSectionThree[0]}
            service1Description={nextSectionThreeES[0].descriptionSectionThree[0]}
            service1Link={nextSectionThreeES[0].linkSectionThree[0]}
            service2Title={nextSectionThreeES[0].subTitleSectionThree[1]}
            service2Description={nextSectionThreeES[0].descriptionSectionThree[1]}
            service2Link={nextSectionThreeES[0].linkSectionThree[1]}
            service3Title={nextSectionThreeES[0].subTitleSectionThree[2]}
            service3Description={nextSectionThreeES[0].descriptionSectionThree[2]}
            service3Link={nextSectionThreeES[0].linkSectionThree[2]}
            textBtn={'Visitar Página'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={nextSectionFourES[0].titleSectionFour}
          contactSemiDescription={nextSectionFourES[0].descriptionSectionFour}
          contactVisitBTN={'Visitar Página'}
          contactLinkBtn={nextSectionFourES[0].linkSectionFour}
        />
      </Box>
    </PlantillaLayoutEs>
  )
}

export default HomePage;
