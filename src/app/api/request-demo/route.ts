import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Recipient Email
const recipientEmail = process.env.DEMO_REQUEST_RECIPIENT_EMAIL || 'contact@universalagi.ai';

// Gmail credentials from environment variables
const gmailAddress = process.env.GMAIL_ADDRESS;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

export async function POST(req: NextRequest) {
  // Check if Gmail credentials are set
  if (!gmailAddress || !gmailAppPassword) {
    console.error('Gmail credentials (GMAIL_ADDRESS, GMAIL_APP_PASSWORD) are not set in environment variables.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    // Parse the request body
    const body = await req.json();
    const { firstName, lastName, email, company, title, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !title) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Create a Nodemailer transporter using Gmail SMTP and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailAddress,
        pass: gmailAppPassword, // Use the App Password here
      },
    });

    // Define email options
    const mailOptions = {
      from: `"UniversalAGI Demo Request" <${gmailAddress}>`, // Sender address (Gmail might override the name part)
      to: recipientEmail, // List of receivers
      subject: `New Demo Request from ${firstName} ${lastName} (${company})`, // Subject line
      html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided.'}</p>
      `, // HTML body
      replyTo: email, // Set reply-to to the user's email
    };

    console.log(`Attempting to send email via Gmail from ${gmailAddress} to ${recipientEmail}`);

    // Send mail with defined transport object
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return NextResponse.json({ success: true, message: 'Demo request submitted successfully!', messageId: info.messageId }, { status: 200 });
    } catch (mailError: any) {
      console.error('Nodemailer Error sending email:', mailError);
      // Log specific details if available
      if (mailError.response) {
        console.error('Nodemailer Error Response:', mailError.response);
      }
      return NextResponse.json({ error: 'Failed to send email.', details: mailError.message || 'Unknown mailing error' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Error processing request:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 