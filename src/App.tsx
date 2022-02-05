import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import { SearchCountry } from 'components/main/SearchCountry';
import { AddCountry } from 'components/main/AddCountry/AddCountry';
import { CountryList } from 'components/main/CountryList';
import { Footer } from 'components/footer';
import useGetNations from 'hooks/api/useGetNations';
import { INation } from 'types';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </>
  );
}

const Main = () => {
  const { data } = useGetNations();
  const [searchedData, setSearchedData] = useState<INation[]>([]);

  if (!data) return <div>loading...</div>;
  return (
    <>
      <MainContainer>
        <BoxWrapper>
          <AddCountry />
        </BoxWrapper>

        <BoxWrapper>
          <SearchCountry data={data} setSearchedData={setSearchedData} />
        </BoxWrapper>

        <BoxWrapper>
          <CountryList data={searchedData} />
        </BoxWrapper>
      </MainContainer>

      <FooterContainer>
        <BoxWrapper>
          <Footer />
        </BoxWrapper>
      </FooterContainer>
    </>
  );
};

// Main page
const MainContainer = styled.div``;

// Modal component
const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div``;
