import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './Menu';
import Orders from './Orders';
import Categories from './Categories';
import {connect} from 'react-redux';
import * as actionsCat from '../../actions/categories';
import * as actionsMenu from '../../actions/menu';
const actions = {...actionsCat, ...actionsMenu};


class Shop extends React.Component{

  componentDidMount(){
this.props.fetchCategories();
this.props.fetchMenu();
  }

render() {
  return (
    <div className="shop">
      <button
          onClick={()=>{
            this.props.history.push('/admin')
          }}>Norėdami pridėti prekių <br></br> prisijunkite kaip admin
      </button>
    <Route exact path="/shop" component={Menu}/>
      <Categories/>
      <Orders/>
    </div>
  );
}
  }

  export default connect(null, actions)(Shop)