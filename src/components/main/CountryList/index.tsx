import styled from 'styled-components';
import { EditCountry } from 'components/main/CountryList/EditCountry';
import { DeleteCountry } from 'components/main/CountryList/DeleteCountry';
import { INation } from 'types';

interface ICountryListProps {
  data: INation[];
}

export const CountryList = ({ data }: ICountryListProps) => {
  return (
    <CountryBoxContainer>
      {data.map((country) => {
        return (
          <CountryListBox key={country.id}>
            <ImageContainer>
              <ImageStyle src={country.imageUrl} alt={country.nationName} />

              <TitleContainerStyle>
                <ContinentNameStyle>{country.continentName}</ContinentNameStyle>
                <NationNameStyle>{country.nationName}</NationNameStyle>

                <CountryInfo>"{country.introduce}"</CountryInfo>
                <CountryPolicy>{country.quarantinePolicy}</CountryPolicy>
              </TitleContainerStyle>

              <ModifiedDate>최종 수정일: {country.modifiedDate}</ModifiedDate>

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
  width: 40vw;
  height: 20vw;
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
  font-size: 1vw;
  line-height: 0%;
`;

const NationNameStyle = styled.h2`
  font-size: 1.3vw;
`;

const CountryInfo = styled.div`
  font-size: 1.2vw;
  font-weight: 600;
  margin: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const CountryPolicy = styled.div`
  font-size: 1vw;
  margin-top: 2vw;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const ModifiedDate = styled.div`
  position: absolute;
  bottom: 1vw;
  left: 2.5vw;
  color: white;
  font-size: 1vw;
  font-weight: 500;
`;
