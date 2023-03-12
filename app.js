const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!', statusCode: 200 });
});


app.get('/api/info', (req, res) => {
  res.send({ message: 'Hello World!This is KGSL TASK!', statusCode: 200 });
});

app.post('/api/post/info' ,(req,res)=>{
   res.send({...req.body});
})


//app.listen(5000,()=>console.log('listen on port:5000'))

module.exports = app;