import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const configured =
    !!process.env.RESEND_API_KEY &&
    !!process.env.CONTACT_TO_EMAIL &&
    !!process.env.CONTACT_FROM_EMAIL;
  if (!configured) {
    return res.status(503).json({ ok: false, reason: 'missing configuration' });
  }
  res.status(200).json({ ok: true });
}
