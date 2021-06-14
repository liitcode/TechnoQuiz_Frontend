/* eslint-disable no-console */
import axios from 'axios';

const API_URL =
  'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/quiz';
// const API_URL = 'http://localhost:8000/api/user/';

const quiz = (difficulty = 'M', category = '105') =>
  axios.post(
    `${API_URL}`,
    {
      difficulty,
      category,
    },
    {
      headers: {
        'Auth-Token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjBmNWFiNWVmZmExMDRkZWU5NzI5YSIsImlhdCI6MTYyMjIxMDAwM30.noIr5mdy7NcENraSOSQaXM2Zrf1lKx5K6q8OUFd7K58',
      },
    },
  );

export default { quiz };
