import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "241bacb68e02f0",
    pass: "e40525dac57c4a"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <rafael@feedget.com>',
      to: 'Rafael Pereira <rafaelsantospereira03@gmail.com>',
      subject,
      html: body
    })
  };
}