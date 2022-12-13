//const mongoose= require('mongoose');
import mongoose from 'mongoose';

const quoteFinanceSchema = new mongoose.Schema({
    fullExchangeName:{
        type: String,
        
    },
    quoteType:{
        type: String,
        
    },
    market:{
        type: String,
    },
 
    region:{
        type: String,
    },
    currency:{
        type: String,
    },
    longName:{
        type: String,
    }
})

export default mongoose.model('Finance_quotes', quoteFinanceSchema);