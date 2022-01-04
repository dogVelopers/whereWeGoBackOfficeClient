import { useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';

interface IAddCountryProps {
  onSubmit: (form: {
    name: string;
    image_url: string;
    nation_name: string;
    continent_name: string;
    introduce: string;
    quarantine_policy: string;
  }) => void;
}

export const AddCountry = ({ onSubmit }: IAddCountryProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: '',
    image_url: '',
    nation_name: '',
    continent_name: '',
    introduce: '',
    quarantine_policy: '',
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
      <Button onClick={() => setOpenModal((openModal) => !openModal)}>
        ADD COUNTRY
      </Button>

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
                <AddInput
                  type="file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
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
                <AddInput
                  type="text"
                  name="nation_name"
                  value={nation_name}
                  onChange={onChange}
                />{' '}
              </InputContainerStyle>

              <InputLabel>국가 소개</InputLabel>
              <InputContainerStyle>
                <AddTextArea
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
                <AddTextArea
                  name="quarantine_policy"
                  value={quarantine_policy}
                  onChange={onTextAreaChange}
                  placeholder="격리 정책을 입력하는 란입니다."
                  cols={40}
                  rows={8}
                />
              </InputContainerStyle>

              <AddButton type="submit">등록</AddButton>
            </form>
          }
          onClose={() => setOpenModal((openModal) => !openModal)}
        />
      </Modal>
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
  font-size: 25pt;
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

const InputLabel = styled.label`
  margin-left: 4vw;
`;
const InputContainerStyle = styled.div`
  margin-left: 4vw;
  margin-bottom: 1vw;
`;

const AddInput = styled.input`
  margin: 5px;
`;

const AddTextArea = styled.textarea`
  width: 80%;
  margin-top: 5px;
  overflow: scroll;
`;

const AddButton = styled.button``;
