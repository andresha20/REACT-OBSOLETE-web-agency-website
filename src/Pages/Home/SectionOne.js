import { Grid, Paper, Typography, Box, Button } from '@material-ui/core';
import useStyles from './Styles';

const SectionOne = () => {

    const classes = useStyles();
    
    return (
        <Grid className={classes.firstSection} container spacing={4} justify='center'>
                <Grid item xs={12} sm={6} align='center'>
                    <Paper className={classes.paper} elevation={0} align='left'>
                        <h1 className={classes.bold}>SE PARTE DE LA ERA DIGITAL</h1>
                        <p className={classes.lightNormal}>80% de las personas buscan tu negocio en internet antes de realizar una compra.</p>
                        <Button className={classes.button} size='large' variant='contained' color='secondary' fullWidth>COTIZAR MI SITIO WEB</Button>
                    </Paper >
                </Grid>
                <Grid item xs={12} sm={6} align='center'>
                    <Paper elevation={0}>

                    </Paper>
                </Grid>
        </Grid>
    )
}

export default SectionOne;