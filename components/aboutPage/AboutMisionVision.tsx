import {FC} from 'react'
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import ConstructionIcon from '@mui/icons-material/Construction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface AboutMisionVisionProps {
    titleMision: string;
    descriptionMision: string;
    titleVision: string;
    descriptionVision: string;
}

export const AboutMisionVision: FC<AboutMisionVisionProps> = ({
    titleMision,
    descriptionMision,
    titleVision,
    descriptionVision,
}) => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} spacing={3}>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark' }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ConstructionIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs:'24px', sm:'26px'}, textAlign: {xs: 'center', md: 'left'}}}>
                            {titleMision}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs:'14px', sm:'16px'}, textAlign: {xs: 'center', md: 'left'}}}>
                            {descriptionMision}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'primary.dark' }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <TrendingUpIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs:'24px', sm:'26px'}, textAlign: {xs: 'center', md: 'left'}}}>
                            {titleVision}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs:'14px', sm:'16px'}, textAlign: {xs: 'center', md: 'left'}}}>
                            {descriptionVision}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
  )
}
