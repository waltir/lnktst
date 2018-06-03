import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASEE_STOREAGE_BUCKET,
    messagingSenderId: process.env.FIREBASEE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// // CHILD_REMOVED
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// // CHILD_CHANGED
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// // CHILD_ADDED - called for all children not just new children
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// - - - - - - - PUSHING DATA TO OUR DATABASE - - - - - - - - - - 
//   database.ref('expenses').push({
//       description: 'Rent',
//       note: '',
//       amount: '109500',
//       createdAt: 976123498763
//   })
//   database.ref('expenses').push({
//     description: 'Cat litter',
//     note: '',
//     amount: '10500',
//     createdAt: 976123498763
// })
// database.ref('expenses').push({
//     description: 'Shit fest',
//     note: '',
//     amount: '10900',
//     createdAt: 976123498763
// })

// - - - - - - - - SETTING OUR DATA IN THE DATABASE - - - - - - - - - 
// database.ref().set({
//     name: 'Frank Reynolds',
//     age: '66',
//     height: "4'9",
//     weight: "over",
//     hobbies: 'rum ham',
//     relations: {
//         isSingle: false,
//         partner: 'Artemis',
//         likes: 'Food play'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     },
//     occupation: {
//         title: 'owner',
//         companyName: 'Paddys Pub'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed.', error)
// });

// - - - - - REMOVING DATA FROM OUR DATABASE - - - - - - - 
// database.ref('relations/isSingle')
//     .remove()
//     .then(() => {
//         console.log('Relationship status was removed from DB')
//     }).catch((e) => {
//         console.log('There was an error', e)
//     })

// - - - - - UPDATING OUR DATABASE - - - - - - - - - 
// database.ref().update({
//     name: {
//         birthName: 'Franky Reynolds',
//         nickName: 'Franky Donkey Brains'
//     },
//     age: 68,
//     weight: null,
//     userWeight: 184,
//     'occupation/title': 'Grand Master / Owner'
// }).then(() => {
//     console.log('Update was made to the DB');
// }).catch((e) => {
//     console.log('There was an error while updating the DB');
// });

// database.ref('relations/isSingle').set(null); is the same as using .remove()

// remove everything in DB database.ref().remove()

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref('name/nickName').once('value');

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });