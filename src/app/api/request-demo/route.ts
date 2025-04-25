import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = process.env.DEMO_REQUEST_RECIPIENT_EMAIL || 'contact@universalagi.ai';
const fromEmail = process.env.DEMO_REQUEST_FROM_EMAIL || 'onboarding@resend.dev'; // Default Resend address, can be customized after domain verification

export async function POST(req: NextRequest) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Parse the request body
    const body = await req.json();
    const { firstName, lastName, email, company, title, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !title) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    console.log(`Sending email from ${fromEmail} to ${recipientEmail}`);

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Demo Request <${fromEmail}>`, // Sender name and email
      to: [recipientEmail], // Recipient email address
      subject: `New Demo Request from ${firstName} ${lastName} (${company})`,
      html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided.'}</p>
      `,
      reply_to: email, // Set the reply-to field to the user's email
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, message: 'Demo request submitted successfully!', emailId: data?.id }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    // Check if it's a JSON parsing error
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 