
                                               Microservices architecture 

<br/>
👨🏽‍💻 Architecture <br/>
![342350112_1286402771968547_5225358028237134261_n](https://github.com/NaimDali/Microservices-Architecture/assets/57017057/9d96251f-7481-4bfd-b5ef-8d1e53036ef4)
<br/>
🎯 About the project
This project is an implementation of a microservices architecture using Node.js and Express framework. The architecture includes four services communicating with each other through HTTP requests: <br/>
• 8000:	The first service is an Orchestrator service that listens on port 8000 and handles incoming HTTP requests directly from the user. <br/>
• 8001:	The second service is a Commercial Service that receives a JSON object with properties such as id, somme, score and nom. It uses an OCR service to extract information from PDF files. <br/>
•	8002: The third service is a Risk Management Service that receives the JSON object from the Commercial Service and checks if the final score is greater or equal than 0.5. This will decide if we keep with the user’s request or refuse it.<br/>
 •8003: 	The fourth service is a Credit Service that receives the JSON object from the Risk Management Service and logs the message "CreditService done".<br/>

