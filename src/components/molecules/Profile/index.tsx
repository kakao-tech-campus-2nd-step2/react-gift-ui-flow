import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';

import { ContainerJustifyContentType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Container } from '@/components/molecules/Container';

export type ProfileProps = {
  name: string | undefined;
  onClick: MouseEventHandler<HTMLParagraphElement>;
};

export const Profile = ({ name, onClick }: ProfileProps) => {
  const label = name === undefined ? '로그인' : '내 계정';

  return (
    <Container justifyContent={ContainerJustifyContentType.flexEnd}>
      <ProfileParagraph onClick={onClick} content={label} />
    </Container>
  );
};

const ProfileParagraph = styled(Paragraph)`
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
`;