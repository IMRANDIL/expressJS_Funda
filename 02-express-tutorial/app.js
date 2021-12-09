
const express = require('express');


const app = express();


const router = require('./router/people');

const loginrouter = require('./router/auth')
//middleware.....app.use()..//static asset....

app.use(express.static('./methods-public'));
//parse form data...

app.use(express.urlencoded({ extended: false }));

// parse json...now

app.use(express.json())
// route..

app.use('/api/people', router)

app.use('/login', loginrouter)

app.listen(7000, () => {
    console.log(`sever running on port: 7000...`);
})

