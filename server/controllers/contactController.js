const Contact = require('../models/Contact');
const validator = require('validator');
const axios = require('axios');

const submitContact = async (req, res) => {
    let { fullName, email, company, phone, message } = req.body;

    // ── Presence validation ──
    if (!fullName || !email || !message) {
        return res.status(400).json({ message: 'Please fill out all required fields (Name, Email, Message).' });
    }

    // ── Sanitize inputs ──
    fullName = validator.escape(validator.trim(String(fullName)));
    email    = validator.normalizeEmail(validator.trim(String(email)));
    company  = company ? validator.escape(validator.trim(String(company))) : '';
    phone    = phone   ? validator.trim(String(phone)).replace(/[^0-9+\-\s().]/g, '') : '';
    message  = validator.escape(validator.trim(String(message)));

    // ── Format validation ──
    if (!validator.isEmail(String(req.body.email))) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (fullName.length < 2 || fullName.length > 100) {
        return res.status(400).json({ message: 'Name must be between 2 and 100 characters.' });
    }

    if (message.length < 10 || message.length > 2000) {
        return res.status(400).json({ message: 'Message must be between 10 and 2000 characters.' });
    }

    try {
        const contact = await Contact.create({ fullName, email, company, phone, message });

        // ── Send confirmation email via Brevo ──
        if (process.env.BREVO_API_KEY) {
            const emailData = {
                sender: { name: 'Innovis Website', email: 'yogeshsadgir05@gmail.com' },
                to: [{ email: 'yogeshsadgir05@gmail.com', name: 'Innovis Admin' }], 
                replyTo: { email: email, name: fullName },
                subject: `New Lead: Inquiry from ${fullName}`,
                htmlContent: `
                    <div style="font-family: 'DM Sans', sans-serif; background: #080810; color: #f0eeff; padding: 40px; border-radius: 16px; max-width: 560px; margin: 0 auto; border: 1px solid rgba(124,58,237,0.2);">
                      <h2 style="font-family: 'Plus Jakarta Sans', sans-serif; color: #a855f7; margin-bottom: 8px;">New Contact Form Submission</h2>
                      <div style="background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <p style="color: rgba(240,238,255,0.8); font-size: 15px; margin-bottom: 8px;"><strong>Name:</strong> ${fullName}</p>
                        <p style="color: rgba(240,238,255,0.8); font-size: 15px; margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
                        <p style="color: rgba(240,238,255,0.8); font-size: 15px; margin-bottom: 8px;"><strong>Company:</strong> ${company || 'N/A'}</p>
                        <p style="color: rgba(240,238,255,0.8); font-size: 15px; margin-bottom: 24px;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
                        
                        <p style="color: rgba(240,238,255,0.5); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
                        <p style="color: #f0eeff; font-size: 15px; line-height: 1.7;">${message}</p>
                      </div>
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
                console.error('Contact confirmation email failed:', err.response?.data || err.message);
            });
        }

        res.status(201).json({ message: 'Message sent successfully! We will be in touch within 24 hours.' });
    } catch (error) {
        console.error('Contact Submission Error:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
 
module.exports = { submitContact };