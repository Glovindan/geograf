require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json({ extended: true }));
app.use('/admin', require('./routes/admin.routes'));
app.use('/user', require('./routes/user.routes'));

async function start() {
    try {
        // await mongoose.connect(MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        // },() => {console.log('connected to mongo!')});

        app.listen(PORT, () => {
            console.log(`server started at http://localhost:${PORT}`)
        })
    } catch(e) {
        console.log('Ошибка сервера', e.message);
        process.exit(1);
    }
}

start().then(() => console.log('welcome'));