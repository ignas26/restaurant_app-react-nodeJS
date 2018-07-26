import axios from 'axios';

export function newUser(values){
  return async function (dispatch) {
    console.log(values);
    try {
      const res = await axios.post('/api/login', values);
    console.log(res.data);
    localStorage.setItem('token', 'Bearer '+res.data.token);
      dispatch({
      type:'NEW_USER',
      payload:res.data.name
    })
      }catch (err){
      console.log(err.message);
      dispatch({
        type:'AUTH_ERROR',
      })
    }
  }
}

export const logout = ()=>{
localStorage.removeItem('token');
return{
  type:'LOGOUT'
}
};