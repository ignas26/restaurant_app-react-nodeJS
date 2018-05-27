import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/categories';

const Categories =(props)=>{
const categories = props.categories.map((item, i)=>{
return (
    <div
        className={props.active===item.name? "category active" : "category"}
        onClick={()=>props.switchCategory(item.name)}
        key={i}
     >
      <img src={item.img} alt=""/>
    <h3>{item.name}</h3>
    </div>
)
});
  return (
    <div className="categories">
      <ul>
        {categories}
      </ul>
    </div>
);
};

const mapStateToProps = (state) =>{
return{
  categories:state.categories,
  active:state.active
}
};

export default connect (mapStateToProps, actions)(Categories)