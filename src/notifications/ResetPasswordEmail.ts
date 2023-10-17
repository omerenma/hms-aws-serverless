import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

async function createTransport(config:any){
    const transporter = nodemailer.createTransport(config);
    return transporter

}

let configurations = {
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    requireTLC:true,
    auth:{
        user:process.env.EMAIL_SMTP_USER as string,
        pass:process.env.EMAIL_SMTP_PASSWORD as string
    }
}

const sendMail = async (messageOption:any) => {
    const transporter = await createTransport(configurations)
    await transporter.verify()
     transporter.sendMail(messageOption, (err, info) => {
        if(err){
            throw new Error(err.message)
        }
        return info
    })
}

export default sendMail