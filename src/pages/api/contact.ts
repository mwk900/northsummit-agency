import type { NextApiRequest, NextApiResponse } from 'next';

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'rate_limit' });
  }

  const { intent, name, email, phone, websiteUrl, trade, serviceArea, message, company } = req.body ?? {};

  // Honeypot check
  if (company) {
    return res.status(200).json({ success: true });
  }

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const intentLabel = String(intent || 'quote').toUpperCase();

  const html = `
    <h2>New ${intentLabel === 'AUDIT' ? 'audit request' : 'enquiry'}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
    <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>` : ''}
    ${websiteUrl ? `<p><strong>Website:</strong> ${escapeHtml(String(websiteUrl))}</p>` : ''}
    ${trade ? `<p><strong>Trade:</strong> ${escapeHtml(String(trade))}</p>` : ''}
    ${serviceArea ? `<p><strong>Service area:</strong> ${escapeHtml(String(serviceArea))}</p>` : ''}
    <hr />
    <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `NorthSummit <${fromEmail}>`,
        to: toEmail,
        reply_to: email.trim(),
        subject: `[${intentLabel}] New enquiry from ${name.trim()}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
