import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/categories';

class AdminMenu extends React.Component{
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

export default connect(mapStateToProps, actions)(AdminMenu)