import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// 라우터 v6 변경 사항 적용.
import styled from '@emotion/styled';
import { AddCountry } from 'components/main/AddCountry/AddCountry';
import { CountryList } from 'components/main/CountryList';
import Footer from 'components/footer/index';

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
  return (
    <>
      {/* main */}
      <MainContainer>
        <ContentWrapper>
          <AddCountry />
        </ContentWrapper>

        <ContentWrapper>
          <CountryList />
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

const FooterContainer = styled.div``;
