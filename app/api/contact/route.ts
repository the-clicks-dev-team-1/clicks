import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// import nodemailer from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        email,
        info,
      } = await req.json();

      // const transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   port: 587,
      //   secure: false,
      //   auth: {
      //     user: 'b.zahorodnii@theclicks.ca',
      //     pass: 'nzaw ekqj dofk vire',
      //   },
      // });

      // await transporter.verify();

      // const mailOptions = {
      //   from: email,
      //   // to: "info@theclicks.ca",
      //   to: "b.zahorodnii@theclicks.ca",
      //   // to: "v.lytvynenko@theclicks.ca",
      //   // cc: "sales@theclicks.ca",
      //   // bcc: "v.lytvynenko@theclicks.ca",
      //   // bcc: "b.zahorodnii@theclicks.ca",
      //   subject: "Contact Form Submission",
      //   html: `
      //               <h1>Contact Form</h1>
      //               <p>Work Email: ${email}</p>
                
      //               <p>Info: ${info}</p>
      //           `,
      // };

      // await transporter.sendMail(mailOptions);

      const resend = new Resend('re_52tsa1ex_L8HX3Rb69Z6rRWSvL6Kw5Ccd');
      const data = await resend.emails.send({
        from: "The Clicks <info@theclicks.ca>",
        to: ["b.zahorodnii@theclicks.ca"],
        subject: "Contact Form Submission",
        html: `
          <h1>Contact Form</h1>
          <p>Work Email: ${email}</p>
          <p>Info: ${info}</p>
        `,
      });

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json(`email has not been sent: ${error}`);
    }
    
  } else {
    return NextResponse.json("method not allowed");
  }
}
