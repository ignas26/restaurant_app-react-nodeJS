const user = (state={user:'', err:''}, action)=>{
  switch (action.type){
    case 'NEW_USER' :return {name:action.payload,err:""};
    case 'AUTH_ERROR' :return {name:"", err:"bad login credentials"};
    case 'LOGOUT' :return {name:"", err:""};
    default : return state;
  }
};

export default user;