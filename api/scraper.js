const express = require("express");
const router = express.Router();
const OpenAi = require('../services/openai')
const Sraper = require('../services/puppeteer')
const WebsiteSummary = require('../services/websiteSummary')

router.post("/", async (req, res) => {
    try {
        const  { url } = req.body;

        if(!url){
            return res
            .status(400)
            .json({ message: "Url cannot be empty" });
        }

        const description = await Sraper.scrapeUrl(url);
        const response = await OpenAi.summarizeWebsite(url, description);
        const summary = await WebsiteSummary.summary(url, response.text);

        res.status(201).json(summary);

    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/", async (req, res) => {
    try {
         const summaries = await WebsiteSummary.getSummary();
        res.status(200).json(summaries)
    }catch(err){
        res.json({ message: err });
    }
})

module.exports = router;