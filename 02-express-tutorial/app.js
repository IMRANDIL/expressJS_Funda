
const express = require('express');


const app = express();
let { people } = require('./data');
//middleware.....app.use()..//static asset

app.use(express.static('./methods-public'));
//parse form data...

app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('POST')
})

app.listen(5000, () => {
    console.log(`sever running on port: 5000...`);
})

