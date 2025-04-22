import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected request body structure
interface CareersFormData {
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  achievements: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData: CareersFormData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.achievements) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }
    
    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Set up email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'your-email@gmail.com',
      to: process.env.CAREERS_EMAIL_TO || 'your-email@gmail.com',
      subject: `New Career Application: ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        LinkedIn: ${formData.linkedin || 'Not provided'}
        GitHub: ${formData.github || 'Not provided'}
        
        Achievements/Experience:
        ${formData.achievements}
      `,
      html: `
        <h2>New Career Application</h2>
        
        <h3>Candidate Information</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
          <li><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</li>
          <li><strong>GitHub:</strong> ${formData.github || 'Not provided'}</li>
        </ul>
        
        <h3>Achievements/Experience</h3>
        <p style="white-space: pre-wrap;">${formData.achievements}</p>
      `,
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    
  } catch (error) {
    console.error('Error processing career form submission:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to process your application' },
      { status: 500 }
    );
  }
} 