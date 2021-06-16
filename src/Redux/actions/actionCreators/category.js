import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
} from '../actionType';

export const openTypeSelectionModal = (categoryName, categoryId) => ({
  type: OPEN_TYPE_SELECTION_MODAL,
  payload: {
    categoryName,
    categoryId,
  },
});

export const closeTypeSelectionModal = () => ({
  type: CLOSE_TYPE_SELECTION_MODAL,
});
