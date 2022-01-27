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
      {/* main */}
      <MainContainer>
        <ContentWrapper>
          <AddCountry />
        </ContentWrapper>

        {/* search */}
        <SearchWrapper>
          <SearchCountry data={data} setSearchedData={setSearchedData} />
        </SearchWrapper>

        <ContentWrapper>
          <CountryList data={searchedData} />
        </ContentWrapper>
      </MainContainer>

      {/* footer */}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

// Main page
const MainContainer = styled.div``;

// Modal component
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-top: 2vw;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div``;
