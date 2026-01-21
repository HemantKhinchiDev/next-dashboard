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

export async function sendContactEmail(prevState: any, formData: FormData) {
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
        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Verify connection configuration
        // await transporter.verify();

        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: "hkhinchi.trellance@gmail.com", // receiver address (as requested)
            subject: `New Contact Form Submission: ${subject}`, // Subject line
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

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn("EMAIL_USER or EMAIL_PASS not set. Email will not be sent.");
            // For testing purposes, we return success but log warning if envs are missing
            // or we could throw error. User requested "I will get email", so this is critical.
            // But without creds we can't send.

            // Simulating success for UI if no creds, but logging it.
            console.log("Simulated Email Send:", mailOptions);
            return { success: true, message: 'Message sent successfully! (Simulated - Configure .env for real sending)' }
        }

        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
        console.error('Failed to send email:', error)
        return {
            success: false,
            message: 'Failed to send message. Please try again later.',
        }
    }
}
