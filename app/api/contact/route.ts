import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        // first_name,
        // last_name,
        email,

        // company_name,
        // help,
        // company_size,
        info,
      } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: "info@theclicks.ca",
        // to: "v.lytvynenko@theclicks.ca",
        // to: "viktorlyt@gmail.com",
        cc: "sales@theclicks.ca",
        // bcc: "v.lytvynenko@theclicks.ca",
        bcc: "b.zahorodnii@theclicks.ca",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>Work Email: ${email}</p>
                
                    <p>Info: ${info}</p>
                `,
        // html: `
        //             <h1>Contact Form</h1>
        //             <p>First Name: ${first_name}</p>
        //             <p>Last Name: ${last_name}</p>
        //             <p>Work Email: ${email}</p>

        //             <p>Company Name: ${company_name}</p>
        //             <p>Company Size: ${company_size}</p>
        //             <p>Help: ${help}</p>

        //             <p>Info: ${info}</p>
        //         `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json("method not allowed");
  }
}
