import { LEADERBOARD_FETCH_SUCCESS, LEADERBOARD_FETCH_FAIL, SET_MESSAGE } from '../actionType';
import LeaderBoard from '../../services/leaderboard.service';

export const fetchLeaderBoard = () => (dispatch) => 
    LeaderBoard.then(
        (result) => {
            setTimeout(() => {
                dispatch({
                    type :  LEADERBOARD_FETCH_SUCCESS,
                    payload : result.data,     
                })
            }, 1000);
            return Promise.resolve();
        },
        (error) => {
            const message = error.toString();
            dispatch({
                type: LEADERBOARD_FETCH_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
