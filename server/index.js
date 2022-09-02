const express = require("express");
const cors = require("cors");
const queries = require('../server/database/queries');
const config = require('../server/config/config');
const db = require('../server/database/database');


const app = express();

//middleware
app.use(cors());
app.use(express.json());


db.on('connect', (client) => {
    client.query(`SET search_path TO ${config.pgSchema}`);
});


app.get("/", async(req, res)=> {
    res.send("Hello World")
})


app.listen(config.port, () => {
    console.log("Server has started on port "+process.env.SERVER_PORT)
});