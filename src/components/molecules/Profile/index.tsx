import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';

import { ContainerJustifyContentType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Container } from '@/components/molecules/Container';

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
