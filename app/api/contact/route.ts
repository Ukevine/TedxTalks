import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the contact form submission (for now)
    console.log('Contact Form Submission:', {
      name,
      email,
      subject: subject || 'New message from TEDxKHS Contact Form',
      message,
      timestamp: new Date().toISOString()
    });

    // For now, just return success
    // You can later integrate with:
    // - EmailJS (client-side email service)
    // - Formspree (no API key needed)
    // - Netlify Forms (if deploying on Netlify)
    // - Or your own email service

    return NextResponse.json({ 
      message: 'Thank you for your message! We will get back to you soon.',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
} 