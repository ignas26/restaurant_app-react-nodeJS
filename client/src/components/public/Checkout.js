import React from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/orders';


class Checkout extends React.Component {
  state = {
    checker: false
  };

  changer = () => {
    this.setState({
      checker: true
    })
  };

  render() {

    const max = 30;
    const min = 8;

    const getValues = (values) => {
      const order = {
        name: values.name,
        address: values.address,
        phone: values.phone,
        orders: this.props.orders
      };
      axios.post('/api/orders', order);
      this.props.dispatch(reset('contact'))
    };

    const {handleSubmit} = this.props;
    const orders = this.props.orders.map((item, i) => {
      return <li key={i}>{item.name}
        <button title="remove this from cart" onClick={() => this.props.removeOrder(i)}>x</button>
      </li>
    });
    const sum = this.props.orders.reduce((total, a) => {
      return total + a.price;
    }, 0);

    const {
      nameValue, submitting, pristine, reset
    } = this.props;

    return (
        <div className="checkout">
          <div className="wrapper">
            <button
                onClick={() => {
                  this.props.history.push('/shop')
                }}>grįžti į meniu
            </button>
            <h1 className="form">Užsakymo forma</h1>
            <div className="total">suma: {sum.toFixed(2)} €</div>
            <div className="orders-checkout">
              <ul>
                {orders}
              </ul>
              {orders.length > 0 ?
                  <button className="clean-cart" onClick={() => this.props.removeAll()} id="delete-cart">pašalinti visas
                    prekes</button>
                  :
                  null}
            </div>
            <form onSubmit={handleSubmit(getValues)}>
              <Field name="name"
                     type="text"
                     placeholder="Vardas"
                     component="input"
                     minLength={min - 4}
                     maxLength={max}
                     required="true">
              </Field>
              <Field name="address"
                     type="text"
                     placeholder="Adresas"
                     component="input"
                     minLength={min}
                     maxLength={max}
                     required="true">
              </Field>
              <Field
                  name="phone"
                  type="text"
                  placeholder="Telefono nr."
                  component="input"
                  minLength={max - 18}
                  maxLength={max - 18}
                  required="true">
              </Field>
              <button className="reset"
                      type="reset"
                      disabled={pristine || submitting}
                      onClick={reset}>Išvalyti laukus
              </button>
              <button className="submit"
                      type="submit"
                      onClick={() => this.changer()}
                      disabled={pristine || submitting}
              >Užsisakyti {nameValue} ?</button>

            </form>
            {this.state.checker ?
                <div className="order-msg"><h3>Užsakymo informacija atsirado admin panelėje, orders lauke</h3></div> : null}
            {this.state.checker ? <Link to="/login"><p>į admin panelę</p></Link> : null}
          </div>
        </div>
    );
  };
}

Checkout = reduxForm({
  form: 'contact'
})(Checkout);


const selector = formValueSelector('contact');
Checkout = connect(
    state => {
      // can select values individually
      const nameValue = selector(state, 'name');
      const addressValue = selector(state, 'address');
      const phoneValue = selector(state, 'phone');
      return {
        nameValue,
        addressValue,
        phoneValue
      }
    }
)(Checkout);


const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

export default connect(mapStateToProps, actions)(Checkout);