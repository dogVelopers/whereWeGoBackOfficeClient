import { ReactNode, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { ModalPortalWrap } from 'components/Modal/ModalPortal';

interface IModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ show, children, onClose }: IModalProps) => {
  const onClickBackDrop = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLElement).id !== 'modal-backdrop') return;

    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <ModalPortalWrap>
      <BackDrop id="modal-backdrop" onClick={onClickBackDrop}>
        {children}
      </BackDrop>
    </ModalPortalWrap>
  );
};

// Modal 창 위치 및 style
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
