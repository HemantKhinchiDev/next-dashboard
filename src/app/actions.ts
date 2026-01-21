'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

// Define schema for validation
const ContactSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().optional(),
    subject: z.string().min(1, { message: 'Subject is required' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export type ContactFormState = {
    success: boolean
    message: string
    errors?: {
        name?: string[]
        email?: string[]
        phone?: string[]
        subject?: string[]
        message?: string[]
    }
}

export async function sendContactEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    // Return errors if validation fails
    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to send message.',
        }
    }

    const { name, email, phone, subject, message } = validatedFields.data

    try {
        // Create a test account on Ethereal (for testing purposes)
        // Note: In a real app, you'd create this once and store creds, or use real SMTP
        const testAccount = await nodemailer.createTestAccount();

        // Configure transporter for Ethereal
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        console.log("Using Ethereal Account:", testAccount.user);

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: "hkhinchi.trellance@gmail.com",
            subject: `New Contact Form Submission: ${subject}`,
            text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone || 'N/A'}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
            html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        };

        const info = await transporter.sendMail(mailOptions);

        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", previewUrl);

        return {
            success: true,
            message: `Message sent! View preview: ${previewUrl}`
        }

    } catch (error) {
        console.error('Failed to send email:', error)
        return {
            success: false,
            message: `Failed to send: ${(error as Error).message}`,
        }
    }
}
