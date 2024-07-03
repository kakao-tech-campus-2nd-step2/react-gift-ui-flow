import styled from '@emotion/styled';

import { Container } from '@/components/atoms/Container';

export type ProfileProps = {
  name: string;
};

export const Profile = ({ name = '' }: ProfileProps) => {
  const label = name ? name : '로그인';
  return (
    <Container justifyContent="flex-end">
      <ProfileContent onClick={() => alert('hi')}>{label}</ProfileContent>
    </Container>
  );
};

const ProfileContent = styled.p`
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
`;
