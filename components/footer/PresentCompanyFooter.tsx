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
        <Typography 
          sx={{
            color:'text.disabled', 
            textAlign: {xs: 'justify'},
            fontSize: {xs: '0.9rem', md: '1rem'}
          }}>{presentCompany}</Typography>
      </Grid>
    </Grid>
  )
}
