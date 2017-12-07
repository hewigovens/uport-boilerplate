import {
HOWL_HASH_DOM_REQUEST,
HOWL_HASH_DOM_SUCCESS,
HOWL_HASH_DOM_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case HOWL_HASH_DOM_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case HOWL_HASH_DOM_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case HOWL_HASH_DOM_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


    default:
      return state
  }
}
  