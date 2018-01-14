// import firebase from 'firebase'

// if(process.env = 'test'){
//     var config = require('config/test')
// }else{
//     var config = require('config/development')
// }

// console.log('Config',config)

// try {
//     // Initialize Firebase
//     var config = {
//         apiKey: config.API_KEY,
//         authDomain: config.AUTH_DOMAIN,
//         databaseURL: config.DATABASE_URL,
//         projectId: config.PROJECTID,
//         storageBucket: config.STORAGE_BUCKET,
//         messagingSenderId: config.MESSAGINGSENDERID
//     };
//     firebase.initializeApp(config);

// } catch (e) {

// }

// export var firebaseRef = firebase.database().ref()
// export default firebase


import firebase from 'firebase'

if(process.env.NODE_ENV === 'test'){
    var config = require('config/test')
}else if(process.env.NODE_ENV === 'development'){
    var config = require('config/development')
}else{
    var config = {
        ...process.env
    }
}

try {
    // Initialize Firebase
    var config = {
        apiKey: config.API_KEY,
        authDomain: config.AUTH_DOMAIN,
        databaseURL: config.DATABASE_URL,
        projectId: config.PROJECTID,
        storageBucket: config.STORAGE_BUCKET,
        messagingSenderId: config.MESSAGINGSENDERID
    };
    firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
