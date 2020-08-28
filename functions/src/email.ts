import * as sendGridMail from '@sendgrid/mail';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
sendGridMail.setApiKey(API_KEY);

export const sendIndividualEmail = functions.https.onCall(async (event, ) => {

  const individualMail = {
    to: event.email,
    from: 'tobias.hassebrock@gmail.com',
    templateId: 'd-a19f9960f5c94d1994a947632430f819',
    dynamic_template_data: {
        subject: event.subject,
        name: event.name,
        text: event.text,
        // id: event.id
    },
  }

  await sendGridMail.send(individualMail);

  return {success: true};
});

export const sendAllEmails = functions.https.onCall(async (event) => {
  const subscriberSnapshots = await admin.firestore().collection('subscribers').get();

  const emails = subscriberSnapshots.docs.map(snap => snap.data().email);
  // const ids = subscriberSnapshots.docs.map(snap => snap.id);

  const newsletter = {
    to: emails,
    from: 'tobias.hassebrock@gmail.com',
    templateId: 'd-d9922f2ca097447ca5774e37e0e9c548',
    dynamic_template_data: {
        subject: event.subject,

        text1: event.text1,
        title1: event.title1,

        title2: event.title2,
        text2: event.text2,

        title3: event.title3,
        text3: event.text3,
    },
  }

  await sendGridMail.send(newsletter);
  return {success: true};
});

export const sendEmailOnSubscribe = functions.firestore.document('subscribers/{subscriberID}').onCreate( async (event) => {
  const subscriber = event.data();

  const subscribeEmail: any = {
    to: subscriber.email,
    from: 'tobias.hassebrock@gmail.com',
    templateId: 'd-36a0b72c12a44974ab9a5d6286b4e5a3',
    dynamic_template_data: {
        subject: 'Willkommen in der Familie!',
        title: 'Willkommen beim Left Life News Service!',
        text: `Das ist deine erste Email aufgrund der Subscription bei Democracy.
        Der Newsletter erscheint monatlich und enthält die Bereiche General News, Tech News und Bonus News.
        Wir freuen uns immer über Unterstützung und konstruktive Kritik.`
    },
  }

  return sendGridMail.send(subscribeEmail);
});

