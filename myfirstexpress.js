const express = require('express');

const app = express();

//app.get..
//app.post..
//app.put/patch
//app.delete
//app.all
//app.use
//app.listen...
//home page.....
app.get('/', (req, res) => {
    console.log('user hit the page');
    res.status(200).send('<h1>Home page</h1>')
})

//about page...

app.get('/about', (req, res) => {
    res.status(200).send(`<h1>Hi I'm Ali</h1>`)
})

// error page....

app.all('*', (req, res) => {
    res.status(404).send(`<h1>OOPS...Nothing here!!</h1>\n<a href='/'>back home</a>`)
})


app.listen(5000, () => {
    console.log(`server running on port: 5000`);
})