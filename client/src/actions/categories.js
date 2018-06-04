import axios from 'axios';
import * as types from './allTypes';


export function fetchCategories(category){
  return async function (dispatch) {
   const response = await axios.get('/api/categories');
 dispatch({
   type:types.FETCH_CATEGORIES,
   payload:response.data
 })
  }
}

export  function switchCategory(value) {
  return {
    type:types.SWITCH_CATEGORY,
    payload:value
  }
}