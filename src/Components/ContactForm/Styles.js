import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        borderRadius: 10,
        marginTop: 20
    },
    groupedButtonsDiv: {
        display: 'flex'
    },
    groupedButtons: {
        width: '100%',
        flex: 1,
        backgroundColor: '#C5C5C5',
        border: 'none',
        borderRadius: 3,
        outline: 'none',
        color: '#fff',
        padding: '10px 20px 10px 20px',
        margin: '0px 5px 0px 5px',
        fontWeight: 'bold',
        cursor: 'pointer',

        "&:hover": {
            backgroundColor: '#E8761E'
        },
    },
    selectedButton: {
        backgroundColor: '#E8761E',
        border: 'none',
        borderRadius: 3,
        outline: 'none',
        color: '#fff',
        padding: '10px 20px 10px 20px',
        margin: '0px 5px 0px 5px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        marginTop: 20
    }
}))