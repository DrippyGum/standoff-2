import express from 'express';
import { sendWaitlistNotification } from './emailService';

const app = express();

app.use(express.json());

app.post('/api/waitlist', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate data
  if (!username || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  // Store entry
  const entry = { username, email, password, createdAt: new Date().toISOString() };
  // Save entry to storage (not implemented here)

  // Send email notification
  const emailSent = await sendWaitlistNotification(entry);
  if (!emailSent) {
    return res.status(500).send('Failed to send email');
  }

  // Return success response to the user
  res.status(200).send('Success');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});