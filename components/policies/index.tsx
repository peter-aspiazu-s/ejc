import { FC } from 'react'
import NextLink from 'next/link';
import { Grid, Typography, Paper } from '@mui/material'

interface Props {
    company: string;
    title1: string;
    textTitle1: string;
    title2: string;
    textTitle2: string;
    title3: string;
    textTitle3: string;
    text2Title3: string;
    title4: string;
    textTitle4: string;
    text2Title4: string;
    title5: string;
    textTitle5: string;
    title6: string;
    textTitle6: string;
    text2Title6: string;
    text3Title6: string;
}

export const Policies: FC<Props> = ({
    company,
    title1,
    textTitle1,
    title2,
    textTitle2,
    title3,
    textTitle3,
    text2Title3,
    title4,
    textTitle4,
    text2Title4,
    title5,
    textTitle5,
    title6,
    textTitle6,
    text2Title6,
    text3Title6,
}) => {
    return (
        <Grid container>
            <Grid item>
                <Paper elevation={3} sx={{p: {xs:3, md:5}}}>
                    <Typography variant='body1' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title1}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle1}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title2}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle2}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title3}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle3}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{company} {text2Title3}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title4}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle4}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{text2Title4}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title5}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle5}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', fontWeight: 'bold', mb: 2}}>{title6}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{textTitle6}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', mb: 2, textAlign: 'justify'}}>{text2Title6}</Typography>
                    <Typography variant='body2' component="p" sx={{color: 'text.disabled', textAlign: 'justify'}}>{company} {text3Title6}</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}