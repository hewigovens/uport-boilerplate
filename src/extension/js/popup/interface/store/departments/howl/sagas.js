import {
  HOWL_HASH_DOM_REQUEST,
} from './actions'
import {
  howlHashDomSuccess,
  howlHashDomFailure,
} from './actions'

/*---*--- Hash Dom ---*---*/
function* hashDom({payload, metadata}) {
  try {
    const metadata ={}

  } catch(e) {

  }
}

export default function* hashRootSaga() {
  yield [
   takeEvery(HOWL_HASH_DOM_REQUEST, hashDom),
  ];
}