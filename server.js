const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())



class Pokemon {
    constructor(name, type, imageUrl) {
      this.name = name
      this.type = type
      this.imageUrl = imageUrl 
    }
  }
  const pikachu = new Pokemon('Pikachu', 'Electric',  '/images/pika.png')
  const bulbasaur = new Pokemon('Bulbasaur', 'Grass',  '/images/bulb.png')
  const squirtle = new Pokemon('Squirtle', 'Water',  '/images/squirt.png')
  const charmander = new Pokemon('Charmander', 'Fire', '/images/char.png')
  const blastoise = new Pokemon('Blastoise', 'Water', '/images/blastoise.png')
  const snorlax = new Pokemon('Snorlax', 'Normal',  '/images/snorlax.png')


  


  app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})




app.get('/images/background.jpg', (request, response)=>{
  response.sendFile(__dirname + '/images/background.jpg')
})



app.get('/images/bulb.png', (request, response)=>{
  response.sendFile(__dirname + '/images/bulb.png')
})
app.get('/images/pika.png', (request, response)=>{
  response.sendFile(__dirname + '/images/pika.png')
})
app.get('/images/squirt.png', (request, response)=>{
  response.sendFile(__dirname + '/images/squirt.png')
})
app.get('/images/snorlax.png', (request, response)=>{
  response.sendFile(__dirname + '/images/snorlax.png')
})
app.get('/images/pika.png', (request, response)=>{
  response.sendFile(__dirname + '/images/pika.png')
})
app.get('/images/char.png', (request, response)=>{
  response.sendFile(__dirname + '/images/char.png')
})

app.get('/api/',(request,response)=>{
   

  
        response.json(pokemons)
  
    
})




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})