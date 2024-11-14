const WebsiteSummaryModel = require("../models/websiteSummary");

class WebsiteSummary {
    async summary(url, summary) {
        try {
            let body
            if(summary){
                body = {
                    url,
                    status: 'completed',
                    summary:summary
                }
    
            }else{
                body = {
                    url,
                    status: 'failed',
                    error_message: 'Failed to scrape content from the URL'
                }
            }
            
            const webSummary = new WebsiteSummaryModel(body)
            await webSummary.save();

            return webSummary;
            
        } catch (e) {
            return e;
        }
    }

    async getSummary(){
        try{
            const websiteSummary = await WebsiteSummaryModel.find();
            return websiteSummary;
        } catch(e){
            return e;
        }
    }
}

module.exports = new WebsiteSummary();