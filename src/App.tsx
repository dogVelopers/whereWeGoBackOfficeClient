import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// 라우터 v6 변경 사항 적용.
import styled from '@emotion/styled';
import SearchCountry from 'components/SearchCountry';
import { AddCountry } from 'components/AddCountry/AddCountry';
import CountryBox from 'components/CountryBox';
import './App.css';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: #61dafb;
`;

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

function Main() {
  // main 페이지 레이아웃

  return (
    <>
      <div className="main-container">
        <SearchCountry />
        <AppWrapper>
          <AddCountry />
        </AppWrapper>
        <CountryBox />
      </div>
    </>
  );
}
