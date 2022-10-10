const mongoose = require("mongoose");

const uri= "mongodb://localhost:27017/example";
const opts= {useNewUrlParser:true};
//mongoose.connect('mongodb://localhost:27017/example', { useNewUrlParser: true});

mongoose.connect(uri, opts).then(() => {console.log("connecton ready")}, (err) => {console.log("error occured")});

const Schema = mongoose.Schema;

const actorSchema = new Schema({
    actor:{
      type : String,
      required : true,
      minlength : 3
    },  
    reviews:{
        type : String,
        required : true,
        minlength : 5
    }
});

const movieSchema = new Schema({

    name:{
        type : String,
        required : true,
        minlength : 1
    },
    description:{   
        type : String,
        required : true,
        minlength : 2
    },
    year:{
        type : String,
        required : false,
        minlength : 4
    },
    childSchema: [actorSchema]
});

const movie = mongoose.model('movie', movieSchema);
const actor = mongoose.model('actor', actorSchema);

let reviewSchema = new actor({
    actor : "RamCharan",
    reviews : "Excellent" 
})

let newMovie = new movie({
    name : "RRR",
    description : "Story of revolutionary fighters",
    year : "2022",
    childSchema : reviewSchema
})

newMovie.save().then(() => console.log("record created"));












