require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

// ── Database ──────────────────────────────────────────────
connectDB();

// ── CORS ──────────────────────────────────────────────────
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://innovis.com',
    'https://www.innovis.com',
    'https://innovis.vercel.app'
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (Postman, mobile apps, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        callback(new Error(`CORS policy does not allow access from origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// ── Body Parser ──────────────────────────────────────────
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// ── Rate Limiters ─────────────────────────────────────────
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: 'Too many requests. Please try again after 15 minutes.' }
});

const newsletterLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: 'Too many subscription attempts. Please try again later.' }
});

// ── Routes ────────────────────────────────────────────────
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/newsletter', newsletterLimiter, newsletterRoutes);

// ── Health Check ──────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV });
});

// ── 404 Handler ───────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found.' });
});

// ── Global Error Handler ──────────────────────────────────
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err.message);
    if (err.message.startsWith('CORS')) {
        return res.status(403).json({ message: err.message });
    }
    res.status(500).json({ message: 'Internal server error.' });
});

// ── Start Server ──────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT} [${process.env.NODE_ENV}]`));