import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/public/HomePage';
import './style/main.scss';


class App extends Component{
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
