import React from 'react';
import {connect} from 'react-redux';


const Orders =(props)=>{
const orders = props.orders.map((order, i)=>{
  return <img src={order.img} key={i} alt=""/>
  });
  return (
      <div className="orders">
        {orders}
      </div>
  );
};
const mapStateToProps = (state)=>{
return{
  orders:state.orders
}
};

export default connect(mapStateToProps)(Orders)