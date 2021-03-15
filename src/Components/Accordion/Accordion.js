import { Grid, Paper, Typography, Box, Button, Divider, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import useStyles from './Styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionComponent = ({ title, text }) => {

    const classes = useStyles();

    return (
        <>
            <Accordion>
                <AccordionSummary className={classes.textColor} expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
                <AccordionDetails className={classes.textColor}>{text}</AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionComponent;