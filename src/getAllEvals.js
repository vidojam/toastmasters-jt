import { client, evalCollection } from "./mongoConnect.js";

client.connect();

const getAllEvals = async () => {
  
  try {
    await client.connect()
    const allEvals = await evalCollection.find().toArray()
    console.log(allEvals)

    } catch (error) {
    console.log(error) 
    } finally {
      await client.close()
    }
};

 getAllEvals();