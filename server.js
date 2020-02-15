const express = require('express')
const app = express()

let post = {
    post: [{
        owner: 'dog',
        content: 'bark more',
        reply: []
    }]
}

let test = []

app.get('/', (req, res) => {
    res.send('Hello World')
})

// app.get('/post', (req, res) => {
//     res.json(post)
// })

app.use(express.json()) //Use to parse JSON bodies
app.use(express.urlencoded()) //Parse URL-endcoded bodies 


// app.post('/post', (req, res) => {
//     post.post.push(req.body)
//     res.status(201).json(req.body)
// })

app.get('/post', (req, res) => {
    test.push(req.query.a)
    res.send(test)
})



app.listen(3000, () => {
    console.log('Start server at port 3000');
})