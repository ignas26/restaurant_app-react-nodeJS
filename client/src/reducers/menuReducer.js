const menu = (state=[], action)=>{
  switch (action.type){
    case 'FETCH_MENU': return [...action.payload.menu];
    case 'ADD_ITEM': return [...state, action.payload];
    default : return state
  }
};


export default menu