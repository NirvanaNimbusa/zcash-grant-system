enum UsersActions {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_PENDING = 'FETCH_USER_PENDING',
  FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED',
  FETCH_USER_REJECTED = 'FETCH_USER_REJECTED',

  UPDATE_USER = 'UPDATE_USER',
  UPDATE_USER_PENDING = 'UPDATE_USER_PENDING',
  UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED',
  UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED',

  FETCH_USER_INVITES = 'FETCH_USER_INVITES',
  FETCH_USER_INVITES_PENDING = 'FETCH_USER_INVITES_PENDING',
  FETCH_USER_INVITES_FULFILLED = 'FETCH_USER_INVITES_FULFILLED',
  FETCH_USER_INVITES_REJECTED = 'FETCH_USER_INVITES_REJECTED',

  RESPOND_TO_INVITE = 'RESPOND_TO_INVITE',
  RESPOND_TO_INVITE_PENDING = 'RESPOND_TO_INVITE_PENDING',
  RESPOND_TO_INVITE_FULFILLED = 'RESPOND_TO_INVITE_FULFILLED',
  RESPOND_TO_INVITE_REJECTED = 'RESPOND_TO_INVITE_REJECTED',

  DELETE_CONTRIBUTION = 'DELETE_CONTRIBUTION',

  USER_DELETE_PROPOSAL = 'USER_DELETE_PROPOSAL',
  USER_DELETE_PROPOSAL_FULFILLED = 'USER_DELETE_PROPOSAL_FULFILLED',

  USER_PUBLISH_PROPOSAL = 'USER_PUBLISH_PROPOSAL',
  USER_PUBLISH_PROPOSAL_FULFILLED = 'USER_PUBLISH_PROPOSAL_FULFILLED',

  USER_DELETE_REQUEST = 'USER_DELETE_REQUEST',
  USER_DELETE_REQUEST_FULFILLED = 'USER_DELETE_REQUEST_FULFILLED',

  USER_PUBLISH_REQUEST = 'USER_PUBLISH_REQUEST',
  USER_PUBLISH_REQUEST_FULFILLED = 'USER_PUBLISH_REQUEST_FULFILLED',
}

export default UsersActions;
