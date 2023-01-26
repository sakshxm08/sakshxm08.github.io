const firebaseConfig = {
  apiKey: "AIzaSyBzwdDLPdq3ru4bxViGJifoGJSaTsP0x0Y",
  authDomain: "portfolio-886b2.firebaseapp.com",
  databaseURL: "https://portfolio-886b2-default-rtdb.firebaseio.com",
  projectId: "portfolio-886b2",
  storageBucket: "portfolio-886b2.appspot.com",
  messagingSenderId: "577743586019",
  appId: "1:577743586019:web:e62d7a548274f3fb083bd6",
  measurementId: "G-HDD6YJTNEW",
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("Collected Data");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  saveMessage(name, email, message);
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
