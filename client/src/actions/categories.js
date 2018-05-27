import axios from 'axios';


export function fetchCategories(category){
  return async function (dispatch) {
   const response = await axios.get('/api/categories');
 dispatch({
   type:'FETCH_CATEGORIES',
   payload:response.data
 })
  }
}

export  function switchCategory(value) {
  return {
    type:'SWITCH_CATEGORY',
    payload:value
  }
}