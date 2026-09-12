import nodemailer from 'nodemailer'
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import handlebars from "handlebars"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const verifyEmail = async(token, email) =>{

      const emailTemplateSource = fs.readFileSync(
        path.join(__dirname, "template.hbs"),
        "utf-8"
    )

    const template = handlebars.compile(emailTemplateSource)
    const htmlToSend = template({ token: encodeURIComponent(token) })

    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS
    },
    family: 4
});

    const mailConfiguration = {
        from: process.env.USER_MAIL,
        to: email,
        subject: "Email verification",
        html: htmlToSend,
    }

    transporter.sendMail(mailConfiguration, function(error, info){
        if(error){
            throw new Error(error)
        }
        console.log("Email sent successfully")
        console.log(info);
        
    })
}
