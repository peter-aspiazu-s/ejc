import {FC} from 'react'
import { Grid, Typography } from '@mui/material';

interface ServiceThreeMoreProps {
    serviceThreeMoreTitle: string;
    serviceThreeMoreDescription1: string;
    serviceThreeMoreDescription2: string;
    serviceThreeMoreDescription3: string;
}

export const ServiceThreeMore: FC<ServiceThreeMoreProps> = ({
    serviceThreeMoreTitle,
    serviceThreeMoreDescription1,
    serviceThreeMoreDescription2,
    serviceThreeMoreDescription3,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography 
              sx={{
                color:'text.disabled', 
                fontWeight:'bold', 
                mb: 3, 
                fontSize: {
                  xs: '1.4rem', 
                  sm: '1.5rem', 
                  md: '1.7rem', 
                  lg: '1.8rem', 
                  xl: '1.9rem'}, 
                textAlign:{xs: 'center', md:'left'}
              }}>{serviceThreeMoreTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceThreeMoreDescription1}</Typography>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceThreeMoreDescription2}</Typography>
            <Typography sx={{color:'text.disabled', fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceThreeMoreDescription3}</Typography>
        </Grid>
    </Grid>
  )
}
