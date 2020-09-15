import create from 'zustand';
import firebase from 'firebase/clientApp';

const db = firebase.firestore();
const challengesRef = db.collection('challenges');
const liveSessionsRef = db.collection('liveSessions');

type State = {
  netId: string;
  setNetId: (netId: string) => void;
  saveResponse: (questionFullId: string, isSuccess: boolean) => void;
  resetCurrentPage: () => void;
};

const useLiveSessionStore = create<State>((set, get) => ({
  netId:
    typeof window !== 'undefined'
      ? localStorage.getItem('netId')
        ? localStorage.getItem('netId')
        : ''
      : '',
  setNetId: (netId) => {
    localStorage.setItem('netId', netId);

    set({ netId });
  },
  saveResponse: (questionFullId, isSuccess) => {
    const netId = get().netId;

    console.log(
      `afterSubmit, questionFullId=${questionFullId}, netId=${netId}`
    );

    challengesRef.doc(questionFullId).set(
      {
        attempts: {
          [netId]: {
            success: isSuccess,
          },
        },
      },
      { merge: true }
    );

    liveSessionsRef.doc('current').set(
      {
        [netId]: {
          [questionFullId]: {
            success: isSuccess,
          },
        },
      },
      { merge: true }
    );
  },
  // TODO: This method should be protected
  resetCurrentPage: () => {
    liveSessionsRef.doc('current').set({});
  },
  getCurrentPage: async () => {
    const currentDocument = await liveSessionsRef.doc('current').get();
  },
}));

export default useLiveSessionStore;
