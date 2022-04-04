import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { toast } from 'react-hot-toast';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MSG_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  signOut = () => signOut(this.auth);
  signInWithGoogle = () => signInWithPopup(this.auth, this.googleAuthProvider);
  getProducts = () => {
    const collectionRef = collection(this.db, 'products');
    let didTimeout = false;

    return new Promise(async (resolve, reject) => {
      const timeout = setTimeout(() => {
        didTimeout = true;
        reject('Request timeout, please try again');
      }, 15000);

      try {
        const totalQuery = await getDocs(collectionRef);

        clearTimeout(timeout);
        if (!didTimeout) {
          const products = [];

          totalQuery.forEach((doc) => products.push(doc.data()));

          resolve(products);
        }
      } catch (e) {
        if (didTimeout) return;
        toast.error(
          'Failed to fetch products: An error occured while trying to fetch products or there may be no product '
        );

        reject(':( Failed to fetch products.');
      }
    });
  };
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
