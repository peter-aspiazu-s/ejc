import {FC} from 'react'
import { Grid } from '@mui/material'

export const Video:FC = () => {
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
                src="https://www.youtube.com/embed/8vdeayKIRc0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

            </iframe>
        </Grid>
    </Grid>
  )
}
