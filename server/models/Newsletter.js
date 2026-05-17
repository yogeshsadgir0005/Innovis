const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email address is required.'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Newsletter', newsletterSchema);
