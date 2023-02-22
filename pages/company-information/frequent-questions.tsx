import { NextPage } from 'next';
import { PlantillaLayout } from '../../components/layout';
import Container from '@mui/material/Container';
import { FrequentQuestions } from '../../components/frequent-questions';

const frequentQuestionsPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Frequent Questions'} contentPage={'Page of frequent questions'}>
        <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
            <FrequentQuestions
                frequentQuestionsTitle={'Frequently Asked Questions'}
                frequentQuestionsSubtitle1={'How to hire our services?'}
                frequentQuestionsDescription1={'You can contact us through our contact numbers, email or through the website and quote with us free of charge. Within two working days, a specialist will contact you to assist you. After your approval, the agreed work will be done.'}
                frequentQuestionsSubtitle2={'In which areas of the country are available?'}
                frequentQuestionsDescription2={'In terms of our coverage, we offer our services in the cities of Spring Valley, Nanuet, New City and nearby cities such as Albany, Kingston, Syracuse and Rochester.'}
                frequentQuestionsSubtitle3={'How much experience do we have?'}
                frequentQuestionsDescription3={'Our human capital is highly experienced in the areas in which we offer our services. Nine years in these areas have allowed us to expand our knowledge to offer high quality services.'}
                frequentQuestionsSubtitle4={'Do we have insurance?'}
                frequentQuestionsDescription4={'EJC Home Improvement Corp has "Certificate of workers compensation insurance," "Certificate of insurance coverage NYS disability" and "Certificate of disability insurance", in order to offer and have a greater peace of mind and security.'}
            />
        </Container>
    </PlantillaLayout>
  )
}

export default frequentQuestionsPage