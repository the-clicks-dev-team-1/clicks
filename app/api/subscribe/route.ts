// app/api/subscribe/route.ts

import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json({ message: 'Subscription successful!', data: response });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request', details: error }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({ Allow: 'POST' }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
