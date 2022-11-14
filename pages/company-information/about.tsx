import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'
import { AboutHeader, AboutMisionVision, AboutPersonal, AboutMore, AboutBusinessValues } from '../../components/aboutPage'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC - About'} contentPage={'We are EJC Home Improvement Corp., a well-established company with a long-standing staff, headquartered in New York State. Our focus is oriented towards the management and execution of construction, remodeling and infrastructure repair services.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'About Us?'}
          aboutSemiDescription={'We are EJC Home Improvement Corp., a well-established company with a long-standing staff, headquartered in New York State. Our focus is oriented towards the management and execution of construction, remodeling and infrastructure repair services.'}
          aboutVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py:5}}>
        <AboutMore 
          aboutMoreTitle={'More About Us'}
          aboutMoreDescription1={'The main asset of the organization is the human capital of our employees, formed by a large group of technicians with high experience in the development of the services we offer. Under this premise we develop the projects, demanding in each one of them the maximum effectiveness of our personnel, in order to obtain the quality guaranteed by our years in the construction sector.'}
          aboutMoreDescription2={'The collaborators of EJC Home Improvement Corp. contribute with their effort, dedication and affection to each work as if it were their own, which has led the company to be recognized for its dedication and work invested in each project.'}
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Mision'}
          descriptionMision={'We are a company dedicated to the construction, remodeling and repair of infrastructures, whose mission is to satisfy the needs of our clients; before, during and after the completion of the project. Giving fulfillment to the quality standards in the fixed terms by means of a control in our finished products.'}
          titleVision={'Vision'}
          descriptionVision={'To be the construction, remodeling and repair company of reference at a regional level that leads the market, through the timely completion of each and every one of the jobs entrusted to us. Being important the welfare of our employees, in order to make them feel motivated and proud to belong to the organization.'} 
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
          aboutBusinessValuesTitle={'Corporate values'}
          aboutBusinessValuesSubtitle1={'Commitment'}
          aboutBusinessValuesDescription1={"To keep one's word. To be consistent with what is said and done."}
          aboutBusinessValuesSubtitle2={'Ethics'}
          aboutBusinessValuesDescription2={'To perform work with professionalism, honesty, loyalty and dedication, based on institutional rules and regulations.'}
          aboutBusinessValuesSubtitle3={'Teamwork'}
          aboutBusinessValuesDescription3={'To make joint and supportive decisions in pursuit of a common goal and with shared responsibility.'}
          aboutBusinessValuesSubtitle4={'Efficiency'}
          aboutBusinessValuesDescription4={'Achieve results at the lowest possible cost, rationalizing resources to achieve the proposed goals.'}
          aboutBusinessValuesSubtitle5={'Social Responsibility'}
          aboutBusinessValuesDescription5={'To achieve that our works and projects have as a fundamental axis the protection and care of the environment.'}
          aboutBusinessValuesSubtitle6={'Quality'}
          aboutBusinessValuesDescription6={'Fulfill the work with a high level of efficiency, obtaining results that meet the expectations and needs of users.'}
          aboutBusinessValuesSubtitle7={'Organization'}
          aboutBusinessValuesDescription7={"To combine resources in an orderly manner and respect the company's work methods."}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default AboutPage