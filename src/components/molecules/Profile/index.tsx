import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';

import { Container } from '@/components/atoms/Container';
import { ContainerJustifyContentType } from '@/components/atoms/Container/types';
import { Paragraph } from '@/components/atoms/Paragraph';

export type ProfileProps = {
  name: string | undefined;
  onClick: MouseEventHandler<HTMLParagraphElement>;
};

export const Profile = ({ name = '로그인', onClick }: ProfileProps) => {
  return (
    <Container justifyContent={ContainerJustifyContentType.flexEnd}>
      <ProfileParagraph onClick={onClick} content={name} />
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
