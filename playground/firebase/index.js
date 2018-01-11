import firebase from 'firebase'

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

var firebaseRef = firebase.database().ref()

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Jonathan',
        age: 17
    }
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val())
})

todosRef.push({
    text: 'Walk the dog'
})

todosRef.push({
    text: 'Buy peak milk'
})