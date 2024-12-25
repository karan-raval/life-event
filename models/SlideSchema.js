const mongoose = require('mongoose');

const SlideSchema = mongoose.Schema({
    image: { type: String, required: true },
    // text: { type: String, required: true },
    // name: { type: String, required: true },
    // location: { type: String, required: true }
});

const SlideModel = mongoose.model('slide', SlideSchema);

module.exports = SlideModel;
