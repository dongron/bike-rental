import nodemailer from 'nodemailer';
// https://www.youtube.com/watch?v=t2LvPXHLrek

const service = process.env.NEXT_PUBLIC_NODEMAILER_SERVICE;
const email = process.env.NEXT_PUBLIC_NODEMAILER_USER;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD;

const transporter = nodemailer.createTransport({
  service,
  auth: {
    user: email,
    pass,
  },
});

const emailOptions = Object.freeze({
  from: email,
  to: email,
});

export { emailOptions, transporter };
