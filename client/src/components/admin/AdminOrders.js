import React from 'react';
import {connect} from 'react-redux';

const AdminOrders = (props)=>{
  const orders = props.activeOrders.map((order, i)=>{
    const items = order.orders.map((item, n)=>{
      return(
          <li key={n}>
            {item.name}
            {item.category}
            </li>
      )
    });
    return (
    <div key={i} className="active-order">
      <h3>{order.name}</h3>
      <h3>{order.address}</h3>
      <h3>{order.phone}</h3>
      <ul>
        {items}
      </ul>
    </div>
    )
  });
    return(
        <div className="admin-orders">
          {orders}
        </div>
    );
  };

const mapStateToProps = (state)=>{
return{
  activeOrders:state.activeOrders,
}
};

export default connect (mapStateToProps)(AdminOrders)