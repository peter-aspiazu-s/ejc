import { FC, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';


export const Certification:FC = () => {

    const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation = document.getElementById('animationScroll');
      let position: any = animation?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position < windowSize ){
        setScrollAnimation(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Grid 
        container
        id='animationScroll' 
        className={scrollAnimation ? 'animate__animated animate__backInLeft' : ''} 
        display={scrollAnimation ? 'block' : 'none'}    
    >
        <Grid 
            item 
            xs={12}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}    
        >
          <Link href={"https://www.bbb.org/us/ny/nanuet/profile/carpenter/ejc-home-improvement-corp-0121-87176629/#sealclick"} passHref>
            <Image 
                width="560" 
                height="315" 
                src={"/images/certification-ejc.png"} 
                alt="image certificated"
                style={{cursor: "pointer"}}
                >
            </Image>
          </Link>
        </Grid>
    </Grid>
  )
}
