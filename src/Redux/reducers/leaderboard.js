import { LEADERBOARD_FETCH_SUCCESS, LEADERBOARD_FETCH_FAIL } from '../actions/actionType';

const initialState = {
    leaders: [],
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LEADERBOARD_FETCH_SUCCESS:
          return {
            ...state,
           leaders : payload
          };
        case LEADERBOARD_FETCH_FAIL:
          return {
            ...state,
         };
         default :
         return state;
  }
}  