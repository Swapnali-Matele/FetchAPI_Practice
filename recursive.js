const page = 1

function dn(page){
    if(page>10){
        return;
    }else{
        const getPost = async (req, res) =>{
            try{
        
             await fetch('https://yh-finance.p.rapidapi.com/screeners/list?quoteType=MUTUALFUND&sortField=fundnetassets&region=US&size=50&offset=51&sortType=DESC', options)
             .then(apiData => apiData.json())
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

}
page++;
dn(page)
}
dn(page);