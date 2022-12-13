//const mongoose= require('mongoose');
import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    quoteType:{
        type: String,
        
    },
    index:{
        type: String,
    },
 
    score:{
        type: Number,
    },
    sector:{
        type: String,
    },
    industry:{
        type: String,
    }
})

//create model by using schema
export default mongoose.model('quotes', quoteSchema);