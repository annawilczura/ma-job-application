'use server';

import { redirect } from 'next/navigation';
import { createSession } from '@/lib/session';

export async function login(_: unknown, formData: FormData) {
  const password = formData.get('password');
  if (password === process.env.SITE_PASSWORD) {
    await createSession();
    redirect('/chat');
  } else {
    return 'Błędne hasło. Spróbuj ponownie.';
  }
}

export async function submitMessage(
  chatInput: string,
): Promise<{ text?: string; error?: string }> {
  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const username = process.env.N8N_USERNAME;
    const password = process.env.N8N_PASSWORD;

    if (!webhookUrl || !username || !password) {
      console.error(
        'Missing n8n credentials or webhook URL in environment variables.',
      );
      return {
        error: 'Server configuration error. Administrator has been notified.',
      };
    }

    if (!chatInput) {
      return { error: 'chatInput is required' };
    }

    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ chatInput }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook error:', response.status, errorText);
      return { error: 'Failed to fetch response from chat service' };
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0 && data[0].response) {
      return { text: data[0].response };
    }

    const botResponse =
      data.text || data.reply || data.response || JSON.stringify(data);

    return { text: botResponse };
  } catch (error) {
    console.error('Error in submitMessage server action:', error);
    return { error: 'Internal server error' };
  }
}
