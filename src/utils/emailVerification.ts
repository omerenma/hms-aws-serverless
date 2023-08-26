const nodemailer = require('nodemailer')
import env from 'dotenv'
env.config()

const sendEmail = async (email:string, subject:string, html:string, EMAIL_SMTP_USER:string) => {
    try {
        const transporter = nodemailer.createTransport({
            // host:process.env.HOST,
            service: "GMAIL",
            port:587,
            secure:true,
            auth:{
                user:process.env.EMAIL_SMTP_USER,
                pass:process.env.EMAIL_VERIFY_SECRET
            }
        })

        await transporter.sendMail({
            from:EMAIL_SMTP_USER,
            to:email,
            subject:subject,
            text:html
        })
        
    } catch (error) {
        return error
    }
}

module.exports = sendEmail