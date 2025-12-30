import { info } from "console";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const myEmail = "j.labbe1225@gmail.com"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: myEmail,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

export default async function PostEmail(name: string, email: string, subject: string, message: string) {
    const html = `
    <b>Name: </b>${name}<br><br>
    <b>Email: </b>${email}<br><br>
    <b>Message: </b>${message}<br><br>`;

    try {
        const res = await transporter.sendMail({
            from: email,
            to: myEmail,
            subject: subject,
            html: html
        })

        if (res.rejected.length === 0) {
            return NextResponse.json(
                {
                    message:
                      "Your message was successfully recieved, thank you!",
                }, 
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    message:
                      "Email was rejected by SMTP server, please try again",
                }, 
                { status: 400 }
            );
        }
    } catch (err) {
        return NextResponse.json(
            {
                message:
                    "Email failed to send, please try again",
            }, 
            { status: 500 }
        );
    }
}
