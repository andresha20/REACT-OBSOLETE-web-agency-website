import { Grid, Paper, Typography, Box, Button, Divider, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import { useEffect, useState } from 'react';

import AccordionComponent from '../../Components/Accordion/Accordion';
import ContactForm from '../../Components/ContactForm/ContactForm';
import useStyles from './Styles';

const SectionFive = () => {

    const classes = useStyles();

    return (
            <Grid className={classes.sectionFive} container spacing={4} justify='center'>
                <div style={{ width: '100%', padding: 0, textAlign: 'center'}}>
                    <h1 className={`${classes.bold}`}>PLANEA TU PROYECTO</h1>
                    <p className={classes.lightNormal}>Los grandes proyectos inician con pequeños planes. Comentame un poco lo que tienes en mente y te contactaré a la brevedad de lo posible:</p>
                </div>
                    <ContactForm/>
            </Grid>
    )
}

export default SectionFive;