import React, { useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  useEffect(async () => {
    const result = await axios.post(
      'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/quiz',
      {
        difficulty: 'E',
        Category: '101',
      },
      {
        headers: {
          'auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjBmNWFiNWVmZmExMDRkZWU5NzI5YSIsImlhdCI6MTYyMjIxMDAwM30.noIr5mdy7NcENraSOSQaXM2Zrf1lKx5K6q8OUFd7K58',
        },
      },
    );
    console.log(result);
  }, []);
  return <div>Hello</div>;
}

export default Quiz;
