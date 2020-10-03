import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCuUeYsI4nbKZJ-qFmjAvuGV1SQBep7dN0",
    authDomain: "nike-8cb98.firebaseapp.com",
    databaseURL: "https://nike-8cb98.firebaseio.com",
    projectId: "nike-8cb98",
    storageBucket: "nike-8cb98.appspot.com",
    messagingSenderId: "308569066158",
    appId: "1:308569066158:web:5995463497ec4442ecbb3f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const db = firebase.firestore();

export const addProduct = (id, product) => db.collection('products').doc(id).set(product);
//export const getProducts = () => db.collection('products').get();

export const generateKey = () => db.collection('products').doc().id;
export const signOut = () => firebase.auth().signOut();
export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const getProducts = () => {
    let didTimeout = false;

    return new Promise(async (resolve, reject) => {
      
        const timeout = setTimeout(() => {
          didTimeout = true;
          reject('Request timeout, please try again');
        }, 15000); 

        try {
         
          
          const totalQuery = await db.collection('products').get();

          clearTimeout(timeout);
          if (!didTimeout) {
            const products = [];
            totalQuery.forEach(doc => products.push({...doc.data() }));
           
            resolve(products);
          }
        } catch (e) {
          if (didTimeout) return;
          console.log('Failed to fetch products: An error occured while trying to fetch products or there may be no product ', e);
          reject(':( Failed to fetch products.');
        }
      
    });
}
