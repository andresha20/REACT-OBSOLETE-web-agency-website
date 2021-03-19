import { Grid, Paper, Typography, Box, Button, Divider, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import { useEffect, useState } from 'react';

import AccordionComponent from '../../Components/Accordion/Accordion';
import useStyles from './Styles';

const SectionFour = () => {

    const sectionTexts = {
        accordion: [
                        {
                            accordionQuestion: '¿Cuál es el tiempo de entrega de mi página web?',
                            accordionAnswer: `Depende del plan que escojas:`,
                            accordionAnswerItems: [
                                'EMPRENDEDOR: De 1 a 2 semanas', 
                                'CORPORACIÓN: De 1 a 3 semanas', 
                                'TIENDA: De 1 a 3 semanas'
                            ],
                        },
                        {
                            accordionQuestion: '¿Seguiré recibiendo asistencia técnica después de la entrega de mi página web?',
                            accordionAnswer: 'Sí. Recibirás soporte continuo durante el primer año después de la entrega para cualquier plan.'
                        },
                        {
                            accordionQuestion: '¿Cómo desarrollas las páginas web?',
                            accordionAnswer: 'Dependiendo de tu presupuesto, necesidades y objetivos, desarrollaré tu página web bajo una de las dos modalidades listadas a continuación:',
                            accordionAnswerItems: [
                                'DESARROLLO FULL-STACK: Tu sitio web es creado completamente desde cero y como resultado final, tendrás control absoluto sobre sus funcionalidades; ideal para empresas con alto tráfico de clientes. El cielo es el límite.', 
                                'CMS (Content Management System): Tu sitio web es diseñado por medio de un gestor de contenido y como resultado final, tendrás menos costos de sostenimiento.'
                            ],
                        }
                    ],
        otherText: [
                        {
                            textNextToAccordion: 'Puedes aclarar tus dudas antes, durante o después del proceso de desarrollo. Las preguntas más frecuentes generalmente son:'
                        }
                    ]  
    }

    const classes = useStyles();

    return (
        <Grid className={classes.secondSection} container spacing={4} justify='center'>
                <div style={{ width: '100%', padding: 10, textAlign: 'center'}}>
                    <h1 className={classes.bold}>PREGUNTAS FRECUENTES</h1>
                </div>
                <Grid item sm={6}>
                    <Box component='div'>
                        <p className={classes.lightNormal}>{Object.values(sectionTexts.otherText[0])}</p>
                        <Button style={{ marginTop: 20 }} fullWidth variant='contained' size='large' color='secondary'>¡DISEÑEMOS TU SITIO WEB!</Button>  
                    </Box> 
                </Grid>   
                <Grid item sm={6}>
                    <Box component='div'>
                        {sectionTexts.accordion.map(object => (
                            <AccordionComponent text={object.accordionAnswer} title={object.accordionQuestion} items={object.accordionAnswerItems && object.accordionAnswerItems}/>
                        ))}
                    </Box>
                </Grid>
        </Grid>
    )
}

export default SectionFour;