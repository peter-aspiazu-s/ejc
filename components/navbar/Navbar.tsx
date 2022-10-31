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
  linkContact: string;
  services: string;
  serviceOne: string;
  linkServiceOne: string;
  serviceTwo: string;
  linkServiceTwo: string;
  serviceThree: string;
  linkServiceThree: string;
  serviceFour: string;
  linkServiceFour: string;
  serviceFive: string;
  linkServiceFive: string;
  serviceSix: string;
  linkServiceSix: string;
  linkBtnLanguage: string;
}

export const Navbar: FC<ItemsMenuProps> = ({
  home, 
  linkHome,
  about,
  linkAbout,
  contact,
  linkContact,
  services,
  serviceOne,
  linkServiceOne,
  serviceTwo,
  linkServiceTwo,
  serviceThree,
  linkServiceThree,
  serviceFour,
  linkServiceFour,
  serviceFive,
  linkServiceFive,
  serviceSix,
  linkServiceSix,
  linkBtnLanguage,
}) => {

  const { pathname, openSideMenu, handleModeTheme, modeTheme } = useContext( UiContext )
  
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar sx={{ backgroundColor: 'primary.light', height: {xs: '110px', sm: '115px', md: '120px'} }}>
        <Toolbar>
            <Grid container sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
              <Grid 
                item 
                xs={10} 
                sm={10} 
                md={4} 
                sx={{display: 'flex', justifyContent:'start', alignItems:{xs:'center'}}}
              >
                <NextLink href={linkHome} passHref>
                  <Image src='/images/logotipo.webp' width={140} height={140} className="logo" />
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
                      variant="subtitle2" 
                      className={pathname === linkHome ? "" : "text-color"}
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                    // variant={ 
                    //   pathname === linkServiceOne 
                    //   || pathname === linkServiceTwo
                    //   || pathname === linkServiceThree ? "contained" : "text" 
                    // }
                    variant="text"
                    color="secondary"
                  >
                    <Typography
                      variant="subtitle2"
                      className={
                        pathname === "/none" ? "" : "text-color"} 
                      // className={
                      //   pathname === linkServiceOne 
                      //   || pathname === linkServiceTwo
                      //   || pathname === linkServiceThree ? "" : "text-color"} 
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                      <MenuItem onClick={ handleClose } sx={{ color:'text.disabled' }}>{serviceOne}</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceTwo} passHref>
                      <MenuItem onClick={ handleClose } sx={{ color: 'text.disabled' }}>{serviceTwo}</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceThree} passHref>
                      <MenuItem onClick={ handleClose } sx={{ color: 'text.disabled' }}>{serviceThree}</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceThree} passHref>
                      <MenuItem onClick={ handleClose } sx={{ color: 'text.disabled' }}>{serviceFour}</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceThree} passHref>
                      <MenuItem onClick={ handleClose } sx={{ color: 'text.disabled' }}>{serviceFive}</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkServiceThree} passHref>
                      <MenuItem onClick={ handleClose } sx={{ color: 'text.disabled' }}>{serviceSix}</MenuItem>
                    </NextLink>
                  </Menu>
                  <NextLink href={linkAbout} passHref>
                    <Button variant={ pathname === linkAbout ? "contained" : "text" } color="secondary">
                      
                      <Typography
                        variant="subtitle2" 
                        className={pathname === linkAbout ? "" : "text-color"}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {about}
                      </Typography>
                    </Button>
                  </NextLink>
                  <NextLink href={linkContact} passHref>
                    <Button variant={ pathname === linkContact ? "contained" : "text" } color="secondary">
                      <Typography
                        variant="subtitle2"
                        className={pathname === linkContact ? "" : "text-color"} 
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {contact}
                      </Typography>
                    </Button>
                  </NextLink>
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
              {/* <Grid item sm={1} sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'end' }}>
                <IconButton color="secondary" onClick={handleModeTheme}>
                  {
                    modeTheme
                      ? <LightModeIcon />
                      : <NightlightIcon />
                  }
                </IconButton>
              </Grid> */}
              <Grid item xs={2} sm={1} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }} >
                  <IconButton onClick={ openSideMenu } sx={{ color:'text.disabled' }}>
                      <MenuIcon sx={{fontSize: {xs:'30px'}}} />
                  </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}