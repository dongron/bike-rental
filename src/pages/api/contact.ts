import type { NextApiRequest, NextApiResponse } from 'next';

import { emailOptions, transporter } from '@/utils/nodemailer';

type ResponseData = {
  message?: string;
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body as any;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing values' });
    }
    try {
      const mail = {
        ...emailOptions,
        subject: `${subject} /${name}`,
        from: email,
        html: `<h1>Request from ${name}, ${email}</h1> <p>${message}</p>`,
      };
      await transporter.sendMail(mail);
      return res.status(200).json({ message: 'Email sent' });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  } else {
    return res.status(404).json({ message: 'Not found' });
  }
};

export default handler;
