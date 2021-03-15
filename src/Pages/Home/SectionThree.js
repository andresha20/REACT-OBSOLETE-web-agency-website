import { Grid, Paper, Typography, Box, Button, Divider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useStyles from './Styles';

const SectionThree = () => {

    const classes = useStyles();
    const attributes = ["CONFUSIÓN", "FRUSTRACIÓN", "FALTA DE CLARIDAD"]
    const [index, setIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => setOffset(window.pageYOffset));
        return () => window.removeEventListener('scroll', () => setOffset(0));
    })
 
    useEffect(() => {
        if (offset > 800) {
            const interval = setInterval(() => {
                if (index === attributes.length - 1) return setIndex(0);
                console.log('interval running')
                return setIndex(index => index + 1);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [offset, index])

    return (
        <Grid className={classes.thirdSection} container spacing={4} justify='center' align='center'>
            <Box component='div'>
                <p className={`${classes.lightNormal} ${classes.white}`}>Los sitios web sobresaturados de información en ocasiones logran efectos contrarios a los deseados:</p>
                <p className={`${classes.bold} ${classes.white}`}>{attributes[index]}</p>
            </Box>
        </Grid>
    )
}

export default SectionThree;