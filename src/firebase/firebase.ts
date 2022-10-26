import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  CollectionReference,
  DocumentData,
  setDoc,
  doc,
  addDoc,
} from 'firebase/firestore';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { toast } from 'react-hot-toast';
import { IProductRes } from '@/types/products.interface';
import { Fuego } from 'swr-firestore-v9';
import { IUser, IUserProfile } from '@/types/auth.interface';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
  databaseURL: `${import.meta.env.VITE_DATABASE_URL}`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_MSG_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_ID}`,
};

class Firebase {
  app: FirebaseApp;
  db: Firestore;
  auth: Auth;
  storage: FirebaseStorage;
  googleAuthProvider: GoogleAuthProvider;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }
  createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(this.db, collectionName) as CollectionReference<T>;
  };

  createAccount = (email: string, password: string) =>
    createUserWithEmailAndPassword(this.auth, email, password);
  signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(this.auth, email, password);
  signOut = () => signOut(this.auth);
  signInWithGoogle = () => signInWithPopup(this.auth, this.googleAuthProvider);
  addUser = (id: string, user: IUserProfile) => {
    const userCol = this.createCollection<IUserProfile>('users');
    addDoc(userCol, user);
  };

  getProducts = () => {
    const collectionRef = this.createCollection<IProductRes>('products');
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
          const products: IProductRes[] = [];

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

export const fuego = new Fuego(firebaseConfig);

const firebaseInstance = new Firebase();

export default firebaseInstance;
