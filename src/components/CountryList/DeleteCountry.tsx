import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';

interface IDeleteCountryFormProps {
  // 삭제하고자 하는 id 값 props로 가져옴.
  id: number;
  nationName: string;
  continentName: string;
}

export const DeleteCountry = ({
  id,
  nationName,
  continentName,
}: IDeleteCountryFormProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onRemove = (id: number) => {};

  return (
    <>
      <ButtonIconStyle>
        <DeleteIcon onClick={() => setOpenModal((openModal) => !openModal)} />
      </ButtonIconStyle>

      <Modal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <ModalContent
          title=""
          content={
            <>
              <DeleteContent>
                <strong>
                  {nationName}, {continentName}
                </strong>{' '}
                를 삭제하시겠습니까?
                <br />
                삭제된 이후 되돌릴 수 없습니다.
              </DeleteContent>
              <DeleteButton onClick={() => onRemove}>삭제</DeleteButton>
            </>
          }
          onClose={() => setOpenModal((openModal) => !openModal)}
        />
      </Modal>
    </>
  );
};

const ButtonIconStyle = styled.span`
  padding: 5px;
`;

const DeleteContent = styled.div`
  margin-top: 60px;
  font-size: 13pt;
  text-align: center;
`;

const DeleteButton = styled.button`
  margin-top: 50px;
`;