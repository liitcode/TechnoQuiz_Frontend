/* eslint-disable no-unused-vars */
import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
  CATEGORY_FECTH_SUCCESS,
  CATEGORY_FECTH_FAIL,
} from '../actions/actionType';

const initialState = {
  isTypeSelectionModalOpen: false,
  category: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_TYPE_SELECTION_MODAL:
      return {
        ...state,
        isTypeSelectionModalOpen: true,
        categoryName: payload.categoryName,
        categoryId: payload.categoryId,
      };

    case CLOSE_TYPE_SELECTION_MODAL:
      return { ...state, isTypeSelectionModalOpen: false };

    case CATEGORY_FECTH_SUCCESS:
      return {
        ...state,
        category: payload.category,
      };
    case CATEGORY_FECTH_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
