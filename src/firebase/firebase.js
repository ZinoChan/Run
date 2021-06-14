import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,  
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MSG_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const db = firebase.firestore();

export const storage = firebase.storage();

export const addProduct = (id, product) => db.collection('products').doc(id).set(product);


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
