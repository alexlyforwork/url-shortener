const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
        unique: true,
    },
    shortenedURL: {
        type: String,
        required: true,
        unique: true,
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("URL",URLSchema)