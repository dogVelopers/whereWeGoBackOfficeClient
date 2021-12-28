import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import styled from '@emotion/styled';
import { AddModal } from 'components/AddCountry/AddModal';
import { AddModalContent } from 'components/AddCountry/AddModalContent';

export const AddCountry = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenModal((openModal) => !openModal)}>
        Add Country
      </Button>

      <AddModal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <AddModalContent
          title="국가 등록"
          content="content에는 국가 등록 정보가 들어갈 예정입니다."
        />
      </AddModal>
    </>
  );
};

const Button = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 5px;
  min-width: 50vw;
  min-height: 8vw;
  background-color: pink;
  color: white;
  font-size: 25pt;
  letter-spacing: 5px;
  -webkit-appearance: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: pink;
    font-size: 28pt;
    font-weight: 600;
    transition: 250ms;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:after {
    display: block;
    content: '';
    margin-top: 2.5vw;
    margin-bottom: -2.5vw;
    border-bottom: solid 3px pink;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
`;
