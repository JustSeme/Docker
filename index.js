const express = require('express');
const app = express()

app.listen(5000, () => {
    console.log('express server listen on port 5000');
})

app.get('/',  (req, res) => {
    console.log('new request');
    res.json({
        hello: 'world'
    })
})