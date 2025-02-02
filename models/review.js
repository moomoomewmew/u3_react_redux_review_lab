const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
    {
        title: { type: String, required: true },
        name: { type: String, required: true },
        username: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
