import { client, evalCollection } from'./mongoConnect.js'

client.connect()
 
const addEval = async() => {

  const myEval = {
    
    name: 'John',
    clarity: 'Spoken language is clear and is easily underestood',
    level: 4
  }

  const addedEval = await evalCollection.insertOne(myEval)
  console.log(addedEval)
}

addEval()