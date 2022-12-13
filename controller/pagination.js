import mongoose from 'mongoose'
import quoteFinanceSchema from '../models/quoteFinanceSchema.js'

const pagination = async (req, res)=>{
    try{

        const page = 4
        const limit = 10;
       //const quoteFinanceSchema = require('../model/quoteFinanceSchema')
       
        
        if(sort){

        }else{
            finalQuoteData  = await quoteFinanceSchema.find().limit(50).skip
        }


    }catch(err){
        res.status(200).json({message:err.message})
                 
    }

}
pagination()