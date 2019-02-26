import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1Cj66mtveoY5HXCbeiuPYq9EwMYmFyHM",
    authDomain: "a-challenge-a-day.firebaseapp.com",
    databaseURL: "https://a-challenge-a-day.firebaseio.com",
    projectId: "a-challenge-a-day",
    storageBucket: "a-challenge-a-day.appspot.com",
    messagingSenderId: "647497555163"
  };

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//     name: 'Thi Tran',
//     age: '26',
//     isSingle: true,
//     location:{
//         city: 'Philadelphia',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error)=> {
//     console.log('This failed.', error);
// });

// database.ref('age').set(27);

// database.ref('location/city').set('California');

// // Set another attributes
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// });
// // How to Remove 
// // database.ref('age').remove()
// //     .then(() => {
// //         console.log('Removed succeed.');
// //     })
// //     .catch((e) => {
// //         console.log('Remove failed' + e)
// //     });

// // how to update data 
// database.ref('attributes').update({height: 173})
//     .then(()=> {
//         console.log('Height is updated')
//     })
//     .catch ((e) => {
//         console.log('Update failed' + e)
//     });

// // How to fetch data - Once is for one time 
// // database.ref('location')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     })

// // Fetching data for multiple times
// // database.ref()
// //     .on('value', (snapshot) => {
// //         console.log(snapshot.val());
// //     })

// const notes= [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// },{
//     id: '123',
//     title: 'another note!',
//     body: 'This is my note'
// },{
//     id: '11232',
//     title: 'First note!',
//     body: 'This is my note'
// }]


// // const firebaseNotes = {
// //     notes: {
// //         jfklsjafls: {
// //             title: 'First note!',
// //             body: 'This is my note'
// //         },
// //         saklfjkldsaf: {
// //             title: 'another note!',
// //             body: 'This is my note'
// //         }
// //     }
// // }
// // database.ref('notes').set(firebaseNotes);

// database.ref('notes').push ({
//     title: 'To Do',
//     body: 'go for a run'
// })

// database.ref('notes').push ({
//     title: 'Course Topics',
//     body: 'React Native'
// });

// database.ref('notes')
//     .on('value',(snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=> {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })

//         console.log(expenses);
//     })