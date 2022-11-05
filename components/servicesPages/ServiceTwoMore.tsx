import {FC} from 'react'
import { Grid, Typography } from '@mui/material';

interface ServiceTwoMoreProps {
    serviceTwoMoreTitle: string;
    serviceTwoMoreDescription1: string;
    serviceTwoMoreDescription2: string;
}

export const ServiceTwoMore: FC<ServiceTwoMoreProps> = ({
    serviceTwoMoreTitle,
    serviceTwoMoreDescription1,
    serviceTwoMoreDescription2,
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
              }}>{serviceTwoMoreTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceTwoMoreDescription1}</Typography>
            <Typography sx={{color:'text.disabled', fontSize: {xs: '0.9rem', md: '1rem'}}}>{serviceTwoMoreDescription2}</Typography>
        </Grid>
    </Grid>
  )
}
