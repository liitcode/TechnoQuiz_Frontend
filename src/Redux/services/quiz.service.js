import axios from 'axios';
import authHeader from './auth-header';
import { quizUrl, scoreUrl } from './apiUrl';

const quiz = (difficulty, category) =>
  axios.post(
    quizUrl,
    {
      difficulty,
      category,
    },
    {
      headers: authHeader(),
    },
  );

const score = (difficulty, categoryId, userScore) =>
  axios.post(
    scoreUrl,
    {
      difficulty,
      category: categoryId,
      score: userScore,
    },
    {
      headers: authHeader(),
    },
  );

export default { quiz, score };
