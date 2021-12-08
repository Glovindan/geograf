require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use('/admin', require('./routes/admin.routes'));
app.use('/user', require('./routes/user.routes'));

async function start() {
    try {
        await mongoose.connect(MONGO_URI,{}, e => {
            if(e) throw e
            console.log('connected to mongo!');
        });

        app.listen(PORT, () => {
            console.log(`server started at http://localhost:${PORT}`)
        })
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}

start().then(() => console.log('welcome'));