//Adding mongoose to our program 
const mongoose = require("mongoose")

//Create a new connection & create a new database
mongoose.connect("mongodb://localhost:27017/imdb")
.then(()=> console.log("Connection Successful"))
.catch((err)=> console.log(err))

//Create Schema
//Defines structure of a document
//Default values, validators, specify datatypes

const movieSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    genre : String,
    rating : Number,
    released : Boolean
})

//Creating collection
//Creating a model
const Movie = new mongoose.model("Movie",movieSchema);

//Create or Insert a single Document

const createDocument = async () => {
    try
    {
        const movie2 = new Movie({
            name : "Titanic",
            genre : "Drama",
            rating : 9,
            released : true
        })
        
        const result =await movie2.save();
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

createDocument();








