const { application } = require('express');
const express = require('express');
const morgan = require('morgan')

const app = express();
// const logger = require('../logger');
// const authorized = require('../authorized')
// req => middleware => res....

// app.use('/api', logger);

// 1. use vs route

// 2. options - our own /express/third party



// app.use([logger, authorized])....multi middleware...

// app.use(express.static('./methods-public'));

app.use(morgan('tiny'))

app.get('/', (req, res) => {

    res.send(`<h1>Home</h1>`);
})

app.get('/about', (req, res) => {
    res.send(`<h1>Hi I'm Ali</h1>`);
})















// app.get('/api/products', (req, res) => {
//     res.send('products');
// })


// app.get('/api/items', (req, res) => {
//     res.send('items')
// })

app.listen(5000, () => {
    console.log(`sever running on port: 5000...`);
})

