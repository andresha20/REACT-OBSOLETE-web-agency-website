import { Grid, Button } from '@material-ui/core';
import useStyles from './Styles';
import InputField from './Input';
import { useState, useEffect } from 'react';

const ContactForm = () => {

    const classes = useStyles();
    const [data, setData] = useState({ name: '', phone: '', email: '', websiteType: '', description: '', budget: '', contact: '' })
    const inputData = {
        typeOfProject: [{ value: 'INFORMATIVO' }, { value: 'PERSONAL' }, { value: 'TIENDA' }, { value: 'OTRO' }],
        budget: [{ value: '$200.000 a $500.000' }, { value: '$500.000 a $700.000' }, { value: '$700.000 a $1.000.000' }, { value: 'MAS DE $1.000.000' }],
        contact: [{ value: 'WhatsApp' }, { value: 'LLAMADA' }, { value: 'CORREO ELECTRÓNICO' }],
    }

    const handleChange = (e) => setData({...data, [e.target.name]: e.target.value });

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>TUS DATOS</h3></div>
                <InputField name='name' label='Nombre' handleChange={handleChange} half autoFocus required/>
                <InputField name='phone' label='Celular' handleChange={handleChange} type='number' half/>
                <InputField name='email' label='Correo electrónico' handleChange={handleChange} type='email' required/>
            </Grid>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>TIPO DE PÁGINA WEB</h3></div>
                <div className={classes.groupedButtonsDiv}>
                    {inputData.typeOfProject.map(type => (
                            <button value={type.value} onClick={(e) => setData({...data, websiteType: e.target.value})} className={data.websiteType === type.value ? classes.selectedButton : classes.groupedButtons}>{type.value}</button>
                    ))}
                </div>
            </Grid>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>BREVE DESCRIPCIÓN</h3></div>
                <InputField className={classes.description} name='description' label='Descripción breve' handleChange={handleChange} multiline required/>
            </Grid>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>PRESUPUESTO</h3></div>
                <div className={classes.groupedButtonsDiv}>
                    {inputData.budget.map(budget => (
                        <button value={budget.value} onClick={(e) => setData({...data, budget: e.target.value})} className={data.budget === budget.value ? classes.selectedButton : classes.groupedButtons}>{budget.value}</button>
                    ))}
                </div>            
            </Grid>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>¿CÓMO DESEAS SER CONTACTADO(A)?</h3></div>
                <div className={classes.groupedButtonsDiv}>
                    {inputData.contact.map(contact => (
                        <button value={contact.value} onClick={(e) => setData({...data, contact: e.target.value})} className={data.contact === contact.value ? classes.selectedButton : classes.groupedButtons}>{contact.value}</button>
                    ))}
                </div>            
            </Grid>
            <Grid className={classes.container} container spacing={3} justify='center'>
                <div className={classes.title}><h3>¿LISTO?</h3></div>
                <Button style={{ marginTop: 20 }} fullWidth variant='contained' size='large' color='secondary'>¡SÍ, HAGAMOSLO!</Button>  
            </Grid>
        </>
    )
}

export default ContactForm;