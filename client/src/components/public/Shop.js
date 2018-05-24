import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './Menu';
import Checkout from './Checkout';
import Orders from './Orders';
import Categories from './Categories';



class Shop extends React.Component{
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

  export default Shop