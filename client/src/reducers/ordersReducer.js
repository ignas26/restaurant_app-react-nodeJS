const orders = (state=[], action)=> {
  switch (action.type) {
    case 'ADD_ORDER' :
      return [...state, action.payload];
    case 'REMOVE_ORDER' : return [...state].filter((item,i)=>i!==action.payload);
    case 'REMOVE_ALL' : return [];
    default :
      return state
  }
};
export default orders