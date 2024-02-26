// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCtaFmV_Hvg9Q5IpUpTudXNzOWywuJ3hRQ",
  authDomain: "test-3d1f1.firebaseapp.com",
  projectId: "test-3d1f1",
  storageBucket: "test-3d1f1.appspot.com",
  messagingSenderId: "225129083745",
  appId: "1:225129083745:web:c5022035fa853c56780b20",
  measurementId: "G-9TSC2CQH9B"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
