/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';
import { openTypeSelectionModal } from '../../../../Redux/actions/actionCreators/category';
import styles from './CategoryCard.module.scss';

function CategoryCard({ categoryName, categoryId, categoryIcon }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const dispatch = useDispatch();

  return (
    <motion.div
      onClick={() => dispatch(openTypeSelectionModal(categoryName, categoryId))}
      className={styles.card}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div className={styles.card__inner}>
        <div className={styles.card__front}>
          <div
            className={styles.card__front__image}
            style={{
              background: randomColor({
                luminosity: 'dark',
                format: 'rgba',
                alpha: 0.5,
              }),
            }}
          >
            <div className={styles.card__icon}>
              <img
                className={styles.card__img}
                src={categoryIcon}
                alt={categoryName}
              />
              <h1 className={styles.card__title}>{categoryName}</h1>
            </div>
          </div>
        </div>
        <div className={styles.card__back}>
          <h1 className={styles.card__back__container}>
            click here to take a quiz on <br />
            <strong>
              <em style={{ fontSize: '1.5rem' }}>{categoryName}</em>
            </strong>
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
