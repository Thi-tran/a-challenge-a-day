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

//Initial data
// database.ref('challenge').push({
//     title: 'Do 100 push-ups'
// });

// database.ref('challenge').push({
//     title: '(contributed challenged) French kiss a stranger'
// });
// database.ref('challenge').push({
//     title: 'start an IT project'
// });


export const getChallenge = () => {
    const listOfChallenge = [];
    database.ref('challenge')
    .on('value',(snapshot) => {
        snapshot.forEach((childSnapshot)=> {
            listOfChallenge.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
    })
    return listOfChallenge;
}

export const getComment = (id) => {
    const listOfComment = [];
    database.ref(`challenge/${id}/comment`)
    .on('value',(snapshot) => {
        snapshot.forEach((childSnapshot)=> {
            listOfComment.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
    })
    return listOfComment;
}

export const addChallenge = (challenge) => {
    database.ref('suggestedChallenge').push({
        title: challenge
    })
}

// add Comment to the challenge
export const addComment = (id, name, comment) => {
    database.ref(`challenge/${id}/comment`).push({
        name: name,
        comment: comment
    })
}



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
