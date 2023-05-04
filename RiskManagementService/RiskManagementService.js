const express = require("express");
const fs = require("fs");
const app = express();
const filePath = "db.txt";
const axios = require('axios')
app.use(express.json());


app.post("/RiskManagement", async (req, res) => {
  console.log("central Bank done")
  console.log("final score calculated! ")
  
  let id = req.body.id
  let amount = req.body.amount
  let score = req.body.score
  let name = req.body.name
  let finalScore = req.body.score * (Math.random()+.7);

  req.body.finalScore = finalScore

  
  try {
    let ans = axios.post('http://localhost:8000/RiskManagement', req.body) 
  }catch (e){
    console.log(e)
  }
  console.log(
    "send back to Orchestrator"
  )

  


values = [ id , amount , score , name , score , finalScore]

fs.appendFile(filePath, '\n'+values.join(","), (err) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(`file: ${filePath}`);
  }
});
});


const PORT = 8002;
app.listen(PORT, () => {  
  console.log("Risk Management Service is running on port 8002")
});