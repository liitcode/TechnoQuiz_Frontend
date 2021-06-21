import axios from "axios";
import { leaderBoardUrl } from "./apiUrl";

const LeaderBoard = axios.get(leaderBoardUrl);

export default LeaderBoard;