import { FC, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

interface VideoProps {
    linkVideo: string;
}

export const Video:FC<VideoProps> = ({
    linkVideo
}) => {

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
            <iframe 
                width="560" 
                height="315" 
                src={linkVideo} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

            </iframe>
        </Grid>
    </Grid>
  )
}
