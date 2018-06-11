import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './style/main.scss';
import HomePage from './components/public/HomePage';
import Checkout from './components/public/Checkout';
import Admin from './components/admin/Admin';
import Shop from './components/public/Shop';
import Login from './components/admin/Login';


class App extends Component{
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/checkout" component={Checkout}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
