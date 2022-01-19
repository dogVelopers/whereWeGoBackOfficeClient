import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import useNations from 'hooks/api/useNations';
import { Modal } from 'components/Modal';
import { ModalContent } from 'components/Modal/ModalContent';

interface INationFormProps {
  id?: number;
  imageUrl?: string;
  nationName?: string;
  continentName?: string;
  introduce?: string;
  quarantinePolicy?: string;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const NationForm = ({
  id = 0,
  imageUrl = '',
  nationName = '',
  continentName = '',
  introduce = '',
  quarantinePolicy = '',
  isOpenModal,
  setIsOpenModal,
}: INationFormProps) => {
  const { postNation, updateNation } = useNations();

  const [imageRecord, setImageRecord] = useState<File | null>(null); // also tried <string | Blob>
  const [imagePreview, setImagePreview] = useState<string>(imageUrl); // also tried <string | Blob>

  const [form, setForm] = useState({
    nationNameForm: nationName,
    continentNameForm: continentName,
    introduceForm: introduce,
    quarantinePolicyForm: quarantinePolicy,
  });
  const {
    nationNameForm,
    continentNameForm,
    introduceForm,
    quarantinePolicyForm,
  } = form;

  const isAddCountry = id === 0;

  const onChangeFile = function (e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

    // 이미지 파일이 존재할 경우 fileList[0]으로 값 변경.
    if (!files) {
      alert('이미지 파일을 선택해주세요');
      return;
    }
    setImageRecord(files[0]);

    const targetImage = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(targetImage as Blob);
  };

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
    console.table(form);
    console.log(imageRecord);

    // null 값이 update 될 때의 문제 발생.
    if (imageRecord !== null) {
      if (isAddCountry) {
        if (window.confirm('해당 국가를 등록하시겠습니까?')) {
          postNation({
            nationName: nationNameForm,
            continentName: continentNameForm,
            introduce: introduceForm,
            quarantinePolicy: quarantinePolicyForm,
            image: imageRecord,
          });
        }
      } else {
        if (window.confirm('해당 국가를 수정하시겠습니까?')) {
          updateNation({
            id: id,
            nationName: nationNameForm,
            continentName: continentNameForm,
            introduce: introduceForm,
            quarantinePolicy: quarantinePolicyForm,
            image: imageRecord,
          });
        }
      }
    }
  };

  const onCloseModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Modal show={isOpenModal} onClose={onCloseModal}>
      <ModalContent title="" onClose={onCloseModal}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <InputLabel>이미지 업로드</InputLabel>
          <InputContainerStyle>
            <InputForm
              type="file"
              accept="image/*"
              name="imageUrl"
              onChange={onChangeFile}
            />

            {/* 이미지가 변경 시, 기존 imageUrl -> imagePreview로 대체. */}
            <ImagePreview>
              <img src={imagePreview} alt="posting preivew" width="300px" />
            </ImagePreview>
          </InputContainerStyle>
          <InputLabel>국가명</InputLabel>
          <InputContainerStyle>
            <select
              name="continentNameForm"
              value={continentNameForm}
              onChange={onSelectChange}
            >
              <option value="">---선택---</option>
              <option value="유럽">유럽</option>
              <option value="아시아">아시아</option>
              <option value="아프리카">아프리카</option>
              <option value="아메리카">아메리카</option>
              <option value="오세아니아">오세아니아</option>
            </select>
            <InputForm
              type="text"
              name="nationNameForm"
              value={nationNameForm}
              onChange={onChange}
            />{' '}
          </InputContainerStyle>
          <InputLabel>국가 소개</InputLabel>
          <InputContainerStyle>
            <InputTextArea
              name="introduceForm"
              value={introduceForm}
              onChange={onTextAreaChange}
              placeholder="소개글을 입력하는 란입니다."
              cols={40}
              rows={8}
            />
          </InputContainerStyle>
          <InputLabel>격리 정책</InputLabel>
          <InputContainerStyle>
            <InputTextArea
              name="quarantinePolicyForm"
              value={quarantinePolicyForm}
              onChange={onTextAreaChange}
              placeholder="격리 정책을 입력하는 란입니다."
              cols={40}
              rows={8}
            />
          </InputContainerStyle>
          <SubmitButton type="submit">
            {isAddCountry ? '등록' : '수정'}
          </SubmitButton>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NationForm;

const InputLabel = styled.label`
  margin-left: 4vw;
`;
const InputContainerStyle = styled.div`
  margin-left: 4vw;
  margin-bottom: 1vw;
`;
const ImagePreview = styled.div``;

const InputForm = styled.input`
  margin: 5px;
`;

const InputTextArea = styled.textarea`
  width: 80%;
  margin-top: 5px;
  overflow: scroll;
`;

const SubmitButton = styled.button``;
