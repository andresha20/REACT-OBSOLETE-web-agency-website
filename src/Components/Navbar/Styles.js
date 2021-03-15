import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    navigationDiv: {
        flexGrow: 1,
    },
    darkNavigationDiv: {
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        color: 'black'
    },
    navigation: {
        margin: 0
    },
    logo: {
        width: 70,
        height: 70
    },
    menuItem: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: 'white',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    darkMenuItem: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: 'black',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
    title: {
        flexGrow: 1
    }
}))