import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Noto Sans KR', sans-serif;
  --footer-bg-color: #555555;
  --footer-text-color: #cccccc;
  --layout-padding: 8px 6px;
}

// 수정, 추가, 삭제 버튼 통일
button {
  margin-left: 4vw;
  margin-top: 1vw;
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
