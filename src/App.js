import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './Assets/theme';
import useStyles from './Styles';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {

  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <Router>
        <div className={classes.root}>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Switch>
          </div>
          <Footer/>
        </Router>
      </ThemeProvider>
  );
}

export default App;
