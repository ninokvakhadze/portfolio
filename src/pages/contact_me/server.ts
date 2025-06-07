import express, { Request, Response } from 'express';
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ninokvakhadze2@gmail.com',        
    pass: 'your-email-app-password',     
  }
});

interface ContactFormRequestBody {
    name: string;
    email: string;
    message: string;
}

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
}

app.post('/send-email', (req: Request<unknown, unknown, ContactFormRequestBody>, res: Response) => {
    const { name, email, message } = req.body;

    const mailOptions: MailOptions = {
        from: email,                 // Email of the person who filled the form
        to: 'your-email@gmail.com',  // Your email where you want to receive messages
        subject: `New message from ${name} (${email})`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

