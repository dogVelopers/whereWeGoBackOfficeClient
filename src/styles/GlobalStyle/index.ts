import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Noto Sans KR', sans-serif;
}

// 수정, 추가, 삭제 버튼 통일
button {
  bottom: 0px;
  margin-left: 4vw;
  width: 70%;
  height: 35px;
  line-height: 30px;
  background-color: black;
  border: 0;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 5px;
  font-size: 12pt;
  color: white;
  cursor: pointer;
}
`;

export default GlobalStyle;
