import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterStyle>
      <TitleStyle>FESPA</TitleStyle>
      <CopyrightStyle>copyright &copy; 2022 by FESPA</CopyrightStyle>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  padding: var(--layout-padding);
`;

const TitleStyle = styled.h1`
  font-size: 1.125rem;
`;

const CopyrightStyle = styled.p`
  font-size: 0.725rem;
`;
