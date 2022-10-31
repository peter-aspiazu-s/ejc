import {FC} from 'react'
import Image from 'next/image';
import { Typography, Grid } from '@mui/material'

interface FooterProps {
  presentCompany: string;
}

export const PresentCompanyFooter: FC<FooterProps> = ({presentCompany}) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{display: 'flex', justifyContent:{xs: 'center', md:'start'}, alignItems:'center'}}>
          <Image src='/images/logotipo.webp' width={250} height={250} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" sx={{color:'text.disabled', textAlign: {xs: 'justify',}}}>{presentCompany}</Typography>
      </Grid>
    </Grid>
  )
}
