const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')


app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin:'http://localhost:3000'}))
app.use(cookieParser())
const port = 8000;

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/cocktail.routes')(app);
require('./models/cocktail.model');
require('./routes/user.routes')(app)



app.listen(port, () => console.log(`Listening on port: 8000`));
