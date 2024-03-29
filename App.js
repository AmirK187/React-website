import React,{Component} from 'react';
import PageWrappper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';



class App extends Component {
  render() {
    return (
      <Router>
        <PageWrappper >
        
            <Route 
            exact = {true}
            path="/"
            component = {Home}
            />

            <Route
              path = "/about"
              component = {About}
            />

            <Route 
            path= '/contact'
            component={Contact}
            />

        </PageWrappper>
      </Router>

   );
  }
}

export default App;
