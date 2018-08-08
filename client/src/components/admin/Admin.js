import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Menu from './AdminMenu';
import Orders from './AdminOrders';
import * as menuActions from '../../actions/menu';
import * as catActions from '../../actions/categories';
import * as orderActions from '../../actions/orders';
import * as userActions from '../../actions/user';
import {connect} from 'react-redux';
import io from 'socket.io-client';
//import jwt from 'jsonwebtoken';
const actions = {
  ...menuActions,
  ...catActions,
  ...orderActions,
    ...userActions
};

class Admin extends React.Component{

  constructor(props){
    super(props);
    this.socket = io('http://712075.s.dedikuoti.lt:5000/');
    this.socket.on('connect', function(){
      console.log('connect to server');
    });
    this.socket.on('order', function (data){
      console.log(data);
      props.addActiveOrder(data)
    })
  }

  componentWillMount(){
    let token = localStorage.getItem('token');
    // if(token) token=token.split(' ')[1];
    // console.log(token);
    // const decoded = jwt.decode(token);
    // console.log(decoded);
    if(!this.props.user.name && !token) this.props.history.push('/login')
  }


  componentDidMount(){
  this.props.fetchMenu();
  this.props.fetchCategories();
  }

  render(){
    return(
<div className="admin">
<aside>
  <NavLink to="/admin/orders" activeClassName="active">
    Orders
  </NavLink>
  <NavLink to="/admin/menu" activeClassName="active">
    Menu
  </NavLink>
  <div onClick={()=>this.socket.emit('test', 'message')}></div>
  <button className="logout-btn"
      onClick={()=>{
        this.props.logout();
        this.props.history.push('/login')
      }}>Logout
  </button>
</aside>
  <Switch>
  <Route exact path="/admin/orders" component={Orders}/>
  <Route exact path="/admin/menu" component={Menu}/>
  </Switch>
</div>
    );
  }
}

const mapStateToProps = (state)=>{
return{
  user:state.user
}
};

export default connect(mapStateToProps, actions)(Admin)