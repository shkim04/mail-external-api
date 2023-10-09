export const mailConfig = {
  kr: {
    title: (senderName) => `${senderName} 입니다. 저는 한국인입니다.`,
    template: 'template_kr.ejs',
  },
  dk: {
    title: (senderName) => `This is ${senderName}. Jeg er dansker`,
    template: 'template_dk.ejs',
  },
  nl: {
    title: (senderName) => `Dit is ${senderName}. Ik ben een Nederlander`,
    template: 'template_nl.ejs',
  },
  default: {
    title: (senderName) => `This is ${senderName}. I am a human being`,
    template: 'template_default.ejs',
  },
};
