import { NextResponse } from 'next/server';
import Nylas from 'nylas'; // Assuming you have the Nylas SDK installed
import { NextApiRequest, NextApiResponse } from 'next';


// Define the interface for the incoming request body
interface ContactFormBody {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullname, email, phone, message } = req.body as ContactFormBody;

    // TODO: Implement server-side validation here
    // For example, validate email format, sanitize inputs, etc.

    try {
      // Initialize Nylas with your credentials (stored securely in environment variables)
      const nylas = Nylas.with({
        clientId: process.env.NYLAS_CLIENT_ID!,
        clientSecret: process.env.NYLAS_CLIENT_SECRET!,
        accessToken: process.env.NYLAS_ACCESS_TOKEN!, // Access token of the sending account
      });

      // Send the email using Nylas
      await nylas.messages.send({
        to: [{ name: 'Your Name', email: 'mushel@gmail.com' }], // Recipient email address
        subject: `New Contact Form Submission from ${fullname}`,
        body: `
          Name: ${fullname}
          Email: ${email}
          Phone: ${phone || 'N/A'}
          Message: ${message}
        `,
      });

      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email via Nylas:', error);
      res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}