import { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import NationForm from 'components/common/NationForm';

export const AddCountry = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <ButtonWrapper
        variant="outlined"
        onClick={() => setOpenModal((openModal) => !openModal)}
      >
        ADD COUNTRY
      </ButtonWrapper>
      {openModal && (
        <NationForm isOpenModal={openModal} setIsOpenModal={setOpenModal} />
      )}
    </>
  );
};

const ButtonWrapper = styled(Button)({
  width: '40vw',
  height: '5vw',
  borderRadius: '15px',
  background: 'none',
  color: '#746f6f',
  fontSize: '2vw',
  textShadow: '2px 2px 2px #e2e0e0',
  lineHeight: '6vw',
  letterSpacing: '5px',
  cursor: 'pointer',
});
