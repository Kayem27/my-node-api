const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hi everyone !');
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = req.length + 1;
  res.push(newUser);
  res.status(201).json(newUser);
})

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

const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
app.get('/users', (req, res) => {
  res.json(users);
});