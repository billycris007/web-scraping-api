const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set("strictQuery", false);
const connection = `${process.env.MONGO_URI}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
   