const express = require('express');

const app = express();

app.get('/', (request, response) =>{
  return response.json({message: 'Knex Aplication'});
});


app.listen(3338,()=>{
  console.log('O  servidor está rodando na porta http://localhost:3338');
});