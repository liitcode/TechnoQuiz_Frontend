import {
  OPEN_TYPE_SELECTION_MODAL,
  CLOSE_TYPE_SELECTION_MODAL,
  CATEGORY_FECTH_SUCCESS,
  CATEGORY_FECTH_FAIL,
  SET_MESSAGE
} from '../actionType';
import Category from '../../services/category.service';

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


export const fetchCategory = () => (dispatch) => 
  Category.then(
    (result) => {
      dispatch({
        type : CATEGORY_FECTH_SUCCESS,
        payload : { category : result.data },
      });
      return Promise.resolve();
    },
    (error) =>{
      const message = error.toString();
      dispatch({
        type: CATEGORY_FECTH_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
    
  )
