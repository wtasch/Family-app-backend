


require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

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
app.use('/event', routes.event);
app.use('/task/all', routes.task);
app.use('/task/event', routes.task);
app.use('/post/all', routes.post);
app.use('/post/event', routes.post);
app.use('/auth/verify', verifyToken, routes.auth);
// app.use('/user', verifyToken, routes.user);
// app.use('/post', verifyToken, routes.post);
// app.use('/task', verifyToken, routes.task);
app.use('/user', routes.user);
app.use('/post', routes.post);
app.use('/task', routes.task);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})



