export const HOWL_HASH_DOM_REQUEST = 'HOWL_HASH_DOM_REQUEST'
export const HOWL_HASH_DOM_SUCCESS = 'HOWL_HASH_DOM_SUCCESS'
export const HOWL_HASH_DOM_FAILURE = 'HOWL_HASH_DOM_FAILURE'
// howl :: HashDom |  HOWL_HASH_DOM
export const howlHashDomRequest = ({payload, metadata}) => ({
  type: HOWL_HASH_DOM_REQUEST,
  payload,
  metadata
})

export const howlHashDomSuccess = ({payload, metadata}) => ({
  type: HOWL_HASH_DOM_SUCCESS,
  payload,
  metadata
})

export const howlHashDomFailure = ({payload, metadata}) => ({
  type: HOWL_HASH_DOM_FAILURE,
  payload,
  metadata
})