import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/orders';

const Orders=(props)=>{
  const orders = props.orders.map((order,i)=>{
    return <div key={i} className="order"><img src={order.img} alt=""/><button onClick={()=>props.removeOrder(i)}>x</button></div>
  });
  return(
      <div>
      { props.orders.length>0 && <div className="orders-container">
        <span><h3>pasirinktos prekės:</h3></span>
        {orders}
      </div>}
      </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    orders:state.orders
  }
};

export default connect(mapStateToProps, actions)(Orders);