import { Dispatch } from 'redux';
import { ProposalDraft } from 'types';
// import { AppState } from 'store/reducers';
import types, { CreateDraftOptions } from './types';
import { putProposal, putProposalPublish } from 'api/api';

// type GetState = () => AppState;

export function initializeForm(proposalId: number) {
  return {
    type: types.INITIALIZE_FORM_PENDING,
    payload: proposalId,
  };
}

export function updateForm(form: Partial<ProposalDraft>) {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: types.UPDATE_FORM,
      payload: form,
    });
    dispatch(saveDraft());
  };
}

export function saveDraft() {
  return { type: types.SAVE_DRAFT_PENDING };
}

export function fetchDrafts() {
  return { type: types.FETCH_DRAFTS_PENDING };
}

export function createDraft(opts: CreateDraftOptions = {}) {
  return {
    type: types.CREATE_DRAFT_PENDING,
    payload: opts,
  };
}

export function deleteDraft(proposalId: number) {
  return {
    type: types.DELETE_DRAFT_PENDING,
    payload: proposalId,
  };
}

export function submitProposal(form: ProposalDraft) {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.SUBMIT_PROPOSAL_PENDING });
    try {
      await putProposal(form);
      const res = await putProposalPublish(form);
      dispatch({
        type: types.SUBMIT_PROPOSAL_FULFILLED,
        payload: res.data,
      });
    } catch(err) {
      dispatch({
        type: types.SUBMIT_PROPOSAL_REJECTED,
        payload: err.message || err.toString(),
        error: true,
      });
    }
  };
}
