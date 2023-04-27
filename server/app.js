if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const mainRouter = require('./routes')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', mainRouter)

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});