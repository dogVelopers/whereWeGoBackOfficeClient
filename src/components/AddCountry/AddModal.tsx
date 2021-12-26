import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ModalPortalWrap } from 'components/AddCountry/ModalPortal';

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AddModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const AddModal = ({ show, children, onClose }: AddModalProps) => {
  if (!show) {
    return null;
  }
  return (
    <ModalPortalWrap>
      <BackDrop onClick={onClose}>{children}</BackDrop>
    </ModalPortalWrap>
  );
};
