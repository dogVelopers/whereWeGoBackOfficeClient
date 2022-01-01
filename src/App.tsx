import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// 라우터 v6 변경 사항 적용.
import styled from '@emotion/styled';
import SearchCountry from 'components/SearchCountry';
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

const Main: React.FC = () => {
  const onSubmit = (form: {
    image_url: string;
    nation_name: string;
    continent_name: string;
    introduce: string;
    quarantine_policy: string;
  }) => {
    console.log(form);
  };

  return (
    <>
      <MainContainer>
        {/* search */}
        <SearchWrapper>
          <SearchCountry />
        </SearchWrapper>

        {/* add modal */}
        <ModalWrapper>
          <AddCountry onSubmit={onSubmit} />
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

// search component
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
