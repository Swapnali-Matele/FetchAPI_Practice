//const mongoose= require('mongoose');
import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        
    },
    publisher:{
        type: String,
    },
 
    type:{
        type: String,
    }
})



export default mongoose.model('news', newsSchema);