const categories = (state=[], action)=>{

  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return [...state, ...action.payload.categories];
    default :
      return state
  }
};

export default categories