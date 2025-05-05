import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

import nodemailer from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);

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
        auth: {
          user: 'b.zahorodnii@theclicks.ca',
          pass: 'nzaw ekqj dofk vire',
        },
        // tls: {
        //   rejectUnauthorized: false, // optional, but helps with self-signed certs
        // },
        // connectionTimeout: 20000, // 10 seconds
        // greetingTimeout: 5000,    // 5 seconds
        // socketTimeout: 10000,
      });

      await transporter.verify();

      const mailOptions = {
        from: email,
        // to: "info@theclicks.ca",
        to: "b.zahorodnii@theclicks.ca",
        // to: "v.lytvynenko@theclicks.ca",
        // cc: "sales@theclicks.ca",
        // bcc: "v.lytvynenko@theclicks.ca",
        // bcc: "b.zahorodnii@theclicks.ca",
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
      return NextResponse.json(`email has not been sent: ${error}`);
    }
    // try {
    //   const {
    //     // first_name,
    //     // last_name,
    //     email,

    //     // company_name,
    //     // help,
    //     // company_size,
    //     info,
    //   } = await req.json();
    //   const data = await resend.emails.send({
    //     // from: 'onboarding@resend.dev', // Set this in DNS
    //     from: 'b.zahorodnii@theclicks.ca',
    //     // to: ['info@theclicks.ca'],
    //     // cc: ['sales@theclicks.ca'],
    //     to: ['b.zahorodnii@theclicks.ca'],
    //     bcc: ['b.zahorodnii@theclicks.ca'],
    //     subject: 'Contact Form Submission',
    //     html: `
    //       <h1>Contact Form</h1>
    //       <p>Work Email: ${email}</p>
    //       <p>Info: ${info}</p>
    //     `,
    //   });
  
    //   return NextResponse.json({ success: true, data });
    // } catch (error) {
    //   console.error(error);
    //   return NextResponse.json({ success: false, error });
    // }
  } else {
    return NextResponse.json("method not allowed");
  }
}
