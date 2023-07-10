import nodemailer from "nodemailer";
import { sendEmail } from "../util/sendEmail.js";
import Mailgen from "mailgen";

// test account
export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let message = {
      from: '"Fred Foo 👻" <t.hackbarth.services@gmail.com>', // sender address
      to: "systemfan013@yahoo.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Successfully Registered with us!", // plain text body
      html: "<b>Successfully Registered with us!</b>", // html body
    };

    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          msg: "You should receive an email",
          info: info.messageId,
          preview: nodemailer.getTestMessageUrl(info),
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });

    // res.status(201).json("Sent!")
  },
};

// send mail from real gmail
export const realEmailRoute = {
  path: "/api/email",
  method: "post",
  handler: async (req, res) => {
    const { userEmail } = req.body;
    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "https//mailgen.org/",
      },
    });

    let response = {
      body: {
        name: "Test",
        intro: "Your signup was successful!",
        table: {
          data: [
            {
              item: "Nodemailer Stack Book",
              description: "A backend application",
              price: "$10.99",
            },
          ],
        },
        outro: "Looking forward to doing more business!",
      },
    };
    let mail = MailGenerator.generate(response);
    try {
      await sendEmail({
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Place Order",
        text: "Thank you for the order",
        html: mail,
      });
      res.status(201).json({ msg: "Get message!" });
    } catch (e) {
      res.status(500).json({ error });
    }

    // let config = {
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // };

    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // });

    // let message = {
    //   from: process.env.EMAIL,
    //   to: userEmail,
    //   subject: "Place Order",
    //   html: "<p>test</P>",
    // };

    // transporter
    //   .sendMail(message)
    //   .then(() => {
    //     return res.status(201).json({ msg: "Get message!" });
    //   })
    //   .catch((error) => {
    //     return res.status(500).json({ error });
    //   });
  },
};
