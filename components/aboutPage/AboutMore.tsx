import {FC} from 'react'
import { Grid, Typography } from '@mui/material';

interface AboutMoreProps {
  aboutMoreTitle: string;
  aboutMoreDescription1: string;
  aboutMoreDescription2: string;
}

export const AboutMore: FC<AboutMoreProps> = ({
  aboutMoreTitle,
  aboutMoreDescription1,
  aboutMoreDescription2,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', fontWeight:'bold', mb: 3, fontSize: {xs:'20px', sm:'35px', md:'45px'}, textAlign:{xs: 'center', md:'left'}}}>{aboutMoreTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{color:'text.disabled', mb: 3, fontSize: {xs:'14px', sm:'16px'}}}>{aboutMoreDescription1}</Typography>
            <Typography sx={{color:'text.disabled', fontSize: {xs:'14px', sm:'16px'}}}>{aboutMoreDescription2}</Typography>
        </Grid>
    </Grid>
  )
}
