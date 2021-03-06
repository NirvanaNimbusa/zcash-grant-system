enum CCRTypes {
  UPDATE_CCR_FORM = 'UPDATE_CCR_FORM',

  INITIALIZE_CCR_FORM = 'INITIALIZE_CCR_FORM',
  INITIALIZE_CCR_FORM_PENDING = 'INITIALIZE_CCR_FORM_PENDING',
  INITIALIZE_CCR_FORM_FULFILLED = 'INITIALIZE_CCR_FORM_FULFILLED',
  INITIALIZE_CCR_FORM_REJECTED = 'INITIALIZE_CCR_FORM_REJECTED',

  SAVE_CCR_DRAFT = 'SAVE_CCR_DRAFT',
  SAVE_CCR_DRAFT_PENDING = 'SAVE_CCR_DRAFT_PENDING',
  SAVE_CCR_DRAFT_FULFILLED = 'SAVE_CCR_DRAFT_FULFILLED',
  SAVE_CCR_DRAFT_REJECTED = 'SAVE_CCR_DRAFT_REJECTED',

  FETCH_CCR_DRAFTS = 'FETCH_CCR_DRAFTS',
  FETCH_CCR_DRAFTS_PENDING = 'FETCH_CCR_DRAFTS_PENDING',
  FETCH_CCR_DRAFTS_FULFILLED = 'FETCH_CCR_DRAFTS_FULFILLED',
  FETCH_CCR_DRAFTS_REJECTED = 'FETCH_CCR_DRAFTS_REJECTED',

  CREATE_CCR_DRAFT = 'CREATE_CCR_DRAFT',
  CREATE_CCR_DRAFT_PENDING = 'CREATE_CCR_DRAFT_PENDING',
  CREATE_CCR_DRAFT_FULFILLED = 'CREATE_CCR_DRAFT_FULFILLED',
  CREATE_CCR_DRAFT_REJECTED = 'CREATE_CCR_DRAFT_REJECTED',

  FETCH_AND_CREATE_CCR_DRAFTS = 'FETCH_AND_CREATE_CCR_DRAFTS',

  DELETE_CCR_DRAFT = 'DELETE_CCR_DRAFT',
  DELETE_CCR_DRAFT_PENDING = 'DELETE_CCR_DRAFT_PENDING',
  DELETE_CCR_DRAFT_FULFILLED = 'DELETE_CCR_DRAFT_FULFILLED',
  DELETE_CCR_DRAFT_REJECTED = 'DELETE_CCR_DRAFT_REJECTED',

  SUBMIT_CCR = 'SUBMIT_CCR',
  SUBMIT_CCR_PENDING = 'SUBMIT_CCR_PENDING',
  SUBMIT_CCR_FULFILLED = 'SUBMIT_CCR_FULFILLED',
  SUBMIT_CCR_REJECTED = 'SUBMIT_CCR_REJECTED',
}
export default CCRTypes;
