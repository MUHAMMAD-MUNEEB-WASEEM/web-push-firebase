importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnIBCat2OMMboPjGUbF8WzYeYOnOre648",
  authDomain: "web-push-9618a.firebaseapp.com",
  projectId: "web-push-9618a",
  storageBucket: "web-push-9618a.appspot.com",
  messagingSenderId: "578906195302",
  appId: "1:578906195302:web:ce8c7b57f8d9b983c3f4a7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
