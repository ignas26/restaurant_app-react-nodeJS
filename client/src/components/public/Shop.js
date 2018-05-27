import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './Menu';
import Checkout from './Checkout';
import Orders from './Orders';
import Categories from './Categories';
import {connect} from 'react-redux';
import * as actions from '../../actions/categories';


class Shop extends React.Component{

  componentDidMount(){
this.props.fetchCategories('Gerimai');
  }

render() {
  return (
    <div className="shop">
    <Route exact path="/shop" component={Menu}/>
    <Route exact path="/shop/checkout" component={Checkout}/>
      <Categories/>
      <Orders/>
    </div>
  );
}
  }

  export default connect(null, actions)(Shop)