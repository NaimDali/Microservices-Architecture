const axios = require('axios')
const FormData = require('form-data');


const NotifyController = async (req , res) =>{
    console.log("Notify user")

    if(req.body.finalScore >= 0.5){
        console.log("You are accepted to be among our clients")

    }
    else{
        console.log("Sorry to inform you that you are not going to be among us!")
    }
}

const CommercialServiceController = async (req , res) =>{
    let object = {
        id : req.body.id,
        amount : req.body.amount,
        score : req.body.score,
        name : req.body.name
    }
    try{
     console.log('Risk management Service.')
     let ans  = await axios.post('http://localhost:8002/RiskManagement',req.body)
    }catch(e){
        console.log(e)
    }

    res.json({
        body :req.body
    })
}

const RiskManagementServiceController = async (req , res) =>{
    console.log("RiskManagementService done")
    console.log("Credit Service.")

    if(req.body.finalScore >= 0.5){
        try{
        let ans  = await axios.post('http://localhost:8003/CreditService',req.body)  
        }catch(e){
            console.log(e)
        }
        res.json({body :req.body})
    }
    else{
        console.log("client rejected")
    }
}
const CreditServiceController =  (req , res) =>{
    console.log("CreditService done")
}

const uploadPdfController = async (req , res) =>{

        try {
          const formData = new FormData();
          console.log("Commercial Service.")
          formData.append('pdf', req.file.buffer, req.file.originalname);
          const response = await axios.post('http://localhost:8001/uploadpdf', formData, {
            headers: {
              ...formData.getHeaders(),
            },
          });
          console.log("Commercial Service done")
          res.send(response.data);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error');
        }
      
}




module.exports = {
    CommercialServiceController,CreditServiceController,RiskManagementServiceController,uploadPdfController,NotifyController
}
