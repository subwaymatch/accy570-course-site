import create from 'zustand';
import firebase from 'firebase/clientApp';

type State = {
  db: firebase.firestore.Firestore;
  challengesRef: firebase.firestore.CollectionReference<
    firebase.firestore.DocumentData
  >;
};

const db = firebase.firestore();
const challengesRef = db.collection('challenges');

const useFirebaseStore = create<State>((set) => ({
  db,
  challengesRef,
}));

export default useFirebaseStore;
