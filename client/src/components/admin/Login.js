import React from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions/user';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

let Login = (props)=>{

return(
    <div>
      {props.user.name && <Redirect to="/admin"/>}
      <h1>{props.user.name}</h1>
      <form onSubmit={
        props.handleSubmit(props.newUser)}>
        <Field
            type="text"
            name="name"
            component="input"/>
        <Field
            type="password"
            name="password"
            component="input"/>
        <button type="submit">Login</button>
      </form>
    <h2>{props.user.err}</h2>
    </div>
);
};

Login = reduxForm({
  form: 'login'
})(Login);

const mapStateToProps = (state)=>{
  return{
    user:state.user
  }
};

export default connect(mapStateToProps, actions)(Login)