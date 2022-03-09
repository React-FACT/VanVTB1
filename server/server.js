require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const { registerController } = require("./src/configs/controller.config");
const { createConnetion } = require("./src/configs/db.config");
const cors = require("cors");
const jwt = require("jsonwebtoken");

var corsOptions = {
    origin: "http://localhost:3000"
};
server.use(cors(corsOptions));
server.use(express.json());
// server.use(bodyParser.urlencoded({ extended: true }));  
// server.use(bodyParser.json()); 

registerController(server);

// Connect with mysql
// createConnetion(process.env.HOST_NAME, process.env.DATABASE, process.env.MY_USERNAME, process.env.PASSWORD);

server.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/adminpage.html'));
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ...`);
});

//Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Training Fresher From 01-2022 to 04-2022',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));