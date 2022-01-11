import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import useNations from 'hooks/api/useNations';

interface ICountryFormProps {
  id: number;
  putImageUrl: string;
  putNationName: string;
  putContinentName: string;
  putIntroduce: string;
  putQuarantinePolicy: string;
}

export const EditCountry = ({
  id,
  putImageUrl,
  putNationName,
  putContinentName,
  putIntroduce,
  putQuarantinePolicy,
}: ICountryFormProps) => {
  // 해당 id country put(수정)
  const { updateNation } = useNations();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageRecord, setImageRecord] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(putImageUrl);
  const formData = new FormData();

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

    // form data input
    formData.append('imageUrl', targetImage);
    // formData 객체에서 지정된 키와 연관된 모든 값을 반환
    console.log(formData.getAll('imageUrl'));
    console.log(targetImage);

    reader.onloadend = () => {
      // console.log(reader.result);
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(targetImage as Blob);
  };

  // 해당 id data 기존 값으로 초기화
  const [form, setForm] = useState({
    id: id,
    nationName: putNationName,
    continentName: putContinentName,
    introduce: putIntroduce,
    quarantinePolicy: putQuarantinePolicy,
  });
  const { nationName, continentName, introduce, quarantinePolicy } = form;

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

    if (window.confirm('해당 국가를 수정하시겠습니까?')) {
      if (imageRecord !== null) {
        updateNation({ ...form, image: imageRecord });
      }

      // 수정된 값으로 초기화
      setImageRecord(null);
      setImagePreview(putImageUrl);
      setForm({
        id: id,
        nationName: putNationName,
        continentName: putContinentName,
        introduce: putIntroduce,
        quarantinePolicy: putQuarantinePolicy,
      });
    }
    return;
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
                  name="continentName"
                  value={continentName}
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
                  name="nationName"
                  value={nationName}
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
                  name="quarantinePolicy"
                  value={quarantinePolicy}
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
const ImagePreview = styled.div``;

const EditInput = styled.input`
  margin: 5px;
`;

const EditTextArea = styled.textarea`
  width: 80%;
  margin-top: 5px;
  overflow: scroll;
`;

const EditButton = styled.button``;
