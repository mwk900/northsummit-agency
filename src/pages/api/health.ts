import type { NextApiRequest, NextApiResponse } from 'next';

const CONTACT_TO_EMAIL = 'hello@northsummit.agency';
const CONTACT_FROM_EMAIL = 'hello@northsummit.agency';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const configured =
    !!process.env.RESEND_API_KEY?.trim() &&
    EMAIL_PATTERN.test(CONTACT_TO_EMAIL) &&
    EMAIL_PATTERN.test(CONTACT_FROM_EMAIL);

  if (!configured) {
    return res.status(503).json({ ok: false, reason: 'missing configuration' });
  }
  res.status(200).json({ ok: true });
}
