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
  Divider,
  Box
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { UiContext } from '../../context';

import ImageEnglish from '../../public/images/english.webp'
import ImageSpanish from '../../public/images/spanish.webp'

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

  const { pathname, openSideMenu } = useContext( UiContext )
  
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
                gap={2}
              >
                <NextLink href={linkHome} passHref>
                  <Image src='/images/logotipo.svg' alt='logo' width={100} height={100} className='logo' />
                </NextLink>
                <NextLink href={"https://www.bbb.org/us/ny/nanuet/profile/carpenter/ejc-home-improvement-corp-0121-87176629/#sealclick"} passHref>
                  <Image src='/images/logo-certification.png' alt='logo certification' width={90} height={60} className='logo' />
                </NextLink>
              </Grid>

              <Box 
                sx={{
                  position: "absolute",
                  transform: "rotate(90deg)",
                  top: "-15px",
                  right:"0px"
                }}
              >
                <Image src="/images/imagen-decorativa.webp" alt='decoration' width={160} height={160} />
              </Box>
              <Box 
                sx={{
                  position: "fixed",
                  transform: "rotate(90deg)",
                  bottom: "-10px",
                  left:"-10px"
                }}
              >
                <Image src="/images/imagen-decorativa2.webp" alt='decoration' width={200} height={200} />
              </Box>

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
                    color="secondary"
                  >
                    <Typography
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
                      ? <Image src={ImageEnglish} alt="ico english" width={50} height={30} />
                      : <Image src={ImageSpanish} alt="ico espanol" width={50} height={30} />
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
                  <IconButton color="secondary" href="https://www.facebook.com/profile.php?id=100087763103794&mibextid=LQQJ4d" target="_blank">
                      <FacebookIcon />
                  </IconButton>
                  <IconButton color="secondary" href="https://instagram.com/ejc.home_improvement_corp?igshid=YmMyMTA2M2Y=" target="_blank">
                      <InstagramIcon />
                  </IconButton>
                  <IconButton color="secondary" href="https://www.youtube.com/@ejchomeimprovementcorp" target="_blank">
                      <YouTubeIcon />
                  </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}