
const express = require('express');

const app = express();

const { products } = require('./data')


app.get('/', (req, res) => {
    res.send(`<h1> Home Page </h1><a href='/api/products'>Products</a>`)
})


app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };


    });
    res.json(newProduct)
})




app.get('/api/products/:productID', (req, res) => {

    const { productID } = req.params;
    const singleItem = products.find((product) => product.id === Number(productID));
    if (!singleItem) {
        return res.status(404).send(`<h1>Products does not exist</h1><a href = '/api/products'>Back to products</a>`)
    }

    return res.json(singleItem)
})



app.get('/api/v2/query', (req, res) => {
    const { search, limit } = req.query;

    let sortedItems = [...products];
    if (search) {
        sortedItems = sortedItems.filter((items) => {
            return items.name.startsWith(search);
        })
    }

    if (limit) {
        sortedItems = sortedItems.slice(0, Number(limit));
    }
    if (sortedItems.length < 1) {
        // res.status(200).send(`<h1>Request Successful but no item here</h1><a href ='/'>back home</a>`)
        return res.status(200).json({ success: true, data: [] })
    }

    return res.status(200).json(sortedItems)
})







app.listen(5000, () => {
    console.log(`sever running on port: 5000...`);
})

