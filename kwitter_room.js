
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAh6yHuheQAludMbSPisw8sdWZ0Xl1_zKI",
      authDomain: "knowledge-e-mc2-hkbt.firebaseapp.com",
      projectId: "knowledge-e-mc2-hkbt",
      storageBucket: "knowledge-e-mc2-hkbt.appspot.com",
      messagingSenderId: "624150361399",
      appId: "1:624150361399:web:72cb4311bd3730a9a756b2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
