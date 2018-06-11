const jwt = require('jsonwebtoken');

const auth = async (req, res, next)=>{

try {
  const token = req.headers.authorization.split(' ')[1];
  if(!token) return res.status(401).send({err: 'no token'});
  const user = await jwt.verify(token, 'shhhhh');
  if(!user) return res.status(401).send({err: 'unauthorized'});
  console.log('user verified');
next()
}catch (err){
  res.status(401).send({err:'unauthorized2'})
}
};

module.exports= auth;