import { client, evalCollection } from './mongoConnect.js';


const deleteEval = async () => {
  try {
    await client.connect()
    const itemDelete = await evalCollection.deleteOne({ name: "John" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

 deleteEval()