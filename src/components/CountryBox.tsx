import React from 'react';
import styled from 'styled-components';

// 국가 list get
// box 디자인
// 조회 list 생성

export const CountryBox = () => {
  return (
    // get으로 등록되어았는 모든 국가들을 map으로 불러와 각 리스트 출력하기.
    <CountryBoxContainer>
      <CountryBoxList>box contents</CountryBoxList>
    </CountryBoxContainer>
  );
};

const CountryBoxContainer = styled.div``;
const CountryBoxList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  margin: 2vw;
  min-width: 50vw;
  min-height: 8vw;
  text-align: center;
  -webkit-appearance: none;
  cursor: pointer;
`;
