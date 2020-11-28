import firebase from 'firebase/app';
import  'firebase/database';
import  'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBErMUaoHDndyVwUgOiiYbzNjPU2EAdEWQ",
    authDomain: "immamou-e194b.firebaseapp.com",
    databaseURL: "https://immamou-e194b.firebaseio.com",
    projectId: "immamou-e194b",
    storageBucket: "immamou-e194b.appspot.com",
    messagingSenderId: "886967602730",
    appId: "1:886967602730:web:32bb167472ef1a18f8bd53",
    measurementId: "G-ZL1NYDP35Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt:'select_account'});

const database = firebase.database();


export {firebase , googleAuthProvider, database as default}

// // log the entire database
// database.ref().once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val())
// })
// .catch((err)=>{
//     console.log(err)
// })

// // shoud give me the string title of my occupation
// database.ref('occupation/title').once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val())
// })
// .catch((err)=>{
//     console.log(err)
// })


// // set the entire database
// database.ref().set({
//     name:'Maximus Decimus Meridius',
//       level:100,
//       occupation:{
//           title:'student',
//           location:'lagos-NG'
//         }
//     })


//     //   to use an array
//   database.ref('INIT_STATE').push({
//       name:'',
//       surname:''
//   })


//   database.ref('INIT_STATE').once('value')
//   .then((snapshot)=>{
//       const arrayList = []
//       snapshot.forEach((childSnapshot)=>{
//           arrayList.push({
//               id:childSnapshot.key,
//               ...childSnapshot.val()
//           })
//       })
//       console.log(arrayList)
//   })




// //   updates the level table 
// database.ref('level').set(400)

// // adds a new attribute table with a new object
// database.ref('attribute').set({
//     weight:65,
//     height:5.9
// })

// database.ref().update({
//     level:500
// })

// database.ref().update({
//     level:600,
//     'INIT_STATE/-MN8EtJq2WZ7nnaIW6Fp/name':"max"
// })

// // subscribed fetch of database
// database.ref('occupation').once('value').then(
//     (snapshot)=>{
//         const newArray = []
//         snapshot.forEach((snapshotChild)=>{
//             newArray.push({
//                 val:snapshotChild.val()
//             })
//     })
//         console.log(snapshot.val())
//         console.log(newArray)
//     }
// )