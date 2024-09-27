require("dotenv").config();
const brevo = require("@getbrevo/brevo");

const API_CLIENT = brevo.ApiClient.instance;

const API_KEY = API_CLIENT.authentications["api-key"];
API_KEY.apiKey = `xkeysib-${process.env.BREVO_API}`;

const API_INSTANCE = new brevo.TransactionalEmailsApi();

const configuration = async (email: any) => {
  API_INSTANCE.sendTransacEmail(email).then(
    () => console.log("Email Sent Successfully"),
    () => console.log("Failed To Send Email")
  );
};

export default configuration;
