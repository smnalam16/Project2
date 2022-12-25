
const express = require('express')
const app = express()
const port = 5684
const path = require('path')



app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post('/comment', (req, res) => {
    console.log(req.body)  
    res.json(req.body)
})


app.get('/', (req, res) => {
     res.sendFile('Post req Recievedl')
})    

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public',  'index.html'))

})

app.get('/Sumonalam', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Sumonalam.html'))
})
