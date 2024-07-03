import styled from '@emotion/styled';

export type FooterProps = {
    title: string;
  }

const FooterContainer = styled.header`
  background-color: #FCFCFC;
  color: #333;
  padding: 40px calc(8% + 20px) 120px calc(8% + 20px);
  font-size: 8px;
  font-weight: bold;

  @media (max-width: 992px) {
    padding: 20px calc(4% + 20px);
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const Footer:React.FC<FooterProps> = ({ title }) => (
  <FooterContainer>
    <h1>{title}</h1>
  </FooterContainer>
);

export default Footer;
