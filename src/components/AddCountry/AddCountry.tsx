import { useState } from 'react';
import { AddModal } from 'components/AddCountry/AddModal';
import { AddModalContent } from 'components/AddCountry/AddModalContent';

export const AddCountry = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenModal((openModal) => !openModal)}>
        Modal
      </button>
      <AddModal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <AddModalContent title="Modal" content="portal을 사용한 모달입니다." />
      </AddModal>
    </>
  );
};
