import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import { INation } from 'types';
import useNations from 'hooks/api/useNations';

interface ICountryFormProps {
  onSubmit: (form: INation) => void;

  // 수정하고자 하는 id 값과 그에 해당하는 data props로 가져옴.
  id: number;
  imageUrl: string;
  nationName: string;
  continentName: string;
  introduceInfo: string;
  quarantinePolicy: string;
}

export const EditCountry = ({
  onSubmit,
  id,
  imageUrl,
  nationName,
  continentName,
  introduceInfo,
  quarantinePolicy,
}: ICountryFormProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // 해당 id put(수정)
  const { updateNation } = useNations();

  // textArea는 일부 값이 미리 채워져 있어야 함.
  const [form, setForm] = useState<INation>({
    id: id,
    image_url: '',
    nation_name: nationName,
    continent_name: continentName,
    introduce: introduceInfo,
    quarantine_policy: quarantinePolicy,
  });

  const {
    image_url,
    nation_name,
    continent_name,
    introduce,
    quarantine_policy,
  } = form;

  // text input type 지정
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // select box type 지정
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // textArea type 지정
  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      id: 0,
      image_url: '',
      nation_name: '',
      continent_name: '',
      introduce: '',
      quarantine_policy: '',
    });
  };

  return (
    <>
      <ButtonIconStyle>
        <EditIcon onClick={() => setOpenModal((openModal) => !openModal)} />
      </ButtonIconStyle>

      <Modal
        show={openModal}
        onClose={() => setOpenModal((openModal) => !openModal)}
      >
        <ModalContent
          title=""
          content={
            <form onSubmit={handleSubmit}>
              <InputLabel>이미지 업로드</InputLabel>
              <InputContainerStyle>
                <EditInput
                  type="file"
                  name="image_url"
                  value={image_url}
                  onChange={onChange}
                />
              </InputContainerStyle>

              <InputLabel>국가명</InputLabel>
              <InputContainerStyle>
                <select
                  name="continent_name"
                  value={continent_name}
                  onChange={onSelectChange}
                >
                  <option defaultValue="">---선택---</option>
                  <option value="유럽">유럽</option>
                  <option value="아시아">아시아</option>
                  <option value="아프리카">아프리카</option>
                  <option value="아메리카">아메리카</option>
                  <option value="오세아니아">오세아니아</option>
                </select>
                <EditInput
                  type="text"
                  name="nation_name"
                  value={nation_name}
                  onChange={onChange}
                />
              </InputContainerStyle>

              <InputLabel>국가 소개</InputLabel>
              <InputContainerStyle>
                <EditTextArea
                  name="introduce"
                  value={introduce}
                  onChange={onTextAreaChange}
                  placeholder="소개글을 입력하는 란입니다."
                  cols={40}
                  rows={8}
                />
              </InputContainerStyle>

              <InputLabel>격리 정책</InputLabel>
              <InputContainerStyle>
                <EditTextArea
                  name="quarantine_policy"
                  value={quarantine_policy}
                  onChange={onTextAreaChange}
                  placeholder="격리 정책을 입력하는 란입니다."
                  cols={40}
                  rows={8}
                />
              </InputContainerStyle>

              <EditButton type="submit">수정</EditButton>
            </form>
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

const InputLabel = styled.label`
  margin-left: 4vw;
`;
const InputContainerStyle = styled.div`
  margin-left: 4vw;
  margin-bottom: 1vw;
`;

const EditInput = styled.input`
  margin: 5px;
`;

const EditTextArea = styled.textarea`
  width: 80%;
  margin-top: 5px;
  overflow: scroll;
`;

const EditButton = styled.button``;
