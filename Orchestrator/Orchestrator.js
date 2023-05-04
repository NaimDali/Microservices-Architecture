const express = require('express');

const {CommercialServiceController,uploadPdfController,CreditServiceController,RiskManagementServiceController,NotifyController} = require('./controllers')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({ storage: storage,dest: "uploads/images" })


app.post( '/uploadpdf',upload.single("pdf"), app.post('/uploadpdf', upload.single('pdf'), uploadPdfController))
app.post( '/CommercialService',CommercialServiceController)
app.post( '/RiskManagement',RiskManagementServiceController)
app.post( '/CreditService',CreditServiceController)
app.post( '/NotifyUser',NotifyController)



app.get('/', (req, res) => {
  res.send('Server is running');
});


const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


