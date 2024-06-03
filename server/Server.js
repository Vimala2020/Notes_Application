//load env variable
if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}

//import dependencies
const express = require ('express');
const cors = require("cors");
const connectToDB = require('./config/connectToDB');
const notesController = require('./controller/notesController')


//create express app
const app = express();
app.use (express.json());
app.use(cors());

//connect to db
connectToDB();

//routing

app.get("/notes", notesController.fetchNotes)
app.get("/notes/:id",notesController.fetchNote)
app.post("/notes",notesController.createNotes)
app.put("/notes/:id",notesController.updateNote )
app.delete("/notes/:id",notesController.deleteNote );
// Serve the React app


// Handle React routing, return all requests to React app


app.listen(process.env.PORT);
