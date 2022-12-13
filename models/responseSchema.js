//const mongoose= require('mongoose');
import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
        quotes:{
            type: Array,
        },
        news:{
            type: Array,
        }
    
})



export default mongoose.model('response', responseSchema);