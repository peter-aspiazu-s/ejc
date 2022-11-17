import {FC} from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface CertificationsProps {
    title: string;
}

export const Certifications: FC<CertificationsProps> = ({
    title
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography 
                sx={{ 
                    color: "text.disabled", 
                    fontSize: {xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'},
                    textAlign: "center" 
                }}
            >
                {title}
            </Typography>
        </Grid>
        <Grid 
            item 
            xs={12}
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Image src="/images/certifications.png" width={1000} height={500} />
        </Grid>
    </Grid>
  )
}
