const express = require("express");
const app = express();
const connectDatabase = require("./src/database/database")

require("dotenv").config({
    path: "./src/Config/.env"
});

const port = process.env.port;
const url = process.env.url;

app.listen(port, async() => {
    try {
        await connectDatabase(url);
        console.log(`Server is running on port ${port}`);
    }
    catch(error) {
        console.log(error)
    }
})
