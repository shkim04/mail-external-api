import { MailService } from './mailService';

describe('mail 서비스 테스트', () => {
  const mailService = new MailService();

  it('should be true after sending', async () => {
    const response = await mailService.sendEmail({
      country: 'kr',
      senderName: '개발자',
      subscriber: {
        email: 'test@gmail.com',
        name: 'my name',
      },
      customData: {},
    });

    expect(response.header.isSuccessful).toEqual(true);
  });
});
