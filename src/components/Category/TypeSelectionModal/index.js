import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeTypeSelectionModal } from '../../../Redux/actions/actionCreators/category';
// import { submitTypeSelectionModal } from '../../../Redux/actions/actionCreators/quiz';
import Modal from '../../UI/Modal';

function TypeSelectionModal() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { isTypeSelectionModalOpen } = useSelector((state) => state.category);
  return (
    <Modal
      isModalOpen={isTypeSelectionModalOpen}
      closeModalHandlder={dispatch(() => closeTypeSelectionModal())}
    >
      {category}
      <div>Difficulty Selection</div>
      <div>MOde selection</div>
      {/* <button
        type="submit"
        onClick={() => dispatch(submitTypeSelectionModal())}
      >
        submit
      </button> */}
      <button type="submit">submit</button>
    </Modal>
  );
}

export default TypeSelectionModal;
