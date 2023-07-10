import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendEmail = ({ from, to, subject, text, html }) => {
  const message = { from, to, subject, text, html };
  return transporter.sendMail(message);
};
