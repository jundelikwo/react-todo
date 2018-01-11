import firebase from 'firebase'

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBRMrJ6epYZBMXlJqYlYUPQJggDzahRYnM",
        authDomain: "react-todo-app-fbcef.firebaseapp.com",
        databaseURL: "https://react-todo-app-fbcef.firebaseio.com",
        projectId: "react-todo-app-fbcef",
        storageBucket: "react-todo-app-fbcef.appspot.com",
        messagingSenderId: "187551939735"
    };
    firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase