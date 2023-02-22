import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PlantillaLayoutEs } from '../../../components/layout';
import { ServiceThreeHeader, ServiceThreeMore, WorkDoneThree } from '../../../components/servicesPages';

const CanalonesPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Gutters'} contentPage={'EJC Home Improvement Corp es la mejor opción para una instalación eficiente de canaletas para lluvia ya que trabajamos con materiales de alta durabilidad y nos aseguramos que tu infraestructura tendrá el desfogue necesario para las diferentes condiciones climáticas'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceThreeHeader 
          ServiceThreeHeaderTitle={'Gutters'}
          ServiceThreeHeaderSemiDescription={'En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino que también nos encargamos de su mantenimiento, reparación y limpieza para alargar su durabilidad gracias a nuestros especialistas capacitados.'}
          ServiceThreeHeaderVisitBTN={'Contáctanos'}
          ServiceThreeHeaderLinkMessageWhastapp={'https://wa.link/67dm1b'}
        />
      </Box>
      <Container sx={{py:5}}>
        <ServiceThreeMore 
          serviceThreeMoreTitle={'Más sobre el servicio'}
          serviceThreeMoreDescription1={'EJC Home Improvement Corp es la mejor opción para una instalación eficiente de canaletas para lluvia ya que trabajamos con materiales de alta durabilidad y nos aseguramos que tu infraestructura tendrá el desfogue necesario para las diferentes condiciones climáticas.'}
          serviceThreeMoreDescription2={'En EJC Home Improvement Corp, nos caracterizamos en brindar el mejor servicio para nuestros clientes, ofreciendo en la unión de los techos un canal, con la cual brinda un mejor sellamiento para evitar filtraciones, cumpliendo con las exigencias de nuestros clientes.'}
          serviceThreeMoreDescription3={'En el caso de necesitar reparar los canales, ya sea por consecuencias naturales o por el degaste normal, contamos con expertos en el área, para la identificación, evaluación, limpieza y reparación del mismo, proporcionando el mejor resultado.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDoneThree 
          workDoneThree={'Trabajos Realizados'}
        />
      </Container>
    </PlantillaLayoutEs>
  )
}

export default CanalonesPage