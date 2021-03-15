import { Grid, Paper, Typography, Box, Button, Divider, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import { useEffect, useState } from 'react';

import AccordionComponent from '../../Components/Accordion/Accordion';
import useStyles from './Styles';

const SectionFour = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.secondSection} container spacing={4} justify='center'>
                <div style={{ width: '100%', padding: 10, textAlign: 'center'}}>
                    <h1 className={classes.bold}>PREGUNTAS FRECUENTES</h1>
                </div>
                <Grid item sm={6}>
                    <Box component='div'>
                        <AccordionComponent text="BLABLA" title='TITLE'/>
                        <AccordionComponent text="BLABLA2" title='TITLE3'/>
                        <AccordionComponent text="BLABLA3" title='TITLE4'/>
                        <AccordionComponent text="BLABLA4" title='TITLE5'/>
                    </Box>
                </Grid>   
                <Grid item sm={6}>
                    <Box component='div'>
                        <p className={classes.lightNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus pariatur, at repellat eos blanditiis id recusandae minus labore, ratione voluptates obcaecati, alias ipsam animi corporis magni tenetur enim iusto quia! Ipsa quae consectetur maxime perspiciatis? A excepturi consequatur accusamus.</p>
                        <Button style={{ marginTop: 20 }} fullWidth variant='contained' size='large' color='secondary'>¡DISEÑEMOS TU SITIO WEB!</Button>  
                    </Box> 
                </Grid>
        </Grid>
    )
}

export default SectionFour;