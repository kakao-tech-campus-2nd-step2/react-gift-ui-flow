import styled from '@emotion/styled';

import { Heading } from '@/components/atoms/Heading';

type Heading2Prop = {
  hContent: string;
};

export const Heading2 = ({ hContent }: Heading2Prop) => {
  return <StyledHeading hContent={hContent} hNumber={2} />;
};

const StyledHeading = styled(Heading)`
  color: #000;
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  line-height: 50px;
`;
