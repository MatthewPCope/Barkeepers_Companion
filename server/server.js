const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 8000;

require('./config/mongoose.config');
require('./routes/cocktail.routes')(app);
require('./models/cocktail.model');



app.listen(port, () => console.log(`Listening on port: 8000`));
