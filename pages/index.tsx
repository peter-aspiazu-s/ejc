import type { NextPage } from 'next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { PlantillaLayout } from '../components/layout';
import { SectionAbout } from '../components/about';
import { ServiceSection } from '../components/service';
import { SectionContact } from '../components/contact';
import { CompanySummary } from '../components/companySummary';
import { TypedHome } from '../components/typedHome';
import { Video } from '../components/video';
import { 
  homeTyped, 
  nextSectionFour, 
  nextSectionOne, 
  nextSectionThree, 
  nextSectionTwo,
  nextSectionCertification 
} from '../database/dataHome';
import { Certification } from '../components/certification';


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
          servicesTyped={homeTyped[0]}
          viewMore="View More"
        />
      </Box>

      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>

          <CompanySummary
            companySummaryTitle={nextSectionOne[0].titleSectionOne}
            companySummaryDescription1={nextSectionOne[0].descriptionSectionOne}
            companySummaryLinkAbout={nextSectionOne[0].linkSectionOne}
            companySummaryMore={'Read more'}
          />

        </Container>
      </Box>
      <Container sx={{py:5}}>
        <Video 
          linkVideo={nextSectionOne[0].videoSectionOne}
        />
      </Container>
      
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={nextSectionTwo[0].titleSectionTwo}
          aboutSemiDescription={nextSectionTwo[0].descriptionSectionTwo}
          aboutVisitBTN={'Visit The Page'}
          aboutLinkBtn={nextSectionTwo[0].linkSectionTwo}
        />
      </Box>
    
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={nextSectionThree[0].titleSectionThree}
            service1Title={nextSectionThree[0].subTitleSectionThree[0]}
            service1Description={nextSectionThree[0].descriptionSectionThree[0]}
            service1Link={nextSectionThree[0].linkSectionThree[0]}
            service2Title={nextSectionThree[0].subTitleSectionThree[1]}
            service2Description={nextSectionThree[0].descriptionSectionThree[1]}
            service2Link={nextSectionThree[0].linkSectionThree[1]}
            service3Title={nextSectionThree[0].subTitleSectionThree[2]}
            service3Description={nextSectionThree[0].descriptionSectionThree[2]}
            service3Link={nextSectionThree[0].linkSectionThree[2]}
            textBtn={'Visit The Page'}
          />
        </Container>
      </Box>

      <Box sx={{mt: -1, py:5, backgroundColor: 'primary.light'}}>
        <Container>

          <CompanySummary
            companySummaryTitle={nextSectionCertification[0].titleSectionFour}
            companySummaryDescription1={nextSectionCertification[0].descriptionSectionFour}
            companySummaryLinkAbout={nextSectionCertification[0].linkSectionFour}
            companySummaryMore={'Visit website'}
          />

        </Container>
      </Box>
      <Container sx={{py:5}}>
        <Certification />
      </Container>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={nextSectionFour[0].titleSectionFour}
          contactSemiDescription={nextSectionFour[0].descriptionSectionFour}
          contactVisitBTN={'Visit The Page'}
          contactLinkBtn={nextSectionFour[0].linkSectionFour}
        />
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
