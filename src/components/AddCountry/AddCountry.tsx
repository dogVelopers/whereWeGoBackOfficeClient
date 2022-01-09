import { useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import useNations from 'hooks/api/useNations';

export const AddCountry = () => {
  // country 등록 post
  const { postNation } = useNations();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageRecord, setImageRecord] = useState<File | null>(null); // also tried <string | Blob>
  const [imagePreview, setImagePreview] = useState<string>(''); // also tried <string | Blob>

  const onChangeFile = function (e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

    // 이미지 파일이 존재할 경우 fileList[0]으로 값 변경.
    if (!files) return;
    setImageRecord(files[0]);

    const targetImage = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(targetImage as Blob);
  };

  const [form, setForm] = useState({
    nationName: '',
    continentName: '',
    introduce: '',
    quarantinePolicy: '',
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
    console.log(imageRecord);
    console.log(form);

    // 창닫기 버튼 클릭 시에도 초기화 필요.
    // image_url !== null 일 경우에만 postNations 실행.
    if (window.confirm('해당 국가를 등록하시겠습니까?')) {
      if (imageRecord !== null) {
        postNation({ ...form, imageRecord });
      }

      // 초기화
      setImageRecord(null);
      setForm({
        nationName: '',
        continentName: '',
        introduce: '',
        quarantinePolicy: '',
      });
    }
    return;
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
                  accept="image/*"
                  name="imageUrl"
                  onChange={onChangeFile}
                />

                {/* 이미지가 변경 시, 기존 imageUrl -> imagePreview로 대체. */}
                <ImagePreview>
                  <img src={imagePreview} alt="img preivew" width="300px" />
                </ImagePreview>
              </InputContainerStyle>

              <InputLabel>국가명</InputLabel>
              <InputContainerStyle>
                <select
                  name="continentName"
                  value={continentName}
                  onChange={onSelectChange}
                >
                  <option value="">---선택---</option>
                  <option value="유럽">유럽</option>
                  <option value="아시아">아시아</option>
                  <option value="아프리카">아프리카</option>
                  <option value="아메리카">아메리카</option>
                  <option value="오세아니아">오세아니아</option>
                </select>
                <AddInput
                  type="text"
                  name="nationName"
                  value={nationName}
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
                  name="quarantinePolicy"
                  value={quarantinePolicy}
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

const InputLabel = styled.label`
  margin-left: 4vw;
`;
const InputContainerStyle = styled.div`
  margin-left: 4vw;
  margin-bottom: 1vw;
`;
const ImagePreview = styled.div``;

const AddInput = styled.input`
  margin: 5px;
`;

const AddTextArea = styled.textarea`
  width: 80%;
  margin-top: 5px;
  overflow: scroll;
`;

const AddButton = styled.button``;
