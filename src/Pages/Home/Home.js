import useStyles from './Styles';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default Home;