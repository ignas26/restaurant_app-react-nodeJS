import * as types from '../actions/allTypes';

const activeOrders = (state=[], action)=>{
  switch (action.type){
    case types.ADD_ACTIVE_ORDER :
      return [action.payload, ...state];
    default: return state
  }
};

export default activeOrders