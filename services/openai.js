const dotenv = require("dotenv");
dotenv.config();

const WebsiteSummary = require("../models/websiteSummary");

let api;

const initializeChatGPT = async () => {
    const ChatGPTAPI = await import("chatgpt").then((mod) => mod.ChatGPTAPI);
    const api = new ChatGPTAPI({
      apiKey: process.env.API_KEY,
    });
    return api;
  };
  
class OpenAi {
    async summarizeWebsite(url, description) {
        try {
            if (!api) api = await initializeChatGPT();
            const res = await api.sendMessage(`Summarize the website with the description of "${description}" in ${url} into 2 paragraphs.`);
            return res;
        } catch (e) {
            return e;
        }
    }
}

module.exports = new OpenAi();