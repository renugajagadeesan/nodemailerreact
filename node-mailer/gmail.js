// Load the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server (Gmail, etc.)
    port: 465, // Usually 465 for secure connections, or 587 for TLS
    secure: true, // True for 465, false for other ports (587)
    auth: {
        user: "megarajan55@gmail.com", // Replace with your email
        pass: "jrwg fhjo guri toat" // Replace with your email password or app-specific password
    }
});

// Mail options: who sends, who receives, subject, and content
let mailOptions = {
    from: 'megarajan55@gmail.com', // Sender address
    to: "renugajagadeesan@gmail.com,megarajan55@gmail.com", // List of recipients (comma-separated if multiple)
    subject: "Test Email from Nodemailer", // Subject line
    text: "Hello, this is a test email sent using Nodemailer!", // Plain text body
    html: "<b>Hello,how are you welcome</b><p>This is a test email sent using <i>Nodemailer</i>!</p>" // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }
    console.log("Message sent");
});
