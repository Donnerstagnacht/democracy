// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
// const db = admin.firestore();

// Sendgrid Config
import * as sendGridMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sendGridMail.setApiKey(API_KEY);

// hello world
export const sendIndividualEmail = functions.https.onCall(async (event, ) => {
  // console.log('Betreff ist', data.subject);
  // console.log('Name ist', data.name);
  // console.log('Text ist', data.text);

  const individualMail = {
    to: event.email,
    from: 'tobias.hassebrock@gmail.com',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
        subject: event.subject,
        name: event.name,
        text: event.text,
    },
  }
  // console.log(individualMail);

  await sendGridMail.send(individualMail);
  return {success: true};
});

export const sendAllEmails = functions.https.onCall(async (event) => {
  const subscriberSnapshots = await admin.firestore().collection('subscribers').get();

  const emails = subscriberSnapshots.docs.map(snap => snap.data().email);

  const individualMail = {
    to: emails,
    from: 'tobias.hassebrock@gmail.com',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
        subject: event.subject,
        text: event.text,
    },
  }
  // console.log(individualMail);

  await sendGridMail.send(individualMail);
  return {success: true};
});

export const sendEmailOnSubscribe = functions.firestore.document('subscribers/{subscriberID}').onCreate( async (event) => {
  const subscriber = event.data();
  // console.log('Adresse: ', subscriber.email);

  const subscribeEmail: any = {
    to: subscriber.email,
    from: 'tobias.hassebrock@gmail.com',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
        subject: 'Danke für die Subscription',
        text: 'Das ist deine erste Email aufgrund der Subscription bei Democracy',
    },
  }

  return sendGridMail.send(subscribeEmail);
});

