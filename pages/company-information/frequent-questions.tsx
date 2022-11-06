import { NextPage } from 'next'
import { PlantillaLayout } from '../../components/layout'
import { Container } from '@mui/material';
import { FrequentQuestions } from '../../components/frequent-questions';

const frequentQuestionsPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Frequent Questions'} contentPage={'Page of frequent questions'}>
        <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
            <FrequentQuestions
                frequentQuestionsTitle={'Frequent Questions'}
                frequentQuestionsSubtitle1={'How to contract our services?'}
                frequentQuestionsDescription1={'You can contact us through our contact numbers, email or through the website and quote with us at no cost. Within two business days, a specialist will contact you to assist you. After your approval, the agreed work will be carried out.'}
                frequentQuestionsSubtitle2={'In what areas of the country is it available?'}
                frequentQuestionsDescription2={''}
                frequentQuestionsSubtitle3={'How much experience do we have?'}
                frequentQuestionsDescription3={'Our human capital has high experience in the areas in which we offer our services. Nine years in these areas have allowed us to expand our knowledge to offer high quality services.'}
                frequentQuestionsSubtitle4={'Do we have insurance?'}
                frequentQuestionsDescription4={'EJC Home Improvement Corp has "Certificate of workers compensation insurance," "Certificate of insurance coverage NYS disability" and "Certificate of disability insurance", in order to offer and have greater peace of mind and security.'}
            />
        </Container>
    </PlantillaLayout>
  )
}

export default frequentQuestionsPage