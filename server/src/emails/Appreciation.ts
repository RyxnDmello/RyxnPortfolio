require("dotenv").config();
const brevo = require("@getbrevo/brevo");

const API_CLIENT = brevo.ApiClient.instance;

const API_KEY = API_CLIENT.authentications["api-key"];
API_KEY.apiKey = `xkeysib-${process.env.BREVO_API}`;

const API_INSTANCE = new brevo.TransactionalEmailsApi();

const postAppreciationEmail = async (email: string, name: string) => {
  const template = {
    sender: {
      email: process.env.BREVO_EMAIL_ADDRESS as string,
      name: process.env.BREVO_EMAIL_NAME as string,
    },
    to: [{ email, name }],
    params: { name },
    templateId: 2,
  };

  API_INSTANCE.sendTransacEmail(template).then(
    function (data: any) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error: any) {
      console.error(error);
    }
  );
};

export default postAppreciationEmail;
