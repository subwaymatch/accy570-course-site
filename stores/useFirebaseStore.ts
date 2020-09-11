import create from 'zustand';
import firebase from 'firebase/clientApp';

type State = {
  db: firebase.firestore.Firestore;
  challengesRef: firebase.firestore.CollectionReference<
    firebase.firestore.DocumentData
  >;
  markSuccess: (netId: string, questionFullId: string) => void;
};

const db = firebase.firestore();
const challengesRef = db.collection('challenges');

const useFirebaseStore = create<State>((set) => ({
  db,
  challengesRef,
  markSuccess: async (netId, questionFullId) => {
    console.log(`markSuccesss(netId=${netId}, fullId=${questionFullId})`);

    challengesRef.doc(questionFullId).set(
      {
        attempts: {
          [netId]: {
            success: true,
          },
        },
      },
      { merge: true }
    );
  },
}));

export default useFirebaseStore;
