const menu = (state=[], action)=>{
  switch (action.type){
    case 'FETCH_MENU': return [...action.payload.menu];
    default : return state
  }
};


export default menu