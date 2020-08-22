// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
// const db = admin.firestore();


export interface MessageWebpage {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  responded: boolean;
}

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
        id: event.id
    },
  }
  // console.log(individualMail);;

  await sendGridMail.send(individualMail);
  // await admin.firestore().collection('messagesWebpage').doc(event.id).update({'responded': true}).then(console.log('responded'));

  // docRef.

  return {success: true};
});

export const sendAllEmails = functions.https.onCall(async (event) => {
  const subscriberSnapshots = await admin.firestore().collection('subscribers').get();

  const emails = subscriberSnapshots.docs.map(snap => snap.data().email);
  console.log('ids hier?', event.id)
  const ids = subscriberSnapshots.docs.map(snap => snap.id);
  // const id = subscriberSnapshots.docs.map(snap => snap.data().id);
  // console.log('id hier? ', id);
  // console.log('email hier?', emails);
  // console.log('data hier?', subscriberSnapshots.docs.map(snap => snap.data()));

  const individualMail = {
    to: emails,
    from: 'tobias.hassebrock@gmail.com',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
        subject: event.subject,
        text: event.text,
        id: ids //eventuell Bug
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

