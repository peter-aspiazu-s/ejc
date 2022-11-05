import {FC, useState, SyntheticEvent} from 'react'
import { Grid, Paper, Typography } from '@mui/material';

import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled } from '@mui/material/styles';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid #546e7a`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:'#cfd8dc' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'light'
        ? '#263238'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #546e7a',
    backgroundColor: '#455a64',
  }));


interface FrecuentQuestionsProps {
    frecuentQuestionsTitle: string;
    frecuentQuestionsSubtitle1: string;
    frecuentQuestionsDescription1: string;
    frecuentQuestionsSubtitle2: string;
    frecuentQuestionsDescription2: string;
    frecuentQuestionsSubtitle3: string;
    frecuentQuestionsDescription3: string;
    frecuentQuestionsSubtitle4: string;
    frecuentQuestionsDescription4: string;
}

export const FrecuentQuestions: FC<FrecuentQuestionsProps> = ({
    frecuentQuestionsTitle,
    frecuentQuestionsSubtitle1,
    frecuentQuestionsDescription1,
    frecuentQuestionsSubtitle2,
    frecuentQuestionsDescription2,
    frecuentQuestionsSubtitle3,
    frecuentQuestionsDescription3,
    frecuentQuestionsSubtitle4,
    frecuentQuestionsDescription4,
}) => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

  return (
    <Grid container>
        <Grid item>
            <Paper elevation={3} sx={{p: {xs:3, md:5}}}>
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography 
                            sx={{
                                color:'text.disabled', 
                                fontSize: {
                                    xs: '1.4rem', 
                                    sm: '1.5rem', 
                                    md: '1.7rem', 
                                    lg: '1.8rem', 
                                    xl: '1.9rem'}
                            }}>{frecuentQuestionsTitle}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography 
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frecuentQuestionsSubtitle1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frecuentQuestionsDescription1}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frecuentQuestionsSubtitle2}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frecuentQuestionsDescription2}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frecuentQuestionsSubtitle3}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography 
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frecuentQuestionsDescription3}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frecuentQuestionsSubtitle4}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frecuentQuestionsDescription4}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
  )
}