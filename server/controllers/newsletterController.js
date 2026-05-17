const Newsletter = require('../models/Newsletter');
const validator = require('validator');
const axios = require('axios');

const subscribe = async (req, res) => {
    const { email } = req.body;

    // Validate presence
    if (!email) {
        return res.status(400).json({ message: 'Email address is required.' });
    }

    // Validate format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const sanitizedEmail = validator.normalizeEmail(email);

    try {
        // Check for existing subscription
        const existing = await Newsletter.findOne({ email: sanitizedEmail });
        if (existing) {
            return res.status(409).json({ message: 'This email is already subscribed.' });
        }

        await Newsletter.create({ email: sanitizedEmail });

        // Send confirmation email via Brevo if key is configured
        if (process.env.BREVO_API_KEY) {
            const emailData = {
                sender: { name: 'Innovis IT Solutions', email: 'no-reply@innovis.com' },
                to: [{ email: sanitizedEmail }],
                subject: "You're subscribed to Innovis Updates",
                htmlContent: `
                    <div style="font-family: 'DM Sans', sans-serif; background: #080810; color: #f0eeff; padding: 40px; border-radius: 16px; max-width: 560px; margin: 0 auto;">
                      <h2 style="font-family: 'Plus Jakarta Sans', sans-serif; color: #a855f7; margin-bottom: 16px;">You're in. 🚀</h2>
                      <p style="color: rgba(240,238,255,0.8); line-height: 1.7; font-size: 16px;">
                        Thanks for subscribing to Innovis insights. You'll receive our latest case studies, technology trends, and engineering updates directly in your inbox.
                      </p>
                      <p style="color: rgba(240,238,255,0.5); font-size: 14px; margin-top: 32px;">
                        — The Innovis Engineering Team
                      </p>
                    </div>
                `
            };

            await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
                headers: {
                    'accept': 'application/json',
                    'api-key': process.env.BREVO_API_KEY,
                    'content-type': 'application/json'
                }
            }).catch(err => {
                // Non-blocking — log but don't fail the subscription
                console.error('Newsletter confirmation email failed:', err.message);
            });
        }

        res.status(201).json({ message: 'Successfully subscribed to Innovis updates!' });

    } catch (error) {
        // Handle MongoDB duplicate key error as a fallback
        if (error.code === 11000) {
            return res.status(409).json({ message: 'This email is already subscribed.' });
        }
        console.error('Newsletter Subscription Error:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { subscribe };
