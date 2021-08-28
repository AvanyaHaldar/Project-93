var firebaseConfig = {
      apiKey: "AIzaSyDuSPReeGKYlzUk3xQ0B7mcWr9SIjTvYlE",
      authDomain: "kwitter-app-26620.firebaseapp.com",
      databaseURL: "https://kwitter-app-26620-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-26620",
      storageBucket: "kwitter-app-26620.appspot.com",
      messagingSenderId: "29205964220",
      appId: "1:29205964220:web:545344f5efef0a3cb777b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var username = localStorage.getItem("user_name");
console.log("Username = " + username);
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
