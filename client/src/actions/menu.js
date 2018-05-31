import axios from 'axios';

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

