const router = require('express').Router();
const URL = require('../models/url.js');
const { nanoid } = require('nanoid');
const server = "localhost:3000/"

//Create a new shortened URL
router.post('/new',async (req,res) => {
    try {
        
        originalURL = req.body.originalURL;
        const url = await URL.findOne({originalURL: originalURL});
        if (url) {
            return res.status(400).json({
                message: "URL already exists",
                shortenedURL: server + url.shortenedURL
            })
        }
        shortenedURL = nanoid(8);
        const model = new URL({
            originalURL: originalURL,
            shortenedURL: shortenedURL
        })
        await model.save();
        res.status(200).json({
            originalURL: originalURL,
            shortenedURL: server + shortenedURL
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//Access the original URL using the shortened URL
router.get('/:shortenedURL', async (req,res) => {
    try {
        const url = await URL.findOne({shortenedURL: req.params.shortenedURL});
        const originalURL = url.originalURL
        console.log(originalURL)
        res.redirect(originalURL)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//Delete a shortened URL
router.delete('/delete', async (req,res) => {
    try {
        originalURL = req.body.originalURL;
        const url = await URL.findOne({originalURL: originalURL});
        if (!url) {
            return res.status(404).json({
                message: "URL not found"
            })
        }
        await URL.deleteOne({originalURL: originalURL});
        res.status(200).json({
            message: "URL deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//Get all shortened URLs
router.get('/', async (req,res) => {
    try {
        const urls = await URL.find();
        res.status(200).json({
            urls: urls
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

module.exports = router;