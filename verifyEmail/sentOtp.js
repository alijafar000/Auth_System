import nodemailer from "nodemailer";

export const sentOtp = async(email, otp)=>{
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
        subject: "Password reset OTP",
        html: `<p>Your OTP for password reset is: <b>${otp}</b>. It is valid for 10 minutes.</p>`
    }

    await transporter.sendMail(mailConfiguration);
}
