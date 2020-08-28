// Firebase Config
import * as admin from 'firebase-admin';
import * as email from './email';
admin.initializeApp();
// const db = admin.firestore();

export const sendIndividualEmail = email.sendIndividualEmail;
export const sendEmailOnSubscribe = email.sendEmailOnSubscribe;
export const sendAllEmails = email.sendAllEmails;
