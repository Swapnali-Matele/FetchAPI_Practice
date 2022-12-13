import express  from 'express';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import quoteFinanceSchema from './models/quoteFinanceSchema.js';
import 
// const port = 3000;
// const app = express();
  
// app.use(express.json());


mongoose.connect('mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/finance')


const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        'size': 50,
        offset: 0
	},

    body: '[{"operator":"or","operands":[{"operator":"EQ","operands":["exchange","NAS"]},{"operator":"EQ","operands":["exchange","NYQ"]}]}]'
};

const getPost = async (req, ress, next) =>{
    try{

     await fetch("https://yh-finance.p.rapidapi.com/screeners/list?quoteType=MUTUALFUND&sortField=fundnetassets&region=US&size=50&offset=0&sortType=DESC",options)_
        .then( actualData => {
            //console.log(actualData);
            const finance = actualData.finance
            //console.log(finance.result[0].quotes[1]['quoteType']);
            const finalFinanceData = finance.result[0]

            for (let i =0; i< finalFinanceData.quotes.length; i++){
                    
        
                    const quotes = new quoteFinanceSchema({
                        fullExchangeName:finalFinanceData.quotes[i]['fullExchangeName'],
                        quoteType:finalFinanceData.quotes[i]['quoteType'],
                        market:finalFinanceData.quotes[i]['market'],
                        region:finalFinanceData.quotes[i]['region'],
                        currency:finalFinanceData.quotes[i]['currency'],
                        longName: finalFinanceData.quotes[i]['longName']
                    })
                    
                    quotes.save();
                    console.log(quotes);

        }
        //res.status(200).json({status: 200, data:{ }, message: "Quotes saved in database"})
    })
    .catch(err => {
            console.log(err);
        });
    

    }catch(err){
        console.log(err)
    }

}
getPost()

