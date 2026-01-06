import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  // Initialize Resend only when API is called (lazy initialization)
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Vegas-Tier Security <onboarding@resend.dev>', // You'll update this with your domain
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'],
      subject: `New Security Audit Request from ${company}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0a0e17 0%, #1a1f2e 100%); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: #00f0ff; margin: 0; font-size: 24px; text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);">
              🔒 New Security Audit Request
            </h1>
          </div>

          <div style="background: #ffffff; padding: 30px; border-radius: 12px; border: 2px solid #00f0ff;">
            <h2 style="color: #0a0e17; margin-top: 0;">Contact Information</h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0; color: #374151;">
                <strong style="color: #0a0e17;">Name:</strong> ${name}
              </p>
              <p style="margin: 10px 0; color: #374151;">
                <strong style="color: #0a0e17;">Email:</strong> <a href="mailto:${email}" style="color: #00f0ff;">${email}</a>
              </p>
              <p style="margin: 10px 0; color: #374151;">
                <strong style="color: #0a0e17;">Company:</strong> ${company}
              </p>
              ${phone ? `<p style="margin: 10px 0; color: #374151;">
                <strong style="color: #0a0e17;">Phone:</strong> <a href="tel:${phone}" style="color: #00f0ff;">${phone}</a>
              </p>` : ''}
            </div>

            ${message ? `
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <h3 style="color: #0a0e17; margin-top: 0;">Message:</h3>
                <p style="color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
            ` : ''}
          </div>

          <div style="margin-top: 20px; padding: 20px; background: #f9fafb; border-radius: 12px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              ⚡ Respond within 24 hours for maximum conversion
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
