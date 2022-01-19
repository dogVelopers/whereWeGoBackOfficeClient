import React from 'react';
import styled from 'styled-components';
import { EditCountry } from 'components/main/CountryList/EditCountry';
import { DeleteCountry } from 'components/main/CountryList/DeleteCountry';
import useGetNations from 'hooks/api/useGetNations';

export const CountryList = () => {
  const { data } = useGetNations();

  if (!data) return <div>loading ... </div>;
  return (
    <CountryBoxContainer>
      {data.map((country) => {
        console.log(country.continentName);
        return (
          <CountryListBox key={country.id}>
            <ImageContainer>
              <ImageStyle src={country.imageUrl} alt={country.nationName} />

              <TitleContainerStyle>
                <ContinentNameStyle>{country.continentName}</ContinentNameStyle>
                <NationNameStyle>{country.nationName}</NationNameStyle>

                <p>
                  <CountryInfo>"{country.introduce}"</CountryInfo>
                  <CountryPolicy>{country.quarantinePolicy}</CountryPolicy>
                </p>
              </TitleContainerStyle>

              <ButtonContainerStyle>
                <EditCountry
                  id={country.id}
                  putImageUrl={country.imageUrl}
                  putNationName={country.nationName}
                  putContinentName={country.continentName}
                  putIntroduce={country.introduce}
                  putQuarantinePolicy={country.quarantinePolicy}
                />
                <ButtonIconStyle>
                  <DeleteCountry
                    id={country.id}
                    nationName={country.nationName}
                    continentName={country.continentName}
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
  font-size: 1.3vw;
  line-height: 0%;
`;

const NationNameStyle = styled.h2`
  font-size: 1.8vw;
`;

const CountryInfo = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
  margin: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const CountryPolicy = styled.div`
  font-size: 1.3vw;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;
