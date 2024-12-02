const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi everyone !');
});

app.get('/date', (req, res) =>{
  res.send(`Current date and time: ${new Date()}`);
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if(index !== -1){
    users.splice(index, 1);
    res.status(200).send(`User ${userId} deleted`)
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});