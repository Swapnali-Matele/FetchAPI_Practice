  
import fetch from 'node-fetch';
import mongoose from 'mongoose';
//const newsSchema = require( "./models/newsSchema");
//const quoteSchema =  require("./models/quoteSchema")
import newsSchema from './models/newsSchema.js';
import quoteSchema from './models/quoteSchema.js';
import responseSchema from './models/responseSchema.js';

mongoose.connect('mongodb+srv://root:<password>@cluster0.gq2rjja.mongodb.net/finance')




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
// 		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
// 	}
// };

 const getPost = async (req, res, next) =>{
    try{
        await fetch("https://github.com/bstashchuk/MongoDB-Aggregation-Tutorial/blob/master/Persons.json")
        .then((res) => res.json({}))
        .then((data) => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
        //const response = myPost.json();
        //console.log(response)

        // for (let i =0; i< response.quotes.length; i++){
        //     //console.log(response.quotes[i]['quoteType'])

        //     const Quotes = new quoteSchema({
        //         quoteType:response.quotes[i]['quoteType'],
        //         index:response.quotes[i]['index'],
        //         score:response.quotes[i]['score'],
        //         sector:response.quotes[i]['sector'],
        //         industry:response.quotes[i]['industry']
        //     })
        //     Quotes.save();
        //     console.log(Quotes)

    }catch(err){
        console.log(err)
    }

}

getPost();