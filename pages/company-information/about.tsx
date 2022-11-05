import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'
import { AboutHeader, AboutMisionVision, AboutPersonal, AboutMore, AboutBusinessValues } from '../../components/aboutPage'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC - About'} contentPage={'Page with information about us'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'About Us?'}
          aboutSemiDescription={'We are EJC Home Improvement Corp. A well-established company with highly experienced staff, headquartered in New York State. Our approach is oriented to the management and execution of infrastructure construction, remodeling and repair services.'}
          aboutVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py:5}}>
        <AboutMore 
          aboutMoreTitle={'More About Us'}
          aboutMoreDescription1={'The main asset of the organization is the human capital of our employees, made up of a large group of highly experienced technicians in the development of the services we offer. Under this premise we develop the projects, demanding in each of them the maximum effectiveness of our staff, in order to obtain the quality guaranteed by our years in the construction sector.'}
          aboutMoreDescription2={'The employees of EJC Home Improvement Corp. contribute with their effort, dedication and affection to each work as if it were their own, which has led it to be recognized for its dedication and work invested in each project.'}
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Mision'}
          descriptionMision={'We are a company dedicated to the construction, remodeling and repair of infrastructures, whose mission is to satisfy the needs of our clients; before, during and after completion of the project. Complying with the quality standards within the established deadlines through a control of our finished products.'}
          titleVision={'Vision'}
          descriptionVision={'To be the reference construction, remodeling and repair company at the regional level that leads the market, through the timely fulfillment of each and every one of the entrusted works. The well-being of our collaborators is important, so that they feel motivated and proud to belong to the organization.'} 
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Antonio G. Caguana'}
          about1Position={'General Manager'}
          about1Phone={'99 999999999'}
          about1Email={'example@email.com'}
          about2Name={'María T. Loja'}
          about2Position={'Administrative Head'}
          about2Phone={'99 999999999'}
          about2Email={'example@email.com'}
          textBtnAbout={'Contact'}
        />
      </Container>
      <Container sx={{py:5}}>
        <AboutBusinessValues 
          aboutBusinessValuesTitle={'Business values'}
          aboutBusinessValuesSubtitle1={'Commitment'}
          aboutBusinessValuesDescription1={'Fulfill the promised word. Be consistent with what is said and done.'}
          aboutBusinessValuesSubtitle2={'Ethics'}
          aboutBusinessValuesDescription2={'Carry out the work with professionalism, honesty, loyalty and dedication, based on institutional rules and regulations.'}
          aboutBusinessValuesSubtitle3={'Teamwork'}
          aboutBusinessValuesDescription3={'Carry out joint and supportive decision-making in pursuit of a common goal and with shared responsibility.'}
          aboutBusinessValuesSubtitle4={'Efficiency'}
          aboutBusinessValuesDescription4={'Achieve results at the lowest possible cost, rationalizing resources to achieve the proposed goals.'}
          aboutBusinessValuesSubtitle5={'Social responsability'}
          aboutBusinessValuesDescription5={'Ensure that our works and projects have as a fundamental axis the protection and care of the Environment.'}
          aboutBusinessValuesSubtitle6={'Quality'}
          aboutBusinessValuesDescription6={'Carry out the work with a high level of efficiency, obtaining results that meet the expectations and needs of the users.'}
          aboutBusinessValuesSubtitle7={'Organization'}
          aboutBusinessValuesDescription7={"Combine resources in an orderly manner and respect the company's ways of working."}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default AboutPage