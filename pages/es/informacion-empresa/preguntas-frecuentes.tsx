import { NextPage } from 'next'
import { PlantillaLayoutEs } from '../../../components/layout'
import { Container } from '@mui/material';
import { FrequentQuestions } from '../../../components/frequent-questions';

const PreguntasFrecuentesPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Preguntas Frecuentes'} contentPage={'Página de preguntas frecuentes'}>
        <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
            <FrequentQuestions
                frequentQuestionsTitle={'Preguntas Frecuentes'}
                frequentQuestionsSubtitle1={'¿Cómo contratar nuestros servicios?'}
                frequentQuestionsDescription1={'Puedes contactarnos a través de nuestros números de contacto, correo electrónico o a través de la página web y cotizar con nosotros sin costo. Dentro de dos días hábiles, un especialista te contactará para asistirte. Tras tu aprobación se realizará la labor acordada.'}
                frequentQuestionsSubtitle2={'¿En qué zonas del país está disponible?'}
                frequentQuestionsDescription2={''}
                frequentQuestionsSubtitle3={'¿Cuánto tiempo de experiencia tenemos?'}
                frequentQuestionsDescription3={'Nuestro capital humano cuenta con alta experiencia en las áreas en las que ofrecemos nuestros servicios. Nueve años en estas áreas nos han permitido ampliar nuestros conocimientos para ofrecer servicios de alta calidad.'}
                frequentQuestionsSubtitle4={'¿Contamos con seguros?'}
                frequentQuestionsDescription4={'EJC Home Improvement Corp cuenta con “Certificate of workers compensation insurance,” “Certificate of insurance coverage NYS disability” y “Certificate of disability insurance”, con el fin de ofrecer y contar con una mayor tranquilidad y seguridad.'}
            />
        </Container>
    </PlantillaLayoutEs>
  )
}

export default PreguntasFrecuentesPage