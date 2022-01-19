import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <TitleStyle>FESPA</TitleStyle>
      <CopyrightStyle>copyright &copy; 2021 by FESPA</CopyrightStyle>
    </FooterStyle>
  );
};

export default Footer;

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
