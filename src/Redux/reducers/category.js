/* eslint-disable no-unused-vars */
import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
  CATEGORY_FECTH_SUCCESS,
  CATEGORY_FECTH_FAIL,
} from '../actions/actionType';

const initialState = {
  isTypeSelectionModalOpen: false,
  category : [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_TYPE_SELECTION_MODAL:
      return {
        ...initialState,
        isTypeSelectionModalOpen: true,
        categoryName: payload.categoryName,
        categoryId: payload.categoryId,
      };

    case CLOSE_TYPE_SELECTION_MODAL:
      return { ...initialState, isTypeSelectionModalOpen: false };

    case CATEGORY_FECTH_SUCCESS:
      return{
        ...initialState,
        category: payload.category,
      };  
      case CATEGORY_FECTH_FAIL:
        return{
          ...initialState,
        };   
    default:
      return state;
  }
}
