import styled from '@emotion/styled';

export type FooterProps = {
    title: string;
  }

const FooterContainer = styled.header`
  background-color: #eee;
  color: #333;
  padding: 20px 20px 40px 20px;
  font-size: 8px;
  font-weight: bold;
`;

const Footer:React.FC<FooterProps> = ({ title }) => (
  <FooterContainer>
    <h1>{title}</h1>
  </FooterContainer>
);

export default Footer;
