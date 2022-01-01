import { useState } from 'react';
import styled from '@emotion/styled';
import { AddModal } from 'components/Modal/Modal';
import { AddModalContent } from 'components/Modal/ModalContent';

export const AddCountry = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenModal((openModal) => !openModal)}>
        ADD COUNTRY
      </Button>

      <AddModal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <AddModalContent
          title="국가 등록"
          content={
            <form>
              <ContentSub>
                <label>이미지 업로드: </label>
                <input type="file"></input>
              </ContentSub>

              <ContentSub>
                <label>국가name1: </label>
                <select name="continent_name">
                  <option value="" selected>
                    ---선택---
                  </option>
                  <option value="유럽">유럽</option>
                  <option value="아시아">아시아</option>
                  <option value="아프리카">아프리카</option>
                  <option value="아메리카">아메리카</option>
                  <option value="오세아니아">오세아니아</option>
                </select>
              </ContentSub>

              <ContentSub>
                <label>국가name2: </label>
                <input type="text"></input>
              </ContentSub>

              <ContentSub>
                <label>국가 소개: </label>
                <textarea cols={50} rows={10}></textarea>
              </ContentSub>

              <ContentSub>
                <label>격리 정책: </label>
                <textarea cols={50} rows={10}></textarea>
              </ContentSub>
            </form>
          }
          onClose={() => setOpenModal((openModal) => !openModal)}
        />
      </AddModal>
    </>
  );
};

const Button = styled.button`
  border: 3px solid #c7c7c7;
  border-radius: 24px;
  padding: 5px;
  min-width: 50vw;
  min-height: 8vw;
  background-color: white;
  color: darkgray;
  font-size: 25pt;
  font-weight: 500;
  text-shadow: 2px 2px 2px #e2e0e0;
  letter-spacing: 3px;
  transition: 0.3s;
  -webkit-appearance: none;
  cursor: pointer;

  &:hover {
    background-color: #e4e3e3;
    color: white;
    letter-spacing: 5px;
    transition: 0.3s;
    text-shadow: 3px 3px 3px #aca9a9;
    box-shadow: 0px 0px 5px #bebaba inset, 0px 0px 3px #c8c8c8;
  }
  &:active {
    margin-left: 5px;
    margin-top: 5px;
    transition-duration: 0.3s;
    box-shadow: 0px 0px 5px #bebaba inset, 0px 0px 3px #d6d5d5;
  }
`;

const ContentSub = styled.div``;
