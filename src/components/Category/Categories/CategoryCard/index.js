/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openTypeSelectionModal } from '../../../../Redux/actions/actionCreators/category';

import styles from './CategoryCard.module.scss';

function CategoryCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // dispatch(openTypeSelectionModal)

  const dispatch = useDispatch();

  return (
    <motion.div
      onClick={() => dispatch(openTypeSelectionModal('JAVASCRIPT'))}
      className={styles.card}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div className={styles.card__inner}>
        <div className={styles.card__front}>
          <div className={styles.card__front__image} />
        </div>
        <div className={styles.card__back}>
          <h1>Click here to take quiz on PYTHON</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
