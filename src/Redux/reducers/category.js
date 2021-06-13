/* eslint-disable no-unused-vars */
import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
} from '../actions/actionType';

const initialState = {
  isTypeSelectionModalOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_TYPE_SELECTION_MODAL:
      return {
        ...initialState,
        isTypeSelectionModalOpen: true,
        category: payload,
      };

    case CLOSE_TYPE_SELECTION_MODAL:
      return { ...initialState, isTypeSelectionModalOpen: false };
    default:
      return state;
  }
}
