import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@material-ui/icons/Close';

interface IAddModalContentProps {
  title: ReactNode;
  content: ReactNode;
}

// Modal 창 open 시 title, content
export const AddModalContent = ({ title, content }: IAddModalContentProps) => {
  // closeIcon 클릭 시 modal close
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    if (
      window.confirm(
        '등록을 취소하시겠습니까?' +
          '\n' +
          '등록을 계속 진행하시려면 취소 버튼을 눌러주시기 바랍니다.'
      )
    ) {
      // $jquery
      // modal 창 닫기 구현.
    } else {
      return;
    }
  };
  return (
    <Wrapper>
      <Header>{title}</Header>

      <CloseButton>
        <CloseIcon onClick={modalClose} />
      </CloseButton>

      <Content>{content}</Content>

      {/* 등록 post api 연결. */}
      <SubmitButton>등록</SubmitButton>
    </Wrapper>
  );
};

// 전체 Modal 창
const Wrapper = styled.div`
  min-width: 400px;
  min-height: 400px;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
`;

// Modal title
const Header = styled.span`
  font-size: 20pt;
`;

// modal close button
const CloseButton = styled.span`
  cursor: pointer;
  float: right;
  &: hover,
  &:active {
    color: lightgray;
  }
`;

// Modal content
const Content = styled.div`
  width: 100%;
  height: 100%;
`;

// addCountry submit button
const SubmitButton = styled.button`
  min-width: 80px;
  min-height: 30px;
  border: 0;
  border-radius: 5px;
  background-color: pink;
  font-size: 12pt;
  color: white;
  cursor: pointer;
`;
