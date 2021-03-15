import { Grid, Paper, Typography, Box, Button, Card, Divider, CardMedia } from '@material-ui/core';
import useStyles from './Styles';
import dialogoImage from '../../Assets/Images/Dialog.svg';
import accionImage from '../../Assets/Images/Accion.svg';
import ejecucionImage from '../../Assets/Images/Ejecucion.svg';

const SectionTwo = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.secondSection} container spacing={4} justify='center'>
                <div style={{ width: '100%', padding: 10, textAlign: 'center'}}>
                    <h1 className={classes.bold}>¿CÓMO ES EL PROCESO?</h1>
                </div>
                <Grid item sm={4}>
                    <Card className={classes.paper1} elevation={2} align='center'>
                        <CardMedia 
                        component='img'
                        image={dialogoImage}
                        title='Proceso de desarrollo: Diálogo'
                        />
                        <h1 className={classes.bold}>DIÁLOGO</h1>
                        <p className={classes.lightNormal}>El primer paso consiste en descubrir tu tipo de emprendimiento, tus expectativas y objetivos.</p>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className={classes.paper2} elevation={2} align='center'>
                        <CardMedia 
                        component='img'
                        image={accionImage}
                        title='Proceso de desarrollo: Acción'
                        />
                        <h1 className={classes.bold}>ACCIÓN</h1>
                        <p className={classes.lightNormal}>Posteriormente, elaboro un plan de acción y una propuesta de diseño que mejor se adapte a tu emprendimiento.</p>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className={classes.paper3} elevation={2} align='center'>
                        <CardMedia 
                        component='img'
                        image={ejecucionImage}
                        title='Proceso de desarrollo: Ejecución'
                        />
                        <h1 className={classes.bold}>EJECUCIÓN</h1>
                        <p className={classes.lightNormal}>Finalmente, realizamos el desarrollo de tu página web según los aspectos acordados.</p>
                    </Card>
                </Grid>
        </Grid>
    )
}

export default SectionTwo;