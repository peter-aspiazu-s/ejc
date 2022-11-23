import React, { FC, ReactNode, useContext } from 'react'
import Head from 'next/head'
import { Sidebar, Navbar } from '../navbar';
import { Footer } from '../footer';
import { UiContext } from '../../context';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
}

export const PlantillaLayoutEs: FC<MetaProps> = ({ children, title, contentPage }) => {

  const {pathname} = useContext(UiContext)

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
            <link rel="shortcut icon" href="/images/logotipo.webp" />
        </Head>
        <Navbar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          services={'Servicios'}
          serviceOne={'Roofing'}
          linkServiceOne={'/es/servicios/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/es/servicios/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/es/servicios/gutters'}
          companyInformation={'Información de la empresa'}
          linkBtnLanguage={
            pathname === '/es'
            ? '/'
            : pathname === '/es/informacion-empresa/nosotros'
              ? '/company-information/about'
              : pathname === '/es/informacion-empresa/contacto'
                ? '/company-information/contact'
                : pathname === '/es/informacion-empresa/preguntas-frecuentes'
                  ? '/company-information/frequent-questions'
                  : pathname === '/es/servicios/roofing'
                    ? '/services/roofing'
                    : pathname === '/es/servicios/siding'
                      ? '/services/siding'
                      : pathname === '/es/servicios/gutters'
                        ? '/services/gutters'
                        : pathname === '/es/politicas'
                          ? '/policies'
                          : '/'
          }
        />
        <Sidebar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          services={'Servicios'}
          serviceOne={'Roofing'}
          linkServiceOne={'/es/servicios/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/es/servicios/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/es/servicios/gutters'}
          companyInformation={'Información de la empresa'}
          linkBtnLanguage={
            pathname === '/es'
            ? '/'
            : pathname === '/es/informacion-empresa/nosotros'
              ? '/company-information/about'
              : pathname === '/es/informacion-empresa/contacto'
                ? '/company-information/contact'
                : pathname === '/es/informacion-empresa/preguntas-frecuentes'
                  ? '/company-information/frequent-questions'
                  : pathname === '/es/servicios/roofing'
                    ? '/services/roofing'
                    : pathname === '/es/servicios/siding'
                      ? '/services/siding'
                      : pathname === '/es/servicios/gutters'
                        ? '/services/gutters'
                        : pathname === '/es/politicas'
                          ? '/policies'
                          : '/'
          }
        />
        
        {children}
        
        <Footer
          presentCompany={'Somos EJC Home Improvement Corp. una empresa consolidada, con personal que cuenta con una gran trayectoria, con sede principal en el Estado de Nueva York. Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras.'}
          titleItems={'Páginas'}
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          titleItemsServices={'Páginas de Servicios'}
          serviceOne={'Roofing'}
          linkServiceOne={'/es/servicios/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/es/servicios/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/es/servicios/gutters'}
          serviceFour={'Servicio 4'}
          linkServiceFour={'/es'}
          serviceFive={'Servicio 5'}
          linkServiceFive={'/es'}
          serviceSix={'Servicio 6'}
          linkServiceSix={'/es'}
          contactUs={'Contáctanos'}
          linkContactFooter={
            pathname === '/es/servicios/roofing'
            ? 'https://wa.link/pb7a0b'
            : pathname === '/es/servicios/siding'
              ? 'https://wa.link/3sxlex'
              : pathname === '/es/servicios/gutters'
               ? 'https://wa.link/67dm1b'
               : 'https://wa.link/gswe2l'
          }
          legalWarning={'Aviso Legal'}
          linkLegalWarning={'/es/politicas'}
          privacyPolicy={'Política de Privacidad'}
          linkPrivacyPolicy={'/es/politicas'}
          cookiesPolicy={'Política de Cookies'}
          linkCookiesPolicy={'/es/politicas'}
          labelName={'Nombre'}
          labelEmail={'Correo'}
          labelComment={'Comentario'}
          btnSubmit={'Enviar'}
          warningMessage={'Su mensaje se envió con éxito'}
          nameErrorMessage={'El nombre es requerido'}
          emailErrorMessage={'El correo es incorrecto'}
          messageErrorMessage={'El mensaje es requerido y debe tener 10 o más letras'}
          warningMessageInput={'Ingrese un valor'}
          variantForm={'standard'}
          TextButtonWhatsApp={'Contáctanos por WhatsApp'}
          messageButtonWhatsapp={
            pathname === '/es/servicios/roofing'
            ? 'https://wa.link/pb7a0b'
            : pathname === '/es/servicios/siding'
              ? 'https://wa.link/3sxlex'
              : pathname === '/es/servicios/gutters'
               ? 'https://wa.link/67dm1b'
               : 'https://wa.link/gswe2l'
          }
        />
    </>
  )
}
