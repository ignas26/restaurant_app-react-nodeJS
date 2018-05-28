import React from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';

let Checkout = (props)=>{
  const getValues = (values)=>{
  axios.post('/api/orders', values)
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



export default Checkout