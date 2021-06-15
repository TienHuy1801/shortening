import { rootLinkSaga } from './link';
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    ...rootLinkSaga,
  ])
}