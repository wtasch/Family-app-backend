



const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const router = express.Router();
const nodemailer = require("nodemailer");


const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
  }

app.use(express.json());
app.use("/", router);


app.use(cors(corsOptions))
app.use(bodyParser.json());

//add for cf

const contactEmail = nodemailer.createTransport({
    host: "smtp.aol.com",
    port: 587,
    auth: {
      user: "wtasch",
      pass: "Rocketman69",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

    const SendMail = (req, res) => {console.log("test cnt")
    const name = req.body.name;
    const email = req.body.email;console.log(email)
    const message = req.body.message; 
    const mail = {
        
      from: name,
      to: "wtasch@aol.com",
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    console.log(mail)
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  };





module.exports = {
SendMail
}
