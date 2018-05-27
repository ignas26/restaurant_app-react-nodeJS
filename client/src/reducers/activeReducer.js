const active = (state='', action)=>{
  if(action.type==='SWITCH_CATEGORY'){
    return action.payload
  }else{
    return state
  }
  };


export default active