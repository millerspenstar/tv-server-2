const express = require('express')
const bodyParser = require('body-parser')

const app= express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', "POST, GET, PUT, DELETE, OPTIONS")
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())
app.use((req, res, next)=> {
    console.log(req.body)
    next()
}) 

const inMemoryDatabase = {
    shows: [
      {
          name: 'Kung Fu Panda',
          rating: 2,
          previewImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6siUv3oGQm6iZcGJdS-vdooYKp3A8laiRS6HEkg8JJlIRdiA' },
          {
            name: 'Kung Fu Panda3',
            rating: 5,
            previewImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6siUv3oGQm6iZcGJdS-vdooYKp3A8laiRS6HEkg8JJlIRdiA' }
  ]
  }


app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body 
    inMemoryDatabase.shows.push(newShow)
    res.send(newShow)
})

app.listen('3001', ()=> console.log('Running on port 3001'))