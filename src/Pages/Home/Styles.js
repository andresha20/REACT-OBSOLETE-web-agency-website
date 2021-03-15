import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Assets/Images/mainBackground.jpg';

export default makeStyles ((theme) => ({
    root: {
        paddingTop: 120,
        paddingBottom: 50
        },
        firstSection: {
            minHeight: 600,
            padding: '50px 50px 50px 50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'radial-gradient(at 50% 0%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
        },
        secondSection: {
            marginTop: 16,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'white',
            padding: '20px 100px 50px 100px'
        },
        paper: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            padding: 70
        },
        paper1: {
            backgroundColor: '#095987',
            padding: 40,
            minHeight: 350,
        },
        paper2: {
            backgroundColor: '#0487B2',
            padding: 40,
            minHeight: 50
        },
        paper3: {
            backgroundColor: '#e8761e',
            padding: 40,
            minHeight: 'inherit'
        },
        button: {
            marginTop: 40
        },
        bold: {
            fontSize: 60,
            fontWeight: 'bold',
            padding: 0, 
            margin: 0
        },
        boldNormal: {
            fontSize: 20,
            fontWeight: 'normal',
            padding: 0, 
            margin: 0
        },
        lightNormal: {
            fontSize: 24,
            fontWeight: 'normal',
            padding: 0, 
            margin: 0
        },
        lightBold: {
            fontSize: 20,
            fontWeight: 'bold',
            padding: 0, 
            margin: 0
        },
        thirdSection: {
            marginTop: 16,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: 60,
            background: 'radial-gradient(at 50% 0%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
        },
        paperImage: {
            width: 350,
            height: 350
        },
        white: {
            color: '#fff'
        }
}))