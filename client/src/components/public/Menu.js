import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/orders';
import {Link} from 'react-router-dom';

const Menu =(props)=>{
  const items = props.menu.filter(item=>{
  return item.category===props.active
  }).map((item, i)=>{
  return(
      <div
          onClick={()=>props.addOrder(item)}
      key={i} className="menu-item">
        <h3>{item.name}</h3>
        <img src={item.img} alt=""/>
        <h4>{item.price}</h4>
      </div>
  )
  });
  return (
      <div className="menu">
        <h1>menu</h1>
        <h2>{props.active}</h2>
        <div className="menu-list">
          {items}
        </div>
        {props.orders.length>0 && <Link to="/checkout">Checkout</Link>}
      </div>
  );
};

const mapStateToProps= (state)=>{
return{
  menu:state.menu,
  active:state.active,
  orders:state.orders
}
};

export default connect(mapStateToProps, actions)(Menu)