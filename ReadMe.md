## Web Scraping + ChatGpt

## API CALL

### POST /api/scraper
- **Description**: This API will scrape the website meta tag description usign the puppeteer library and get a summary from ChatGpt and stored the data in mongodb database

- **Request Body**: 
```
{
    "url": "https://facebook.com/"
}
```
- **Response**: Status code 200
```
{
    "url": "https://facebook.com/",
    "status": "completed",
    "summary": "The website Facebook.com invites users to log in and engage with their social network by sharing content and connecting with friends, family, and acquaintances. By signing in, individuals can access a platform designed for fostering relationships and communication among a wide range of personal connections. This emphasis on sharing and connectivity underscores the core purpose of the site, which serves as a digital hub for users to interact with those they know in various capacities.\n\nThrough Facebook, users can post updates, photos, and videos, facilitating the exchange of personal moments and experiences within their social circle. The platform's login prompt encourages users to participate in a virtual community centered around staying connected with loved ones, building and maintaining relationships, and engaging with a network of individuals spanning different spheres of their lives. Overall, Facebook's messaging promotes the idea of using the platform as a tool for meaningful interactions, information sharing, and staying up-to-date with the lives of friends and family members.",
    "_id": "67361d8d34fa6cd1cd685e86",
    "createdAt": "2024-11-14T15:55:57.039Z",
    "updatedAt": "2024-11-14T15:55:57.039Z",
    "__v": 0
}
```

- **Response**: Status code 500
```
{
    "url": "https://facebook.com/",
    "status": "failed",
    "error_message": "Failed to scrape content from the URL",
    "_id": "673618816e4aedabf1c2f534",
    "createdAt": "2024-11-14T15:34:25.161Z",
    "updatedAt": "2024-11-14T15:34:25.161Z",
    "__v": 0
}
```

### GET /api/scraper
- **Description**: This API will get all the stored data from the database.

- **Response**: Status code 200
```
[
    {
        "_id": "670965791b47949b1d3f5072",
        "url": "https://www.bannerbear.com/blog/how-to-convert-html-into-pdf-with-node-js-and-puppeteer/",
        "status": "completed",
        "summary": "The webpage tutorial on https://www.bannerbear.com/blog/how-to-convert-html-into-pdf-with-node-js-and-puppeteer/ explains two methods to convert HTML into PDF using Node.js and Puppeteer.",
        "createdAt": "2024-10-11T17:50:49.399Z",
        "updatedAt": "2024-10-11T17:50:49.399Z",
        "__v": 0
    }
]
```
