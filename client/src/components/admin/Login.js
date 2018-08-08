import React from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions/user';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  state={
    show: false
  };

  showQuestion = e =>this.setState({show: !this.state.show});

render() {
  return (
      <div className="checkout-login">
      <div className="wrapper">
        {this.props.user.name && <Redirect to="/admin"/>}
        <h1>{this.props.user.name}</h1>
        <form onSubmit={
          this.props.handleSubmit(this.props.newUser, () => {
            this.props.history.push('/admin')
          })}>
          <h1>Iveskite vartotojo vardą </h1>
          <Field
              type="text"
              name="name"
              component="input"
              placeholder="vardas"
          />
          <h1>Iveskite vartotojo slaptažodį </h1>
          <Field
              type="password"
              name="password"
              component="input"
              placeholder="slaptažodis"
          />
          <button type="submit">Login</button>
        </form>

        <button className="spoiler" onClick={()=>this.showQuestion()}>hintas</button>

        <button onClick={()=>{this.props.history.push('/shop')}}>grįžti į meniu</button>


        { this.state.show &&
            <div>
        <div className="backdrop"
             onClick={this.showQuestion}
             style={this.state.show ? {display: 'block'} : {display: 'none'}}>
        </div>
        <div className="popup"
             style={this.state.show ? {top: '50%'} : {top: '-50%'}}>
          <h3>Vardas - admin </h3>
          <h3>Slaptažodis - admin </h3>
          <div onClick={this.showQuestion}
               className="no">
            Išeiti
          </div>
        </div>
            </div> }


        <h2>{this.props.user.err}</h2>
      </div>
      </div>
  )
}
}

Login = reduxForm({
  form: 'login'
})(Login);

const mapStateToProps = (state)=>{
  return{
    user:state.user
  }
};

export default connect(mapStateToProps, actions)(Login)