import axios from 'axios';

const senderEmail = 'sender-email';
const nhnApiUrl = 'your nhn api url';
const nhnAppKey = 'your nhn app key';
const nhnSecretKey = 'your nhn secret key';

export async function nhnSendEmail(emailOptions) {
  try {
    const bodyData = {
      senderAddress: senderEmail,
      ...emailOptions,
    };

    const response = await axios.post(
      `${nhnApiUrl}/email/v2.0/appKeys/${nhnAppKey}/sender/eachMail`,
      bodyData,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Secret-Key': nhnSecretKey,
        },
      }
    );
    const jsonResponse = response.data;

    return jsonResponse;
  } catch (err) {
    throw new Error(
      `/extAPI/nhnAPI 'nhnSendEmail' func(): ${
        err.response ? JSON.stringify(err.response.data) : err
      }, ${err.response && 'status: ' + err.response.status}`
    );
  }
}
