// react-dom createPortal 사용 Modal 구현
// Modal의 style 유지 및 z-index의 효율적 관리.
// 컴포넌트 렌더링 효율 극대화
import { useMemo, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IModalPortalProps {
  children: ReactNode;
}

export const ModalPortalWrap = ({ children }: IModalPortalProps) => {
  // div tag 생성 > styled 적용.
  const subDiv = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    subDiv.id = 'modal-portal-wrap';
    document.body.appendChild(subDiv);
    return () => subDiv.remove();
  }, [subDiv]);
  return createPortal(<>{children}</>, subDiv);
};
