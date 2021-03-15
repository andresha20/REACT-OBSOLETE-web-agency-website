import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './Styles';
import logo from '../../Assets/logo.png'

const Navbar = () => {

    const classes = useStyles();
    const [offset, setOffset]= useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => setOffset(window.pageYOffset));
        return () => window.removeEventListener('scroll', () => setOffset(0));
    }, [offset])
    
    return (
        <div className={classes.navigationDiv} >
            {offset === 0 ? (
                <>
                    <AppBar className={classes.navigation} color='transparent'  elevation={0}>
                        <Toolbar>
                            <Link to='/'>
                                <img className={classes.logo} src={logo} alt="DRESAN Logo" />
                            </Link>
                            <Typography className={classes.menuItem} color='textPrimary' variant='body1' component={Link} to='/acerca'>ACERCA</Typography>
                            <Typography className={`${classes.menuItem} ${classes.title}`} color='textPrimary' variant='body1' component={Link} to='/precios'>PRECIOS</Typography>
                            <Button variant='contained' color='secondary'>¡INNOVEMOS JUNTOS!</Button>
                        </Toolbar>
                    </AppBar>
                </>
            ) : (
                <>
                    <AppBar className={classes.darkNavigationDiv} elevation={1}>
                        <Toolbar>
                            <Link to='/'>
                                <img className={classes.logo} src={logo} alt="DRESAN Logo" />
                            </Link>
                            <Typography className={classes.darkMenuItem} color='textPrimary' variant='body1' component={Link} to='/acerca'>ACERCA</Typography>
                            <Typography className={`${classes.darkMenuItem} ${classes.title}`} color='textPrimary' variant='body1' component={Link} to='/precios'>PRECIOS</Typography>
                            <Button variant='contained' color='secondary'>¡INNOVEMOS JUNTOS!</Button>
                        </Toolbar>
                    </AppBar>
                </>
            )}   
        </div>
    )
}

export default Navbar;