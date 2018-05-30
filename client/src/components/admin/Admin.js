import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Menu from './AdminMenu';
import Orders from './AdminOrders';
import * as menuActions from '../../actions/menu';
import * as catActions from '../../actions/categories';
const actions = {...menuActions, ...catActions};


class Admin extends React.Component{
  componentDidMount(){
  this.props.fetchMenu();
  this.props.fetchCategories();
  }

  render(){
    return(
<div className="admin">
<aside>
  <NavLink to="/admin/orders" activeClassName="active">
    Orders
  </NavLink>
  <NavLink to="/admin/menu" activeClassName="active">
    Menu
  </NavLink>
</aside>
  <Switch>
  <Route exact path="/admin/orders" component={Orders}/>
  <Route exact path="/admin/menu" component={Menu}/>
  </Switch>
</div>
    );
  }
}

export default connect(null, actions)(Admin)