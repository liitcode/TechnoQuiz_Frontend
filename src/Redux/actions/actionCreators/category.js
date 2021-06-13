import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
} from '../actionType';

export const openTypeSelectionModal = (category) => ({
  type: OPEN_TYPE_SELECTION_MODAL,
  payload: category,
});

export const closeTypeSelectionModal = () => ({
  type: CLOSE_TYPE_SELECTION_MODAL,
});
