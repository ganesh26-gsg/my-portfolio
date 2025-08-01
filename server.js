// server.js
import 'dotenv/config'; // Loads .env automatically
import express from 'express';
import cors from 'cors';
import { createClient } from '@libsql/client';
import fetch from 'node-fetch'; // fetch APIని ఉపయోగించడానికి node-fetch అవసరం

const app = express();
const port = 4000; // మీరు మీ server.js లో పేర్కొన్న పోర్ట్

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body; // recaptchaTokenని స్వీకరించండి

  // Basic validation
  if (!name || !email || !message || !recaptchaToken) { // recaptchaTokenని కూడా తనిఖీ చేయండి
    return res.status(400).json({ error: 'All fields and reCAPTCHA are required.' });
  }

  // reCAPTCHA verification
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not defined in .env');
    return res.status(500).json({ error: 'Server configuration error: reCAPTCHA secret key missing.' });
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
    }

    // Turso client initialization
    const db = createClient({
      url: process.env.DB_URL,
      authToken: process.env.DB_AUTH_TOKEN,
    });

    // Insert data into the 'contacts' table
    await db.execute({
      sql: 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      args: [name, email, message],
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server error during reCAPTCHA verification or DB insertion:', error);
    return res.status(500).json({ error: 'Failed to send message. Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend server listening at http://localhost:${port}`);
});