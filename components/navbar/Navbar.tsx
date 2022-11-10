import React, { FC, useState, MouseEvent, useContext } from 'react'
import NextLink from 'next/link';
import Image from 'next/image';
import { 
  AppBar, 
  Toolbar, 
  Grid, 
  Typography, 
  Button, 
  Stack,
  Menu,
  MenuItem,
  IconButton,
  Divider
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { UiContext } from '../../context';

import ImageEnglish from '../../public/images/english.webp'
import ImageSpanish from '../../public/images/spanish.webp'
import LogoImage from '../../public/images/logotipo.webp'

interface ItemsMenuProps {
  home: string;
  linkHome: string;
  about: string;
  linkAbout: string;
  contact: string;
  frequentQuestions: string;
  linkFrequentQuestions: string;
  linkContact: string;
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

export const Navbar: FC<ItemsMenuProps> = ({
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

  const { pathname, openSideMenu, handleModeTheme, modeTheme } = useContext( UiContext )
  
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  
  const [ anchorElCompanyInformation, setAnchorElCompanyInformation ] = useState<null | HTMLElement>(null)
  const openCompanyInformation = Boolean(anchorElCompanyInformation)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClickCompanyInformation = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElCompanyInformation(event.currentTarget)
  }

  const handleCloseCompanyInformation = () => {
    setAnchorElCompanyInformation(null)
  }

  return (
    <AppBar sx={{ 
        backgroundColor: 'primary.light', 
        height: {xs: '110px', sm: '115px', md: '120px'},
        display: {xs: 'flex'}, 
        justifyContent: {xs:'center'}, 
        alignItems: {xs:'space-between'}
      }}
    >
        <Toolbar sx={{px: {lg: 8,xl: 10}}}>
            <Grid container sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
              <Grid 
                item 
                xs={10} 
                sm={10} 
                md={2} 
                sx={{display: 'flex', justifyContent:'start', alignItems:{xs:'center'}}}
              >
                <NextLink href={linkHome} passHref>
                  <Image src='/images/logotipo.webp' width={110} height={110} className="logo" />
                </NextLink>
              </Grid>

              <Grid 
                item 
                md={6} 
                sx={{ display: { xs: 'none', md:'flex' }, justifyContent: 'end' }}>
                <Stack spacing={1} direction="row">
                  <NextLink href={linkHome} passHref>
                    <Button variant={ pathname === linkHome ? "contained" : "text" } color="secondary">
                    <Typography
                      className={pathname === linkHome ? "" : "text-color"}
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                      }}
                    >
                      {home}
                    </Typography>
                    </Button>
                  </NextLink>
                  {/* TODO: colocar una animacion que cambie el icono si se abre el submenu */}
                  <Button
                    id="services-botton"
                    aria-controls={ open ? 'services-botton' : undefined }
                    aria-haspopup="true"
                    aria-expanded={ open ? 'true' : undefined }
                    onClick={ handleClick }
                    variant={ 
                      pathname === linkServiceOne 
                      || pathname === linkServiceTwo
                      || pathname === linkServiceThree ? "contained" : "text" 
                    }
                    color="secondary"
                  >
                    <Typography
                      // className={
                      //   pathname === "/none" ? "" : "text-color"} 
                      className={
                        pathname === linkServiceOne 
                        || pathname === linkServiceTwo
                        || pathname === linkServiceThree ? "" : "text-color"} 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                      }}
                    >
                      {services}
                    <KeyboardArrowDownIcon />
                    </Typography>
                  </Button>
                  <Menu 
                    id="services-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={ handleClose }
                    MenuListProps={{
                      'aria-labelledby': 'services-menu',
                    }}
                  >
                    <NextLink href={linkServiceOne} passHref>
                      <MenuItem 
                        onClick={ handleClose } 
                        sx={{ 
                          color:'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {serviceOne}
                      </MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceTwo} passHref>
                      <MenuItem 
                        onClick={ handleClose } 
                        sx={{ 
                          color: 'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {serviceTwo}
                      </MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceThree} passHref>
                      <MenuItem 
                        onClick={ handleClose } 
                        sx={{ 
                          color: 'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {serviceThree}
                      </MenuItem>
                    </NextLink>
                  </Menu>
                  <Button
                    id="services-botton"
                    aria-controls={ openCompanyInformation ? 'services-botton' : undefined }
                    aria-haspopup="true"
                    aria-expanded={ openCompanyInformation ? 'true' : undefined }
                    onClick={ handleClickCompanyInformation }
                    variant={ 
                      pathname === linkContact 
                      || pathname === linkAbout
                      || pathname === linkFrequentQuestions ? "contained" : "text" 
                    }
                    // variant="text"
                    color="secondary"
                  >
                    <Typography
                      // className={
                      //   pathname === "/none" ? "" : "text-color"} 
                      className={
                        pathname === linkContact 
                        || pathname === linkAbout
                        || pathname === linkFrequentQuestions ? "" : "text-color"} 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                      }}
                    >
                      {companyInformation}
                    <KeyboardArrowDownIcon />
                    </Typography>
                  </Button>
                  <Menu 
                    id="company-information-menu"
                    anchorEl={anchorElCompanyInformation}
                    open={openCompanyInformation}
                    onClose={ handleCloseCompanyInformation }
                    MenuListProps={{
                      'aria-labelledby': 'services-menu',
                    }}
                  >
                    <NextLink href={linkAbout} passHref>
                      <MenuItem 
                        onClick={ handleCloseCompanyInformation } 
                        sx={{ 
                          color:'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {about}
                      </MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkContact} passHref>
                      <MenuItem 
                        onClick={ handleCloseCompanyInformation } 
                        sx={{ 
                          color: 'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {contact}
                      </MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkFrequentQuestions} passHref>
                      <MenuItem 
                        onClick={ handleCloseCompanyInformation } 
                        sx={{ 
                          color: 'text.disabled',
                          fontSize: {md:'0.7rem', lg:'0.8rem', xl: '1rem'}
                        }}
                      >
                        {frequentQuestions}
                      </MenuItem>
                    </NextLink>
                  </Menu>
                </Stack>
              </Grid>
              <Grid item sm={1} sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'end' }}>
                <NextLink href={linkBtnLanguage}>
                  <Button color="secondary">
                    {
                      pathname.includes('/es') 
                      ? <Image src={ImageEnglish} width={50} height={30} />
                      : <Image src={ImageSpanish} width={50} height={30} />
                    }
                  </Button>
                </NextLink>
              </Grid>
              <Grid item xs={2} sm={1} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }} >
                  <IconButton onClick={ openSideMenu } sx={{ color:'text.disabled' }}>
                      <MenuIcon sx={{fontSize: {xs: '1.5rem'}}} />
                  </IconButton>
              </Grid>
              <Grid item md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }} >
                  <IconButton color="secondary" href="#" target="_blank">
                      <FacebookIcon />
                  </IconButton>
                  <IconButton color="secondary" href="#" target="_blank">
                      <InstagramIcon />
                  </IconButton>
                  <IconButton color="secondary" href="#" target="_blank">
                      <TwitterIcon />
                  </IconButton>
                  <IconButton color="secondary" href="#" target="_blank">
                      <YouTubeIcon />
                  </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}