import React, { FC, useContext } from 'react'
import NextLink from 'next/link';
import Image from 'next/image';
import { 
    Drawer, 
    Box, 
    List, 
    ListItem, 
    ListItemText, 
    Accordion, 
    AccordionSummary, 
    Typography,
    AccordionDetails,
    IconButton,
    Divider,
    Button,
    Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { UiContext } from '../../context';

import ImageEnglish from '../../public/images/english.webp'
import ImageSpanish from '../../public/images/spanish.webp'

interface ItemsMenuProps {
    home: string;
    linkHome: string;
    about: string;
    linkAbout: string;
    contact: string;
    linkContact: string;
    frequentQuestions: string;
    linkFrequentQuestions: string;
    services: string;
    serviceOne: string;
    linkServiceOne: string;
    serviceTwo: string;
    linkServiceTwo: string;
    serviceThree: string;
    linkServiceThree: string;
    companyInformation: string;
    linkBtnLanguage: string;
  }

export const Sidebar: FC<ItemsMenuProps> = ({
    home, 
    linkHome,
    about,
    linkAbout,
    contact,
    linkContact,
    frequentQuestions,
    linkFrequentQuestions,
    services,
    serviceOne,
    linkServiceOne,
    serviceTwo,
    linkServiceTwo,
    serviceThree,
    linkServiceThree,
    companyInformation,
    linkBtnLanguage,
}) => {

    const { pathname, sidemenuOpen, closeSideMenu, handleModeTheme, modeTheme } = useContext(UiContext)

    const handleDispatchFunctions = () => {
        handleModeTheme()
        closeSideMenu()
    }

    return (
        <Drawer
            open={sidemenuOpen}
            onClose={ closeSideMenu }
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 1, color:'primary.dark' }}>
                <List>
                    <Grid container alignItems='center'>
                        <Grid item xs={4} sx={{display: 'flex', justifyContent: {xs:'center', sm:'start'}}}>
                            <IconButton onClick={ closeSideMenu } sx={{ color:'text.disabled' }}>
                                <KeyboardArrowRightIcon sx={{fontSize: {xs:'2.4rem'}}} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} sx={{display: {xs: 'flex', sm: 'none'}, justifyContent: 'center'}}>
                            <NextLink href={linkBtnLanguage}>
                                <Button color="secondary" onClick={closeSideMenu}>
                                {
                                    pathname.includes('/es')  
                                    ? <Image src={ImageEnglish} width={50} height={30} />
                                    : <Image src={ImageSpanish} width={50} height={30} />
                                }
                                </Button>
                            </NextLink>
                        </Grid>
                        {/* <Grid item xs={4} sx={{display: {xs: 'flex', sm: 'none'}, justifyContent: 'center'}}>
                            <IconButton color="secondary" onClick={handleDispatchFunctions}>
                            {
                                modeTheme
                                ? <LightModeIcon />
                                : <NightlightIcon />
                            }
                            </IconButton>
                        </Grid> */}
                    </Grid>
                    <Divider />
                    <NextLink href={linkHome} passHref>
                        <ListItem button onClick={ closeSideMenu }>
                            <ListItemText 
                                primary={home} 
                                sx={{color: 'text.disabled'}} 
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: '1rem'
                                    }
                                }}    
                            />
                        </ListItem>
                    </NextLink>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:"text.disabled", fontSize: '1.2rem'}} />}
                            aria-controls="panella-content"
                            id="panella-header"
                        >
                            <Typography sx={{color: 'text.disabled', fontSize: '1rem'}}>{services}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color:'text.disabled' }}>     
                            <Divider />
                            <NextLink href={linkServiceOne} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={serviceOne} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>
                            <Divider />
                            <NextLink href={linkServiceTwo} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={serviceTwo} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>  
                            <Divider />
                            <NextLink href={linkServiceThree} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={serviceThree} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:"text.disabled", fontSize: '1.2rem'}} />}
                            aria-controls="panella-content"
                            id="panella-header"
                        >
                            <Typography sx={{color: 'text.disabled', fontSize: '1rem'}}>{companyInformation}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color:'text.disabled' }}>     
                            <Divider />
                            <NextLink href={linkAbout} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={about} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>
                            <Divider />
                            <NextLink href={linkContact} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={contact} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>
                            <Divider />
                            <NextLink href={linkFrequentQuestions} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText 
                                        primary={frequentQuestions} 
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: '1rem'
                                            }
                                        }}   
                                    />
                                </ListItem>
                            </NextLink>
                        </AccordionDetails>
                    </Accordion>
                    
                </List>
            </Box>
        </Drawer>
    )
}
