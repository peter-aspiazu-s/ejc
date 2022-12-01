import {FC} from 'react'
import { Grid } from '@mui/material'

interface VideoProps {
    linkVideo: string;
}

export const Video:FC<VideoProps> = ({
    linkVideo
}) => {
  return (
    <Grid container>
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
