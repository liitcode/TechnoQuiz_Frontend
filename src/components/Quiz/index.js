import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import da from './quizData.json';
import styles from './Quiz.module.scss';
import { Button } from '../UI/Button';

function Quiz() {
  const [data, setData] = useState(da);

  useEffect(async () => {
    const result = await axios.post(
      'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/',
      {
        difficulty: 'M',
        category: '105',
      },
      {
        headers: {
          'Auth-Token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjBmNWFiNWVmZmExMDRkZWU5NzI5YSIsImlhdCI6MTYyMjIxMDAwM30.noIr5mdy7NcENraSOSQaXM2Zrf1lKx5K6q8OUFd7K58',
        },
      },
    );
    setData(result.data.data);
  }, []);
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) return <Redirect to="/signin" />;
  return (
    <div className={styles.quiz}>
      <div className={styles.quiz__container}>
        <div className={styles.quiz__container__heading}>
          CATEGORY: JAVASCRIPT
        </div>
        <div className={styles.quiz__container__currentquestion}>Q1/10</div>
        {data.length > 0 && (
          <div className={styles.quiz__container__question}>
            <div className={styles.question}>{data[0].question}</div>
            {data[0].answers.answer_a && (
              <div className={styles.option}>
                <span className="bold">{'A.  '}</span>
                {data[0].answers.answer_a}
              </div>
            )}
            {data[0].answers.answer_b && (
              <div className={styles.option}>
                <span className="bold">{'B.    '}</span>
                {data[0].answers.answer_b}
              </div>
            )}
            {data[0].answers.answer_c && (
              <div className={styles.option}>
                <span className="bold">{'C.    '}</span>
                {data[0].answers.answer_c}
              </div>
            )}
            {data[0].answers.answer_d && (
              <div className={styles.option}>
                <span className="bold">{'D.    '}</span>
                {data[0].answers.answer_d}
              </div>
            )}
          </div>
        )}
        <div className={styles.quiz__nextbutton}>
          <Button buttonSize='btn--large' buttonColor='red'>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
