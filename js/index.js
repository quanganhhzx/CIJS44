window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAoW969t2pbhCa_uVqY5GpbFTvdNJ2sfmI",
    authDomain: "chat-ci-44-khiemnb.firebaseapp.com",
    databaseURL: "https://chat-ci-44-khiemnb.firebaseio.com",
    projectId: "chat-ci-44-khiemnb",
    storageBucket: "chat-ci-44-khiemnb.appspot.com",
    messagingSenderId: "1078186479902",
    appId: "1:1078186479902:web:78978497c88eb6dcfbb90f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  console.log(firebase.app().name)
  view.setActiveScreen('registerScreen')
}