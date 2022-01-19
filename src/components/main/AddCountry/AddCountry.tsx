import { useState } from 'react';
import styled from '@emotion/styled';
import NationForm from 'components/common/NationForm';

export const AddCountry = () => {
  // country 등록 post
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenModal((openModal) => !openModal)}>
        ADD COUNTRY
      </Button>
      {openModal && (
        <NationForm isOpenModal={openModal} setIsOpenModal={setOpenModal} />
      )}
    </>
  );
};

const Button = styled.div`
  border: 0;
  border-radius: 24px;
  min-width: 50vw;
  min-height: 8vw;
  background-color: #f7f5f5;
  color: #746f6f;
  font-size: 3.5vw;
  text-shadow: 2px 2px 2px #e2e0e0;
  text-align: center;
  line-height: 8vw;
  letter-spacing: 5px;
  transition: 0.3s;
  -webkit-appearance: none;
  cursor: pointer;

  &:hover {
    background-color: #f7f5f5;
    letter-spacing: 3px;
    transition: 0.3s;
    text-shadow: 3px 3px 3px #aca9a9 inset;
    box-shadow: 5px 5px 5px #c5c5c5 inset, 5px 5px 5px #c5c5c5 inset;
  }
  &:active {
    margin-left: 5px;
    margin-top: 5px;
    transition-duration: 0.3s;
    box-shadow: 5px 5px 5px #c5c5c5 inset, 5px 5px 5px #c5c5c5 inset;
  }
`;
