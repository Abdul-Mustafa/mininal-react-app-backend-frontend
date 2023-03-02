const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration



const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/admin');
const schema = new mongoose.Schema({  name: 'string', size: 'string' });
const Tank = mongoose.model('tank', schema);

app.use(express.json());

 
app.post('/event.json', async (req, res) => {
  try {
    const tanks = await Tank(req.body); // Retrieve all tanks from the database
    tanks.save().then(doc => console.log(doc));
    res.send(); // Send the retrieved data as the response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // Send an error response
  }
});

app.listen(port, () => {
  console.log('Server is running on port', port);
}); 