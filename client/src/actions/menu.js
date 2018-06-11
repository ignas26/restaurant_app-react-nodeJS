import axios from 'axios';
import * as types from './allTypes';

export function fetchMenu(){
return async function (dispatch){
  const response = await axios.get('/api/menu');
  dispatch({type:'FETCH_MENU', payload:response.data})
}
}

export function addItem(item){
    return{
      type:'ADD_ITEM',
      payload:item
  }
}

export function removeItem(_id){
  return async function (dispatch){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    const response = await axios.post('/api/remove', {_id});
    dispatch({
    type:types.REMOVE_ITEM,
    payload: response.data
  })
  }
}

