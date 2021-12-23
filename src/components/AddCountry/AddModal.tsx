import React, { ReactElement } from 'react';
import CloseIcon from '@material-ui/icons/Close';
// import './AddModal.css';

interface props {
  // modal 창 open || close 상태 확인을 위한 타입 선언
  open: boolean;
  close: () => void; // 함수 타입 정의
}
const AddModal = (props: props): ReactElement => {
  const { open, close } = props;

  return (
    <>
      <div className={open ? 'bg' : ''} />
      <div className={open ? 'modal active' : 'modal'}>
        {open ? (
          <div className="addContainer">
            <CloseIcon className="close" onClick={close} />
            <p>수정 내용</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AddModal;
