const categories = (state=[], action)=>{

  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return [...action.payload.categories];
    default :
      return state
  }
};

export default categories