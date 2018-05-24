import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/public/HomePage';
import './style/main.scss';
import Shop from './components/public/Shop';


class App extends Component{
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
