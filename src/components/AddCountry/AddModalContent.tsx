import { ReactNode } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  min-width: 300px;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
`;

const Header = styled.h1``;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

interface IAddModalContentProps {
  title: ReactNode;
  content: ReactNode;
}

export const AddModalContent = ({ title, content }: IAddModalContentProps) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content>{content}</Content>
    </Wrapper>
  );
};
