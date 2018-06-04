import React from 'react';
import {connect} from 'react-redux';
import * as actionsCat from '../../actions/categories';
import * as actionsMenu from '../../actions/menu';
import {Field, reduxForm, reset} from 'redux-form';
import axios from 'axios';
import Dropzone from 'react-dropzone';
const actions = {...actionsCat, ...actionsMenu};


class AdminMenu extends React.Component{
state={
  message:'',
  item:[],
  file:''
};

uploadImage = (files)=>{
this.setState({file:files[0]})
};

  addProduct = (values) =>{
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('category', this.props.active);
    formData.append('itemimage', this.state.file);

  axios.post('/api/admin/additem', formData).then((res)=>{
this.setState({message:res.data.message});
const {name, price, category, img} = res.data;

this.props.addItem({name, price, category, img:img});
    this.setState({file:''});
    this.props.dispatch(reset('menu'));
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
          {this.props.active &&
          <div>

            <Dropzone
                style={{
                  width:'120px',
                  height:'120px',
                  margin:'auto',
                  backgroundImage:`url(${this.state.file.preview})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  border: '1px solid red'
                }}
                onDrop={this.uploadImage}>
              <p>drop item image here</p>
            </Dropzone>
          <form onSubmit={this.props.handleSubmit(this.addProduct)}>
            <Field autoComplete="off" name="name" component="input" type="text"></Field>
            <Field autoComplete="off" name="price" component="input" type="number"></Field>
            <button type="submit">Add</button>
          </form>
          </div>
            }
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