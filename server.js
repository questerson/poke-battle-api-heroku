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
  const unknown = new Pokemon('Unknown', 'Unknown', '/images/unknown.png')
  let pokemons = [pikachu, bulbasaur, squirtle, charmander, blastoise, snorlax, unknown]
  


  app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/',(request,response)=>{
    const pokeName = request.params.name.toLowerCase()

   console.log()
        response.json(pokemons)
  
    
})




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})