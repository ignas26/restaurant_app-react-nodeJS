import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/categories';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';

class AdminMenu extends React.Component{
state={
  message:'',
  item:[]
};


  addProduct = (values) =>{
  axios.post('/api/admin/additem', values).then((res)=>{
    console.log(res.data.message);
this.setState({message:res.data.message})
  })
  };

  render(){
    const categories = this.props.categories.map((item, i)=>{
      return (
          <li
              className={this.props.active === item.name? 'active-cat' : null}
              onClick={()=>this.props.switchCategory(item.name)}
              key={i}>
            {item.name}
          </li>
      )
    });


    const items = this.props.menu.filter(item=>{
      return item.category===this.props.active
    }).map((item, i)=>{
      return(
          <div
              key={i} className="menu-item">
            <h3>{item.name}</h3>
            <img src={item.img} alt=""/>
            <h4>{item.price}</h4>
            <h5>remove</h5>
          </div>
      )
    });





    return(
        <div className="admin-menu">
          <ul>
            {categories}
          </ul>
          <form onSubmit={this.props.handleSubmit(this.addProduct)}>
            <Field name="name" component="input" type="text"></Field>
            <Field name="price" component="input" type="number"></Field>
          <button type="submit">Add</button>
          </form>
          <h2>{this.state.message}</h2>
          <div className="menu-list">
            {items}
          </div>
        </div>
    )
  }
}

const mapStateToProps= (state)=>{
  return{
    categories:state.categories,
    menu:state.menu,
    active:state.active
  }
};

AdminMenu=reduxForm({
  form:'menu'
})(AdminMenu);

export default connect(mapStateToProps, actions)(AdminMenu)