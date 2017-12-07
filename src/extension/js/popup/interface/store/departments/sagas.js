import { all } from 'redux-saga/effects';

import authentication from './authentication/sagas'
import database from './database/sagas'
import firestore from './firestore/sagas'

export default function* rootSaga() {
  yield all([
    authentication(),
    database(),
    firestore(),
  ]);
}