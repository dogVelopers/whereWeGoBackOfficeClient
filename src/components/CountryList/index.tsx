import React from 'react';
import styled from 'styled-components';
import { INation } from 'types';
import useGetNations from 'hooks/api/useGetNations';

// 국가 list get
// box 디자인
// 조회 list 생성

export const CountryList = () => {
  const { data } = useGetNations();
  // INation에 저장된 모든 data 출력.
  // 리스트 낱개 출력 방식 알아보기.\
  console.log(data?.[0]);

  return (
    // nation 정보를 담는 coutry 박스 컴포넌트 생성.
    // map으로 돌려서 list 출력.
    <CountryBoxContainer>
      {/* 이 부분에 각 낱개 data를 보여주는 box 컴포넌트를 넣을 예정. */}
      <CountryListBox>
        <CountryImg>
          <img src={data?.[0].image_url} width="300vw" />
        </CountryImg>
        <ContinentName>
          continent_name: {data?.[0].continent_name}
        </ContinentName>
        <NationName>nation_name: {data?.[0].nation_name}</NationName>
        <CountryInfo>introduce: {data?.[0].introduce}</CountryInfo>

        <QuarantinePolicy>
          quarantine_policy: {data?.[0].quarantine_policy}
        </QuarantinePolicy>
      </CountryListBox>
    </CountryBoxContainer>
  );
};

const CountryBoxContainer = styled.div``;
const CountryListBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  margin: 2vw;
  min-width: 50vw;
  min-height: 8vw;
  text-align: center;
  -webkit-appearance: none;
`;

const CountryImg = styled.div``;
const CountryInfo = styled.div``;
const NationName = styled.div``;
const ContinentName = styled.div``;
const QuarantinePolicy = styled.div``;
