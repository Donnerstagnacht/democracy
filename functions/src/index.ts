// Firebase Config
import * as admin from 'firebase-admin';
import * as email from './email';
import * as indexUser from './index-users';
admin.initializeApp();
// const db = admin.firestore();

export const sendIndividualEmail = email.sendIndividualEmail;
export const sendEmailOnSubscribe = email.sendEmailOnSubscribe;
export const sendAllEmails = email.sendAllEmails;

export const onCreateUserUpdateIndex = indexUser.onCreateUserUpdateIndex;
export const onUpdateUserUpdateIndex = indexUser.onUpdateUserUpdateIndex;
export const onDeleteUserUpdateIndex = indexUser.onDeleteUserUpdateIndex;
