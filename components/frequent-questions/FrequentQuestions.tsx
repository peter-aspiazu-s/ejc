import {FC, useState, SyntheticEvent, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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


interface FrequentQuestionsProps {
    frequentQuestionsTitle: string;
    frequentQuestionsSubtitle1: string;
    frequentQuestionsDescription1: string;
    frequentQuestionsSubtitle2: string;
    frequentQuestionsDescription2: string;
    frequentQuestionsSubtitle3: string;
    frequentQuestionsDescription3: string;
    frequentQuestionsSubtitle4: string;
    frequentQuestionsDescription4: string;
}

export const FrequentQuestions: FC<FrequentQuestionsProps> = ({
    frequentQuestionsTitle,
    frequentQuestionsSubtitle1,
    frequentQuestionsDescription1,
    frequentQuestionsSubtitle2,
    frequentQuestionsDescription2,
    frequentQuestionsSubtitle3,
    frequentQuestionsDescription3,
    frequentQuestionsSubtitle4,
    frequentQuestionsDescription4,
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
                            }}>{frequentQuestionsTitle}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography 
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frequentQuestionsSubtitle1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frequentQuestionsDescription1}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frequentQuestionsSubtitle2}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frequentQuestionsDescription2}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frequentQuestionsSubtitle3}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography 
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frequentQuestionsDescription3}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography
                                    sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                                >{frequentQuestionsSubtitle4}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                                >
                                    {frequentQuestionsDescription4}
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