import { TextField, Grid } from '@material-ui/core';
import useStyles from './Styles';

const InputField = ({ half, name, label, handleChange, type, autoFocus, multiline, required}) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField className={classes.input} 
                name={name}
                label={label}
                onChange={handleChange}
                type={type}
                autoFocus={autoFocus}
                multiline={multiline}
                required={required}
                fullWidth 
                color='secondary'
                variant='outlined'
                rows={4}
            />
        </Grid>
    )
}

export default InputField;