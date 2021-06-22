const baseUrl =
  // 'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api';
  // 'http://localhost:8000/api';
  'http://d464b5f2314a.ngrok.io/api'

export const loginUrl = `${baseUrl}/user/login`;
export const registerUrl = `${baseUrl}/user/register`;
export const quizUrl = `${baseUrl}/quiz`;
export const scoreUrl = `${baseUrl}/score`;
export const orderUrl = `${baseUrl}/pay/order`;
export const verifyUrl = `${baseUrl}/pay/verify`;
export const categoryUrl = `${baseUrl}/category`;
export const leaderBoardUrl = `${baseUrl}/leaderBoard`;
export const razorpayScriptURL = 'https://checkout.razorpay.com/v1/checkout.js';
