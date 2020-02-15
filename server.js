const express = require('express')
const app = express()

let post = {
    post: [{
        owner: 'dog',
        content: 'bark more',
        reply: []
    }]
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/post', (req, res) => {
    res.json(post)
})

app.use(express.json())
app.use(express.urlencoded())


app.listen(3000, () => {
    console.log('Start server at port 3000');
})