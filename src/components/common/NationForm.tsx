import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { TextField, MenuItem } from '@material-ui/core';
import useNations from 'hooks/api/useNations';
import { Modal } from 'components/common/Modal';
import { ModalContent } from 'components/common/Modal/ModalContent';

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

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
          <FormContent>
            <FormLabel>국가 {isAddCountry ? '등록' : '수정'}</FormLabel>

            <InputContent>
              <Upload className="input-file-button" htmlFor="input-file">
                {isAddCountry ? 'Upload files' : 'Edit files'}
              </Upload>
              <input
                id="input-file"
                type="file"
                accept="image/*"
                name="imageUrl"
                onChange={onChangeFile}
                style={{ display: 'none' }}
              />
              {id === 0 && imageRecord === null ? (
                <></>
              ) : (
                <ImagePreview>
                  <img src={imagePreview} alt="posting preivew" width="400px" />
                </ImagePreview>
              )}
            </InputContent>
            <InputContent>
              <InputField
                select
                label="대륙명"
                variant="standard"
                name="continentNameForm"
                value={continentNameForm}
                onChange={onChange}
                size="small"
                inputProps={{ style: { fontSize: 15 } }}
              >
                <MenuItem value="">---선택---</MenuItem>
                <MenuItem value="유럽">유럽</MenuItem>
                <MenuItem value="아시아">아시아</MenuItem>
                <MenuItem value="아프리카">아프리카</MenuItem>
                <MenuItem value="아메리카">아메리카</MenuItem>
                <MenuItem value="오세아니아">오세아니아</MenuItem>
              </InputField>
            </InputContent>
            <InputContent>
              {continentNameForm === '' ? (
                <InputField label="국가명" disabled />
              ) : (
                <InputField
                  label="국가명"
                  variant="standard"
                  type="text"
                  name="nationNameForm"
                  value={nationNameForm}
                  onChange={onChange}
                  size="small"
                  inputProps={{ style: { fontSize: 15 } }}
                />
              )}
            </InputContent>
            <InputContent>
              <InputField
                label="국가소개"
                variant="standard"
                name="introduceForm"
                value={introduceForm}
                onChange={onTextAreaChange}
                inputProps={{ style: { fontSize: 15 } }}
                multiline
                rows={5}
                placeholder="소개글을 입력하는 란입니다."
              />
            </InputContent>
            <InputContent>
              <InputField
                label="격리정책"
                variant="standard"
                name="quarantinePolicyForm"
                value={quarantinePolicyForm}
                onChange={onTextAreaChange}
                inputProps={{ style: { fontSize: 15 } }}
                multiline
                rows={5}
                placeholder="격리 정책을 입력하는 란입니다."
              />
            </InputContent>
          </FormContent>

          <button type="submit">{isAddCountry ? '등록' : '수정'}</button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NationForm;

const FormContent = styled.div`
  margin-right: 2vw;
  margin-left: 2vw;
`;
const FormLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1vw;
  font-size: 15pt;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 2pt;
`;

const Upload = styled.label`
  padding: 3px 15px;
  border: 1px solid gray;
  border-radius: 4px;
  color: gray;
  cursor: pointer;
`;
const ImagePreview = styled.div`
  margin-top: 1vw;
`;
const InputContent = styled.div`
  margin-bottom: 0.6vw;
`;
const InputField = styled(TextField)({
  width: '100%',
  fontSize: '10pt',
  marginBottom: '1vw',
});
