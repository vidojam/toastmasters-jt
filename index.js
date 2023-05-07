import express from "express";
import cors from "cors";
import { getAllEvals, addEval, deleteEval, updateEval} from "./src/evals.js";

const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req,res) => {
//   res.send(`I am gRoot.`);
// });

app.get("/evals", getAllEvals);
app.post("/evals", addEval);
app.delete("/evals/:docId", deleteEval);
app.patch("/evals/:docId", updateEval);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`);
});