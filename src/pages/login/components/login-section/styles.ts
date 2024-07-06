import styled from '@emotion/styled';

export const SectionLayout = styled.article`
  width: 100%;
  max-width: 580px;
  padding: 16px;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 60px 52px;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: rgb(25, 25, 25);
  transition: border-color 200ms ease 0s;
  border-style: solid;
  min-height: 42px;
  font-size: 15px;
  line-height: 1.5;
  padding: 9px 0px;
  border-width: 0px 0px 1px;
  border-color: rgb(204, 204, 204);

  :focus {
    outline: none;
    border-color: rgb(51, 51, 51);
  }
`;

export const InputSpacer = styled.div`
  width: 100%;
  background-color: inherit;
  height: 16px;
  display: block;
  unicode-bidi: isolate;
`;

export const ButtonSpacer = styled.div`
  width: 100%;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    height: 60px;
  }

  @media screen and (min-width: 0) {
    height: 40px;
  }
`;
