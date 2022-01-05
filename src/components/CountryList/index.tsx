import React from 'react';
import styled from 'styled-components';
import useGetNations from 'hooks/api/useGetNations';
import { EditCountry } from 'components/CountryList/EditCountry';
import { DeleteCountry } from 'components/CountryList/DeleteCountry';
import useNations from 'hooks/api/useNations';
import { INation } from 'types';

export const CountryList = () => {
  const { data } = useGetNations();
  const { deleteNation } = useNations();

  console.log(data);

  const onSubmit = (form: INation) => {
    console.log(form);
  };

  if (!data) return <div>loading ... </div>;
  return (
    // nation 정보를 담는 coutry 박스 컴포넌트 생성.
    // map으로 돌려서 list 출력.
    <CountryBoxContainer>
      {data.map((country) => {
        return (
          // map으로 data country 출력
          <CountryListBox key={country.id}>
            <ImageContainer>
              <ImageStyle src={country.image_url} alt={country.nation_name} />

              <TitleContainerStyle>
                <ContinentNameStyle>
                  {country.continent_name}
                </ContinentNameStyle>
                <NationNameStyle>{country.nation_name}</NationNameStyle>

                <p>
                  <CountryInfo>"{country.introduce}"</CountryInfo>
                  <CountryPolicy>{country.quarantine_policy}</CountryPolicy>
                </p>
              </TitleContainerStyle>

              <ButtonContainerStyle>
                <EditCountry
                  onSubmit={onSubmit}
                  id={country.id}
                  imageUrl={country.image_url}
                  nationName={country.nation_name}
                  continentName={country.continent_name}
                  introduceInfo={country.introduce}
                  quarantinePolicy={country.quarantine_policy}
                />
                <ButtonIconStyle>
                  <DeleteCountry
                    id={country.id}
                    nationName={country.nation_name}
                    continentName={country.continent_name}
                  />
                </ButtonIconStyle>
              </ButtonContainerStyle>
            </ImageContainer>
          </CountryListBox>
        );
      })}
    </CountryBoxContainer>
  );
};

const CountryBoxContainer = styled.div``;
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
