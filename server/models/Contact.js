const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String },
        phone: { type: String },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);