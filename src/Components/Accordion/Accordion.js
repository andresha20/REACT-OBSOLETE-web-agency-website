import { Grid, Paper, Typography, Box, Button, Divider, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import useStyles from './Styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionComponent = ({ title, text, items }) => {

    const classes = useStyles();

    return (
        <>
            <Accordion>
                <AccordionSummary className={classes.textColor} expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
                <AccordionDetails className={classes.textColor}>{text}</AccordionDetails>
                {items && (<AccordionDetails className={classes.textColor}><div>{items.map(item => (<p>{item}</p>))}</div></AccordionDetails>) }
            </Accordion>
        </>
    )
}

export default AccordionComponent;