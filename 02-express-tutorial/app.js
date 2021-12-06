const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware.....app.use()
app.use(express.static('../public'))



//home page...

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// two ways there..
// adding to static assets..
// server side rendering...ssr


// });


app.all('*', (req, res) => {
    res.status(404).send(`<h1>OOPS...Nothing here!!</h1>\n<a href='/'>Back Home</a>`)
})










app.listen(5000, () => {
    console.log(`server running on port: 5000`);
})