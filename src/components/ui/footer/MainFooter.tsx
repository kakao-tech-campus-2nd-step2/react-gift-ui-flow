import styled from '@emotion/styled';

const Layout = styled.footer`
  width: calc(100% - 32px);
  max-width: calc(100vw - 32px);
  padding: 40px 16px 120px;
`;

const MainFooter = () => {
  return <Layout>카카오톡 선물하기</Layout>;
};

export default MainFooter;
