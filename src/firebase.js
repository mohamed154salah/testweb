import { initializeApp } from 'firebase/app';

import { getMessaging, getToken,onMessage} from 'firebase/messaging';
const firebaseConfig = {
    apiKey: "AIzaSyCtaFmV_Hvg9Q5IpUpTudXNzOWywuJ3hRQ",
    authDomain: "test-3d1f1.firebaseapp.com",
    projectId: "test-3d1f1",
    storageBucket: "test-3d1f1.appspot.com",
    messagingSenderId: "225129083745",
    appId: "1:225129083745:web:c5022035fa853c56780b20",
    measurementId: "G-9TSC2CQH9B"
  };

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BFxTDCGuQvhIX96MJFK1Ua4RxUm1KBRJ8ZA1xi6XAMiU6aq10HCA2bdqvcIflWp0Pg7wzbrI__kczgJuZc3KrSE" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          return true;
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          return false;
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});