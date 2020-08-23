import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from 'lib/slices/counterSlice';
import liveUserSlice from 'lib/slices/liveUserSlice';
import {
  getFirebase,
  firebaseReducer,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase';
import { firestoreReducer, constants as rfConstants } from 'redux-firestore';

const extraArgument = {
  getFirebase,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        // just ignore every redux-firebase and react-redux-firebase action type
        ...Object.keys(rfConstants.actionTypes).map(
          (type) => `${rfConstants.actionsPrefix}/${type}`
        ),
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`
        ),
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument,
    },
  }),
];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    liveUser: liveUserSlice,
  },
  middleware,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
