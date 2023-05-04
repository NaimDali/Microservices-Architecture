const express = require("express");
const fs = require("fs");
const app = express();
const filePath = "db.txt";
const axios = require('axios')

app.post("/CreditService", async (req, res) => {
  console.log("document signed")
  console.log("document saved to Contract file system ")

  try {
    let ans = axios.post('http://localhost:8000/CreditService', req.body) 

  }catch(e) {
    console.log(e)
  }
});
const PORT = 8003;
app.listen(PORT, () => {  
  console.log("Credit Service app is running on port 8003")
});