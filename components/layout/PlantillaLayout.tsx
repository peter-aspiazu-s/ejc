import React, { FC, ReactNode, useContext } from 'react';
import Head from 'next/head';
import { Sidebar, Navbar } from '../navbar';
import { Footer } from '../footer';
import { UiContext } from '../../context';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
}

export const PlantillaLayout: FC<MetaProps> = ({ children, title, contentPage }) => {

  const {pathname} = useContext(UiContext)

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
            <link rel="shortcut icon" href="/images/logotipo.webp" />
        </Head>
        <Navbar 
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          services={'Services'}
          serviceOne={'Roofing'}
          linkServiceOne={'/services/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/services/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/services/gutters'}
          companyInformation={'Company Information'}
          linkBtnLanguage={
            pathname === '/' 
            ? '/es'
            : pathname === '/company-information/about' 
              ? '/es/informacion-empresa/nosotros'
              : pathname === '/company-information/contact'
                ? '/es/informacion-empresa/contacto'
                : pathname === '/services/roofing'
                  ? '/es/servicios/roofing'
                  : pathname === '/services/siding'
                    ? '/es/servicios/siding'
                    : pathname === '/services/gutters'
                      ? '/es/servicios/gutters'
                      : pathname === '/policies'
                        ? '/es/politicas'
                        : pathname === '/company-information/frequent-questions'
                          ? '/es/informacion-empresa/preguntas-frecuentes'
                          : '/'
          }
        />
        <Sidebar 
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          services={'Services'}
          serviceOne={'Roofing'}
          linkServiceOne={'/services/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/services/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/services/gutters'}
          companyInformation={'Company Information'}
          linkBtnLanguage={
            pathname === '/' 
            ? '/es'
            : pathname === '/company-information/about' 
              ? '/es/informacion-empresa/nosotros'
              : pathname === '/company-information/contact'
                ? '/es/informacion-empresa/contacto'
                : pathname === '/services/roofing'
                  ? '/es/servicios/roofing'
                  : pathname === '/services/siding'
                    ? '/es/servicios/siding'
                    : pathname === '/services/gutters'
                      ? '/es/servicios/gutters'
                      : pathname === '/policies'
                        ? '/es/politicas'
                        : pathname === '/company-information/frequent-questions'
                          ? '/es/informacion-empresa/preguntas-frecuentes'
                          : '/'
          }
        />

        {children}
        
        <Footer 
          presentCompany={'We are EJC Home Improvement Corp., a well-established company with a long-standing staff, headquartered in New York State. Our focus is oriented towards the management and execution of construction, remodeling and infrastructure repair services.'}
          titleItems={'Pages'}
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          titleItemsServices={'Service Pages'}
          serviceOne={'Roofing'}
          linkServiceOne={'/services/roofing'}
          serviceTwo={'Siding'}
          linkServiceTwo={'/services/siding'}
          serviceThree={'Gutters'}
          linkServiceThree={'/services/gutters'}
          serviceFour={'Service 4'}
          linkServiceFour={'/'}
          serviceFive={'Service 5'}
          linkServiceFive={'/'}
          serviceSix={'Service 6'}
          linkServiceSix={'/'}
          contactUs={'Contact Us'}
          linkContactFooter={
            pathname === '/services/roofing'
            ? 'https://wa.link/skf9x5'
            : pathname === '/services/siding'
              ? 'https://wa.link/ggf638'
              : pathname === '/services/gutters'
              ? 'https://wa.link/6tn2re'
              : 'https://wa.link/adxsm0'
          }
          legalWarning={'Legal Warning'}
          linkLegalWarning={'/policies'}
          privacyPolicy={'Privacy Policy'}
          linkPrivacyPolicy={'/policies'}
          cookiesPolicy={'Cookies Policy'}
          linkCookiesPolicy={'/policies'}
          labelName={'Name'}
          labelEmail={'Email'}
          labelComment={'Comment'}
          btnSubmit={'Submit'}
          warningMessage={'your message was sent successfully'}
          nameErrorMessage={'name is required'}
          emailErrorMessage={'The email is incorrect'}
          messageErrorMessage={'The message is required and must have 10 or more letters'}
          warningMessageInput={'Please enter a value'}
          variantForm={'standard'}
          TextButtonWhatsApp={'Contact us by WhatsApp'}
          messageButtonWhatsapp={
            pathname === '/services/roofing'
            ? 'https://wa.link/skf9x5'
            : pathname === '/services/siding'
              ? 'https://wa.link/ggf638'
              : pathname === '/services/gutters'
               ? 'https://wa.link/6tn2re'
               : 'https://wa.link/adxsm0'
          }
        />
    </>
  )
}
