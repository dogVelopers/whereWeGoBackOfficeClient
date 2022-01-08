import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// 라우터 v6 변경 사항 적용.
import styled from '@emotion/styled';
import { AddCountry } from 'components/AddCountry/AddCountry';
import { CountryList } from 'components/CountryList';

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
      <MainContainer>
        {/* add modal */}
        <ModalWrapper>
          <AddCountry />
        </ModalWrapper>

        {/* country list */}
        <CountryListWrapper>
          <CountryList />
        </CountryListWrapper>
      </MainContainer>
    </>
  );
};

// Main page
const MainContainer = styled.div``;

// Modal component
const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// country list component
const CountryListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
