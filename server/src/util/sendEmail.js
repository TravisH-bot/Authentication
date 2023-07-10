import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendEmail = ({ from, to, subject, html }) => {
  const message = { from, to, subject, html };
  return transporter.sendMail(message);
};
