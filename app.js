const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    console.log('hello Sean')
})
app.listen(PORT, () => {
    console.log(`Listening on seans port ${PORT}`)
})