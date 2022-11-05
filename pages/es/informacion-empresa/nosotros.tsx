import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../../components/layout'
import { AboutHeader, AboutMisionVision, AboutPersonal, AboutMore, AboutBusinessValues } from '../../../components/aboutPage'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Nosotros'} contentPage={'Página con información sobre nosotros'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'¿Quienes Somos?'}
          aboutSemiDescription={'Somos EJC Home Improvement Corp. una empresa consolidada, con personal que cuenta con una gran trayectoria, con sede principal en el Estado de Nueva York. Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras.'}
          aboutVisitBTN={'Contactar'}
        />
      </Box>
      <Container sx={{py:5}}>
        <AboutMore 
          aboutMoreTitle={'Más Sobre Nosotros'}
          aboutMoreDescription1={'El principal activo de la organización es el capital humano de nuestros empleados, formado por un amplio grupo de técnicos con alta experiencia en el desarrollo de los servicios que ofrecemos. Bajo esta premisa desarrollamos los proyectos, exigiendo en cada uno de ellos la máxima efectividad de nuestro personal, a fin de obtener la calidad avalada por nuestros años en el sector de la construcción.'}
          aboutMoreDescription2={'Los colaboradores de EJC Home Improvement Corp. aportan con su esfuerzo, dedicación y cariño a cada obra como si fuera propia, lo que ha llevado a la misma a ser reconocida por su entrega y trabajo invertido en cada proyecto.'}
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Misión'}
          descriptionMision={'Somos una empresa dedicada a la construcción, remodelación y reparación de infraestructuras, cuya misión es satisfacer las necesidades de nuestros clientes; antes, durante y después de finalizado el proyecto. Dando cumplimiento a los estándares de calidad en los plazos fijados por medio de un control en nuestros productos terminados.'}
          titleVision={'Visión'}
          descriptionVision={'Ser la empresa de construcción, remodelación y reparación de referencia a nivel regional que lidere el mercado, por medio del cumplimiento a tiempo de todos y cada uno de los trabajos encomendados. Siendo importante el bienestar de nuestros colaboradores, con la finalidad de que se sientan motivados y orgullosos de pertenecer a la organización.'} 
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Antonio G. Caguana'}
          about1Position={'Gerente General'}
          about1Phone={'99 999999999'}
          about1Email={'example@email.com'}
          about2Name={'María T. Loja'}
          about2Position={'Jefa Administrativa'}
          about2Phone={'99 999999999'}
          about2Email={'example@email.com'}
          textBtnAbout={'Contactar'}
        />
      </Container>
      <Container sx={{py:5}}>
        <AboutBusinessValues 
          aboutBusinessValuesTitle={'Valores empresariales'}
          aboutBusinessValuesSubtitle1={'Compromiso'}
          aboutBusinessValuesDescription1={'Cumplir con la palabra prometida. Ser consistentes con lo que se dice y se hace.'}
          aboutBusinessValuesSubtitle2={'Ética'}
          aboutBusinessValuesDescription2={'Realizar el trabajo con profesionalismo, honestidad, lealtad y entrega, sobre la base de normas y reglamentos institucionales.'}
          aboutBusinessValuesSubtitle3={'Trabajo en Equipo '}
          aboutBusinessValuesDescription3={'Realizar una toma conjunta y solidaria de decisiones en pos de un objetivo común y con responsabilidad compartida.'}
          aboutBusinessValuesSubtitle4={'Eficiencia'}
          aboutBusinessValuesDescription4={'Lograr resultados al menor costo posible, racionalizando los recursos para alcanzar los fines propuestos.'}
          aboutBusinessValuesSubtitle5={'Responsabilidad Social'}
          aboutBusinessValuesDescription5={'Lograr que nuestras obras y proyectos tengan como eje fundamental la protección y el cuidado del Medio Ambiente.'}
          aboutBusinessValuesSubtitle6={'Calidad'}
          aboutBusinessValuesDescription6={'Cumplir el trabajo con alto nivel de eficiencia, obteniendo resultados que cumplan las expectativas y necesidades de los usuarios.'}
          aboutBusinessValuesSubtitle7={'Organización'}
          aboutBusinessValuesDescription7={"Conjugar los recursos de forma ordenada y respetar las formas de trabajo de la empresa."}
        />
      </Container>
    </PlantillaLayoutEs>
  )
}

export default AboutPage