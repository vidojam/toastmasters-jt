import { client, evalCollection } from'./mongoConnect.js';

client.connect()

const editEval = async () => {

  const updatedEval = await evalCollection.findOneAndUpdate(
    { name: "George" },
    { $set: { name: "Chess", special: true }}
  );
  console.log(updatedEval);
};

 editEval()