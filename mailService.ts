import { mailConfig } from './config';
import { nhnSendEmail } from './nhnAPI';

const ejs = require('ejs');

export class MailService {
  getTitle({ countryCode, sender }) {
    const senderName = sender ?? 'default';
    const country = countryCode ?? 'default';

    return mailConfig[country].title(senderName);
  }

  async generateContent({ countryCode, ...data }) {
    const templateName = countryCode
      ? mailConfig[countryCode].template
      : mailConfig.default.template;

    const emailTemplate = await ejs.renderFile(
      `${process.cwd()}/views/${templateName}`,
      data,
      { async: true }
    );

    return emailTemplate;
  }

  async send(email, name, title, content) {
    const response = await nhnSendEmail({
      title: title,
      body: content,
      receiverList: [
        {
          receiveMailAddr: email,
          receiveName: name,
        },
      ],
    });
    return response;
  }

  async sendEmail({ country, senderName, subscriber, customData }) {
    const { email, name } = subscriber;

    const title = this.getTitle({
      countryCode: country,
      sender: senderName,
    });

    const content = await this.generateContent({
      countryCode: country,
      email: email,
      name: name,
      ...customData,
    });

    return await this.send(email, name, title, content);
  }
}
