const express = require('express');
const nodemailer = require('nodemailer');
const app=express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pravinkumar111221@gmail.com', // Your email address
        pass: 'vzay hpng uphmslnt' // Your email password
    }
});

app.post('/send-email', async (req, res) => {
    try {
            const mailOptions = {
            from: 'pravinkumar111221@gmail.com',
            to: 'logachan08@gmail.com',
            subject: 'good evening',
            text: 'heloooooo',
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});
app.listen(3500,(req,res)=>{
    console.log("server is runnig");
})
