import React from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../actions/orders';


let Checkout=(props)=>{
  const getValues = (values)=>{
    const order = {
      name:values.name,
      address:values.address,
      phone:values.phone,
      orders:props.orders
    };
    axios.post('/api/orders', order)
  };
  const {handleSubmit} = props;
  const orders = props.orders.map((item,i)=>{
    return <li key={i}>{item.name} <button title="remove this from cart" onClick={()=>props.removeOrder(i)}>x</button></li>
  });
  const sum = props.orders.reduce((total,a)=>{
    return total + a.price;
  },0);

  return(
      <div className="checkout">
        <div className="wrapper">
          <button
              onClick={()=>{
                props.history.push('/shop')
              }}>grįžti į meniu
          </button>
          <div className="total">suma: {sum.toFixed(2)} €</div>
          <div className="orders-checkout">
            <ul>
              {orders}
            </ul>
            {orders.length>0?
                <button className="clean-cart" onClick={()=>props.removeAll()} id="delete-cart">pašalinti visas prekes</button>
                :
                null}
          </div>
          <form onSubmit={handleSubmit(getValues)}>
            <Field name="name" type="text" placeholder="Your Name" component="input"></Field>
            <Field name="address" type="text" placeholder="Address" component="input"></Field>
            <Field name="phone" type="text" placeholder="Phone nr." component="input"></Field>
            <button type="submit">Order</button>
          </form>
        </div>
      </div>
  );
};

Checkout = reduxForm({
  form:"contact"
})(Checkout);

const mapStateToProps = (state)=>{
  return{
    orders:state.orders
  }
};

export default connect(mapStateToProps, actions)(Checkout);