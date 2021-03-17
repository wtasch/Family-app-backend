


require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
//added for contact form
const router = express.Router();
// const nodemailer = require("nodemailer");


const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
  }
//add for cf
// app.use(express.json());
// app.use("/", router);


app.use(cors(corsOptions))
app.use(bodyParser.json());

//add for cf

// const contactEmail = nodemailer.createTransport({
//     host: "smtp.aol.com",
//     port: 587,
//     auth: {
//       user: "wtasch",
//       pass: "Rocketman69",
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;console.log(email)
//     const message = req.body.message; 
//     const mail = {
        
//       from: name,
//       to: "wtasch@aol.com",
//       subject: "Contact Form Message",
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//     };
//     console.log(mail)
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "failed" });
//       } else {
//         res.json({ status: "sent" });
//       }
//     });
//   });


const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if(token){
        token = token.substring(constants.BEARER_START_INDEX) 
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(constants.UNAUTHORIZED).send(`hey bill bad login hereERROR: ${err}`);
        }
        req.user = decodedUser;
        next();//  next line 
    })
}

app.use('/auth', routes.auth);
app.use('/auth/verify', verifyToken, routes.auth);

app.use('/event', routes.event);
app.use('/event/all', routes.event);


app.use('/part/all', routes.event);
app.use('/part', routes.part);
// app.use('/task/all', routes.task);
//11 app.use('/part/event', routes.task);
// app.use('/shop/event', routes.shop);
app.use('/task/all', routes.task);
app.use('/task', routes.task);

// 11app.use('/task/event', routes.task);
app.use('/post/all', routes.post);
// 11app.use('/post/event', routes.post);
app.use('/post', routes.post);
// app.use('/user', verifyToken, routes.user);
// app.use('/post', verifyToken, routes.post);
// app.use('/task', verifyToken, routes.task);
app.use('/user', routes.user);



app.use('/shop', routes.shop);
// app.use('/contact', routes.contact);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})



