import {FC, useState, SyntheticEvent} from 'react'
import { Grid, Typography } from '@mui/material';
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

interface AboutBusinessValuesProps {
    aboutBusinessValuesTitle: string;
    aboutBusinessValuesSubtitle1: string;
    aboutBusinessValuesDescription1: string;
    aboutBusinessValuesSubtitle2: string;
    aboutBusinessValuesDescription2: string;
    aboutBusinessValuesSubtitle3: string;
    aboutBusinessValuesDescription3: string;
    aboutBusinessValuesSubtitle4: string;
    aboutBusinessValuesDescription4: string;
    aboutBusinessValuesSubtitle5: string;
    aboutBusinessValuesDescription5: string;
    aboutBusinessValuesSubtitle6: string;
    aboutBusinessValuesDescription6: string;
    aboutBusinessValuesSubtitle7: string;
    aboutBusinessValuesDescription7: string;
}

export const AboutBusinessValues: FC<AboutBusinessValuesProps> = ({
    aboutBusinessValuesTitle,
    aboutBusinessValuesSubtitle1,
    aboutBusinessValuesDescription1,
    aboutBusinessValuesSubtitle2,
    aboutBusinessValuesDescription2,
    aboutBusinessValuesSubtitle3,
    aboutBusinessValuesDescription3,
    aboutBusinessValuesSubtitle4,
    aboutBusinessValuesDescription4,
    aboutBusinessValuesSubtitle5,
    aboutBusinessValuesDescription5,
    aboutBusinessValuesSubtitle6,
    aboutBusinessValuesDescription6,
    aboutBusinessValuesSubtitle7,
    aboutBusinessValuesDescription7,
}) => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

  return (
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
                }}>{aboutBusinessValuesTitle}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography 
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription1}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription2}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle3}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography 
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription3}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle4}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription4}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle5}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography 
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription5}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle6}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography 
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription6}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item xs={12}>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography
                        sx={{fontSize: {xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem'}}}
                    >{aboutBusinessValuesSubtitle7}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{fontSize: {xs: '0.9rem', md: '1rem'}}}
                    >
                        {aboutBusinessValuesDescription7}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    </Grid>
  )
}
