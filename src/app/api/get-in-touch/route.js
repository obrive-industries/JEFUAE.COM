import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
    cleanText,
    escapeHtml,
    isAllowedOrigin,
    isValidEmail,
} from '@/lib/security'

export async function POST(request) {
    try {
        if (!isAllowedOrigin(request)) {
            return NextResponse.json({ error: 'Forbidden origin' }, { status: 403 })
        }

        const { firstname, lastname, email, phone, company, query, marketing } = await request.json()
        const safeFirstName = cleanText(firstname, 80)
        const safeLastName = cleanText(lastname, 80)
        const safeEmail = cleanText(email, 254)
        const safePhone = cleanText(phone, 40)
        const safeCompany = cleanText(company, 120)
        const safeQuery = cleanText(query, 1000)
        const safeMarketing = cleanText(marketing, 40)

        if (!safeFirstName || !safeLastName || !safeEmail || !safePhone || !safeCompany || !safeQuery) {
            return NextResponse.json({ error: 'All required fields must be completed' }, { status: 400 })
        }

        if (!isValidEmail(safeEmail)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        const adminMail = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Hello Jef, you have a Lead to get in touch! Hurry',
            html: `
        <p>Hi JEF</p>
        <p>You have a new message from the contact form. Here are the details:</p>
        <p><strong>Name:</strong> ${escapeHtml(safeFirstName)} ${escapeHtml(safeLastName)}<br>
        <strong>Email:</strong> ${escapeHtml(safeEmail)}<br>
        <strong>Phone Number:</strong> ${escapeHtml(safePhone)}<br>
        <strong>Company Name:</strong> ${escapeHtml(safeCompany)}<br>
        <strong>Message Details:</strong> ${escapeHtml(safeQuery)}<br>
        <strong>Marketing Permissions:</strong> ${escapeHtml(safeMarketing)}</p>
        <p>Please review this message and respond as soon as possible.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        const autoReply = {
            from: process.env.EMAIL,
            to: safeEmail,
            subject: 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !',
            html: `
        <p>Hi ${escapeHtml(safeFirstName)},</p>
        <p>Thank you for contacting us! We&apos;ve received your details and our team will get back to you shortly.</p>
        <p>We&apos;ll do our best to respond within 1-2 business days. In the meantime, feel free to browse our website for more information.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        await transporter.sendMail(adminMail)
        await transporter.sendMail(autoReply)

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}
