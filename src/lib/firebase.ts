import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import firebaseConfigJson from '../../firebase-applet-config.json';

const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || firebaseConfigJson.apiKey,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigJson.authDomain,
  projectId: env.VITE_FIREBASE_PROJECT_ID || firebaseConfigJson.projectId,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfigJson.storageBucket,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfigJson.messagingSenderId,
  appId: env.VITE_FIREBASE_APP_ID || firebaseConfigJson.appId,
};

const databaseId = env.VITE_FIREBASE_DATABASE_ID || firebaseConfigJson.firestoreDatabaseId;

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = databaseId 
  ? getFirestore(app, databaseId) 
  : getFirestore(app);
export const auth = getAuth(app);

export { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
export type { User };
