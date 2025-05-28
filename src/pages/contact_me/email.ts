export default async function sendMail({
    subject,
    text,
    html,
    from
}: {
    subject: string;
    text?: string;
    html?: string;
    from?: string;
}) {
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from,
        to: "ninokvakhadze2@gmail.com",
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
}