import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY || '', // Используем пустую строку как значение по умолчанию
  server: process.env.MAILCHIMP_SERVER_PREFIX || '', // Используем пустую строку как значение по умолчанию
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID || ''; // Используем пустую строку как значение по умолчанию

    if (!audienceId) {
      throw new Error('Mailchimp Audience ID is not defined');
    }

    // Подписка пользователя на список рассылки в Mailchimp
    const response = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json({ message: 'Subscription successful!', response });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({ Allow: 'POST' }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
