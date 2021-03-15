import { Typography } from "@material-ui/core";
import useStyles from './Styles';

const Footer = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>Footer</Typography>
        </div>
    )
}

export default Footer;