import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import useGetNations from 'hooks/api/useGetNations';
import { EditCountry } from 'components/CountryList/EditCountry';

export const CountryList = () => {
  const [expanded, setExpanded] = useState(false);
  const { data } = useGetNations();
  // INation에 저장된 모든 data 출력.

  console.log(data);

  return (
    // nation 정보를 담는 coutry 박스 컴포넌트 생성.
    // map으로 돌려서 list 출력.
    <CountryBoxContainer>
      {data?.map((list) => {
        return (
          // map으로 data list 출력
          <CountryListBox key={list?.id}>
            <ImageContainer>
              <ImageStyle src={list?.image_url} alt={list?.nation_name} />

              <TitleContainerStyle>
                <ContinentNameStyle>{list?.continent_name}</ContinentNameStyle>
                <NationNameStyle>{list?.nation_name}</NationNameStyle>

                <p>
                  <CountryInfo>"{list?.introduce}"</CountryInfo>
                  <CountryPolicy>{list?.quarantine_policy}</CountryPolicy>
                </p>
              </TitleContainerStyle>

              {/* edit, delete 아이콘 클릭시 전체가 drop 되는 문제. */}
              <ButtonContainerStyle>
                <ButtonIconStyle>
                  <EditIcon />
                </ButtonIconStyle>

                <ButtonIconStyle>
                  <DeleteIcon />
                </ButtonIconStyle>
              </ButtonContainerStyle>
            </ImageContainer>

            {/* 아이콘 클릭시 수정 컴포넌트 drop. */}
            <div>{expanded && '하이'}</div>
          </CountryListBox>
        );
      })}
    </CountryBoxContainer>
  );
};

const CountryBoxContainer = styled.div`
  font-family: ${({ theme }) => theme.fontStyles.style};
`;
const CountryListBox = styled.div`
  margin: 3vw;
  -webkit-appearance: none;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
  border-radius: 24px;
  overflow: hidden;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleContainerStyle = styled.div`
  // img 위에 text 겹치기 위함.
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 20px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const ButtonContainerStyle = styled.div`
  // img 위에 text 겹치기 위함.
  position: absolute;
  bottom: 1vw;
  right: 2vw;
  color: white;
  font-size: large;
  cursor: pointer;
`;

const ButtonIconStyle = styled.span`
  padding: 5px;
`;

const ContinentNameStyle = styled.h1`
  font-size: 1rem;
  line-height: 0%;
`;

const NationNameStyle = styled.h2`
  font-size: 1.8rem;
`;

const CountryInfo = styled.div`
  font-size: 14pt;
  font-weight: 600;
  margin: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const CountryPolicy = styled.div`
  font-size: 13pt;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;
