const fs = require('fs');
const jsonToExcel = require('../json2excel');

const postNewData = async (req, res) => {
    try {
        var arr = []
        for (var index in req.body) {
            arr.push(req.body[index])
        }
        let jsonData = JSON.stringify(arr, null, 2);
        fs.writeFile("C://Users/Sanchit/Desktop/webscraperFinal/frontend/scratchMedia.json", jsonData, 'utf-8', (err, data) => {
            if (!err) {
                console.log('hogyaaa bhenchod');
            }
        })
        const quoraData = [];
        const redditData = [];
        const twitterData = [];
        const youtubeData = [];
        for (let i = 0; i < jsonData.length; i++) {
            let item = req.body[i];
            if (item) {
                if (item.type === 'quora') quoraData.push(item)
                else if (item.type === 'reddit') redditData.push(item)
                else if (item.type === 'twitter') twitterData.push(item)
                else if (item.type === 'youtube') youtubeData.push(item);
                console.log()
            }
        }
        jsonToExcel(quoraData, redditData, twitterData, youtubeData);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        console.log('error aya bc')
    }
}

module.exports = { postNewData } 