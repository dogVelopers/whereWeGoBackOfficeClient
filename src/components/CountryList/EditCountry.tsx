import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';

interface ICountryFormProps {
  onSubmit: (form: {
    name: string;
    image_url: string;
    nation_name: string;
    continent_name: string;
    introduce: string;
    quarantine_policy: string;
  }) => void;

  // 수정하고자 하는 id 값과 그에 해당하는 data props로 가져옴.
  id: number;
  // imageUrl: string;
  nationName: string;
  continentName: string;
  introduceInfo: string;
  quarantinePolicy: string;
}

export const EditCountry = ({
  onSubmit,
  id,
  nationName,
  continentName,
  introduceInfo,
  quarantinePolicy,
}: ICountryFormProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // textArea는 일부 값이 미리 채워져 있어야 함.
  const [form, setForm] = useState({
    name: '',
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
      [image_url]: value,
      [nation_name]: value,
    });
  };

  // select box type 지정
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      [continent_name]: value,
    });
  };

  // textArea type 지정
  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      [introduce]: value,
      [quarantine_policy]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
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
                  <option value="" selected>
                    ---선택---
                  </option>
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
                />{' '}
              </InputContainerStyle>

              <InputLabel>국가 소개</InputLabel>
              <InputContainerStyle>
                <EditTextArea
                  name="introduce"
                  value={introduce}
                  onChange={onTextAreaChange}
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
                  cols={40}
                  rows={8}
                />
              </InputContainerStyle>

              <EditButton>수정</EditButton>
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

const EditButton = styled.div`
  bottom: 0px;
  margin-left: 4vw;
  width: 70%;
  height: 30px;
  line-height: 30px;
  background-color: black;
  border: 0;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 5px;
  font-size: 12pt;
  color: white;
  cursor: pointer;
`;
