// app/api/subscribe/route.ts

import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import nodemailer from "nodemailer";
import { getTranslations } from "next-intl/server";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const test = false;
const host = test ? "http://localhost:3000" : "https://theclicks.ca";

export async function POST(req: Request) {
  try {
    const { email, locale } = await req.json();

    const t = await getTranslations({ locale, namespace: "subscribe" });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const listId = process.env.MAILCHIMP_AUDIENCE_ID as string;
    const crypto = require("crypto");
    const emailHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    // Check if the user exists in Mailchimp
    let subscriber;
    try {
      subscriber = await mailchimp.lists.getListMember(listId, emailHash);
    } catch (error: any) {
      if (error.status !== 404) {
        console.error("Mailchimp error:", error);
        return NextResponse.json(
          { error: "Mailchimp error", details: error },
          { status: 500 }
        );
      }
    }

    if (subscriber) {
      // If the user was previously unsubscribed, update status to "subscribed"
      if (subscriber.status === "unsubscribed") {
        await mailchimp.lists.updateListMember(listId, emailHash, {
          status: "subscribed",
        });

        await transporter.sendMail({
          from: `"The Clicks" <info@theclicks.ca>`,
          to: email,
          subject: `${t("welcomeSubject")} 🎉`,
          html: `
                <h2>${t("thankYou")}</h2>
                <p>${t("welcomeText")}</p>
                <p>${t(
                  "unsubscribeText"
                )} <a href="${host}/${locale}/unsubscribe?email=${encodeURIComponent(
            email
          )}">${t("unsubscribeLink")}</a>.</p>
          <p>${t("bestRegards")}<br> The Clicks </p>
              `,
        });

        await transporter.sendMail({
          from: `"The Clicks" <info@theclicks.ca>`,
          to: process.env.ADMIN_EMAIL,
          subject: "New Newsletter Subscription",
          text: `A user has re-subscribed to your newsletter.  
          
        📧 Email: ${email}`,
        });

        return NextResponse.json({ message: "Re-subscribed successfully!" });
      }

      return NextResponse.json({ message: "Already subscribed!" });
    }

    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        // status: "pending",
        status: "subscribed",
      }
    );

    await transporter.sendMail({
      from: `"The Clicks" <info@theclicks.ca>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to your newsletter.  
    
  📧 Email: ${email}`,
    });

    await transporter.sendMail({
      from: `"The Clicks" <info@theclicks.ca>`,
      to: email,
      subject: `${t("welcomeSubject")} 🎉`,
      html: `
            <h2>${t("thankYou")}</h2>
            <p>${t("welcomeText")}</p>
            <p>${t(
              "unsubscribeText"
            )} <a href="${host}/${locale}/unsubscribe?email=${encodeURIComponent(
        email
      )}">${t("unsubscribeLink")}</a>.</p>
      <p>${t("bestRegards")}<br> The Clicks </p>
          `,
    });

    return NextResponse.json({
      message: "Subscription successful!",
      data: response,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request", details: error },
      { status: 500 }
    );
  }
}

// Unsubscribe a user
export async function DELETE(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Get the subscriber's Mailchimp ID (MD5 hash of the email)
    const crypto = require("crypto");
    const emailHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    // Unsubscribe the user
    const response = await mailchimp.lists.updateListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      emailHash,
      { status: "unsubscribed" }
    );

    return NextResponse.json({
      message: "Unsubscribed successfully!",
      data: response,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe", details: error },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({ Allow: "POST" }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
