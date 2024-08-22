const express = require('express')

const port = 7865
const app = express()

app.get('/', (req, resp) => {
    resp.send('Welcome to the payment system')
})

app.listen(port, () => {
    console.log('API available on localhost port 7865')
})

