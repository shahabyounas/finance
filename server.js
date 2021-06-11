const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use(express.static(path.join(__dirname, './client/build')));



app.get('/', (req, res) => res.send("Server is up and running"));


app.use((req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });

app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE'); // Add other methods here
    res.send();
  });


const PORT = 8000;

app.listen(process.env.PORT || PORT, console.log(`Server running on port ${PORT}`));