import React from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';


let Checkout = (props)=>{
  const getValues = (values)=>{
    const order={
        name:values.name,
        address:values.address,
        phone:values.phone,
        orders:props.orders
    };
  axios.post('/api/orders', order)
  };

const {handleSubmit} = props;
  return (
      <div className="checkout">
        <div className="wrapper">
          <div className="back">back </div>
      <div className="total">total: 0$</div>
        <form onSubmit={handleSubmit(getValues)}>
          <Field name="name" type="text" component="input"></Field>
          <Field name="address" type="text" component="input"></Field>
          <Field name="phone" type="text" component="input"></Field>
          <button type="submit">Order</button>
        </form>
      </div>
      </div>
  );
};

Checkout = reduxForm({
  form: 'contact'
})(Checkout);

const mapStateToProps = (state)=>{
return{
  orders:state.orders
}
};

export default connect(mapStateToProps)(Checkout)