import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image';

type Props = {
  imageSrc: string;
  label: string;
  to: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ItemImage = ({ imageSrc, label, to }: Props) => (
  <Link to={to}>
    <Wrapper>
      <StyledImage src={imageSrc} alt={label} radius={10} />
      <Label>{label}</Label>
    </Wrapper>
  </Link>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 13px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
`;

const Label = styled.p`
  padding-top: 5px;
  font-size: 13px;
  line-height: 17px;
  color: #333;
`;
