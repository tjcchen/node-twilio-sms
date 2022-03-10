// Enable dotenv to load environment variables
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log('accountSid', accountSid);
console.log('authToken', authToken);

const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: process.env.MY_PHONE_NUMBER,
//      to: '+8618518251024'
//    })
//   .then(message => {
//     console.log('print out message');
//     console.log(message.sid)
//   });

  client.validationRequests
    .create({
      friendlyName: 'my phone number',
      phoneNumber: process.env.MY_PHONE_NUMBER
    })
    .then(validation_request => console.log(validation_request.friendlyName));
